import test from "./node_modules/tape/index.js";
import slugify from "./index.js";

test("standard-slugify with empty arguments", ({ equal, end }) => {
  equal(slugify(), "");
  equal(slugify(undefined), "");
  equal(slugify(""), "");
  equal(slugify(undefined, undefined), "");
  equal(slugify(undefined, {}), "");
  equal(slugify("", undefined), "");
  equal(slugify("", {}), "");
  end();
});

test("standard-slugify with first argument of wrong type", ({
  throws,
  end
}) => {
  throws(() => slugify(false), TypeError);
  throws(() => slugify(true), TypeError);
  throws(() => slugify(0), TypeError);
  throws(() => slugify(1), TypeError);
  throws(() => slugify(null), TypeError);
  throws(() => slugify({}), TypeError);
  throws(() => slugify([]), TypeError);
  throws(() => slugify(() => {}), TypeError);
  end();
});

test("standard-slugify with optional argument of wrong type", ({
  equal,
  end
}) => {
  equal(slugify("", false), "");
  equal(slugify("", true), "");
  equal(slugify("", 0), "");
  equal(slugify("", 1), "");
  equal(slugify("", null), "");
  equal(slugify("", ""), "");
  equal(slugify("", "a"), "");
  equal(slugify("", []), "");
  equal(slugify("", () => {}), "");
  end();
});

test("standard-slugify with rfc3986 reserved US-ASCII characters", ({
  equal,
  end
}) => {
  equal(slugify(":/?#[]@"), "", "removes rfc3986 gen-delims");
  equal(slugify("!$&'()*+,;="), "", "removes rfc3986 sub-delims");
  end();
});

test("standard-slugify with rfc3986 forbidden US-ASCII characters", ({
  equal,
  end
}) => {
  equal(slugify('"<>^`{}\\'), "", "removes forbidden rfc3986 characters");
  end();
});

test("standard-slugify with rfc3986 unreserved US-ASCII characters", ({
  equal,
  end
}) => {
  equal(
    slugify("abcdefghijklmnopqrstuvwxyz"),
    "abcdefghijklmnopqrstuvwxyz",
    "keeps lowercase alphabetic characters"
  );
  equal(
    slugify("ABCDEFGHIJKLMNOPQRSTUVWXYZ"),
    "abcdefghijklmnopqrstuvwxyz",
    "lowercases the uppercase alphabetic characters"
  );
  equal(slugify("0123456789"), "0123456789", "keeps digit characters");
  equal(slugify("a-b"), "a-b", "keeps `-`");
  equal(slugify("a_b"), "a_b", "keeps `_`");
  end();
});

test("standard-slugify with rfc3986 percent encoding character", ({
  equal,
  end
}) => {
  equal(slugify("%"), "", "removes `%` characters");
  end();
});

test("standard-slugify with separators", ({ equal, end }) => {
  equal(slugify("a-b"), "a-b", "keeps HYPHEN-MINUS character");
  equal(
    slugify("a---b"),
    "a-b",
    "converts multiple sequential HYPHEN-MINUS characters to 1 HYPHEN-MINUS"
  );
  equal(slugify("a b"), "a-b", "converts SPACE to HYPHEN-MINUS");
  equal(slugify("a b"), "a-b", "converts EN QUAD to HYPHEN-MINUS");
  equal(slugify("a b"), "a-b", "converts EM QUAD to HYPHEN-MINUS");
  equal(slugify("a b"), "a-b", "converts EN SPACE to HYPHEN-MINUS");
  equal(slugify("a b"), "a-b", "converts EM SPACE to HYPHEN-MINUS");
  equal(slugify("a b"), "a-b", "converts THREE-PER-EM SPACE to HYPHEN-MINUS");
  equal(slugify("a b"), "a-b", "converts FOUR-PER-EM SPACE to HYPHEN-MINUS");
  equal(slugify("a b"), "a-b", "converts SIX-PER-EM SPACE to HYPHEN-MINUS");
  equal(slugify("a b"), "a-b", "converts FIGURE SPACE to HYPHEN-MINUS");
  equal(slugify("a b"), "a-b", "converts PUNCTUATION SPACE to HYPHEN-MINUS");
  equal(slugify("a b"), "a-b", "converts THIN SPACE to HYPHEN-MINUS");
  equal(slugify("a b"), "a-b", "converts HAIR SPACE to HYPHEN-MINUS");
  equal(slugify("a​b"), "a-b", "converts ZERO WIDTH SPACE HYPHEN-MINUS");
  equal(slugify("a‐b"), "a-b", "converts HYPHEN to HYPHEN-MINUS");
  equal(slugify("a‑b"), "a-b", "converts NON-BREAKING HYPHEN to HYPHEN-MINUS");
  equal(slugify("a‒b"), "a-b", "converts FIGURE DASH to HYPHEN-MINUS");
  equal(slugify("a–b"), "a-b", "converts EN DASH to HYPHEN-MINUS");
  equal(slugify("a—b"), "a-b", "converts EM DASH to HYPHEN-MINUS");
  equal(slugify("a―b"), "a-b", "converts HORIZONTAL BAR to HYPHEN-MINUS");
  equal(slugify("a\u2028b"), "a-b", "converts LINE SEPARATOR to HYPHEN-MINUS");
  equal(
    slugify("a\u2029b"),
    "a-b",
    "converts PARAGRAPH SEPARATOR to HYPHEN-MINUS"
  );
  equal(
    slugify("a b"),
    "a-b",
    "converts NARROW NO-BREAK SPACE to HYPHEN-MINUS"
  );
  equal(
    slugify("a b"),
    "a-b",
    "converts MEDIUM MATHEMATICAL SPACE to HYPHEN-MINUS"
  );
  equal(slugify("a⁠b"), "a_b", "converts WORD JOINER to HYPHEN-MINUS");
  end();
});

test("standard-slugify with joiners", ({ equal, end }) => {
  equal(slugify("a_b"), "a_b", "keeps LOW LINE character");
  equal(
    slugify("a__b"),
    "a_b",
    "converts multiple sequential LOW LINE characters to 1"
  );
  equal(slugify("a⁠b"), "a_b", "converts WORD JOINER to LOW LINE");
  end();
});

test("standard-slugify with leading or trailing non-alphanumeric characters", ({
  equal,
  end
}) => {
  equal(slugify("  a⁠"), "a", "removes leading whitespace");
  equal(slugify("a  ⁠"), "a", "removes trailing whitespace");
  equal(slugify("  a  ⁠"), "a", "removes leading and trailing whitespace");
  equal(slugify("--a⁠"), "a", "removes leading separators");
  equal(slugify("a--⁠"), "a", "removes trailing separators");
  equal(slugify("--a--⁠"), "a", "removes leading and trailing separators");
  equal(slugify("__a⁠"), "a", "removes leading joiners");
  equal(slugify("a__⁠"), "a", "removes trailing joiners");
  equal(slugify("__a__⁠"), "a", "removes leading and trailing joiners");
  equal(slugify("_-a⁠"), "a", "removes leading separators and joiners");
  equal(slugify("a-_⁠"), "a", "removes trailing separators and joiners");
  equal(
    slugify("_-a-_⁠"),
    "a",
    "removes leading and trailing separators and joiners"
  );
  equal(
    slugify("_-_⁠"),
    "",
    "removes leading and trailing separators and joiners"
  );
  end();
});

test("standard-slugify with Latin-1 Supplement alphabetic characters", ({
  equal,
  end
}) => {
  equal(
    slugify("àáâãäåçèéêëìíîïðñòóôõöùúûüýÿ"),
    "aaaaaaceeeeiiiidnooooouuuuyy",
    "transliterates Latin-1 Supplement alphabetic characters with diacritics"
  );
  equal(slugify("straße"), "strasse", "transliterates `ß` as `ss`");
  equal(slugify("vitæ"), "vitae", "transliterates `æ` as `ae`");
  equal(slugify("Grø̈nland"), "groenland", "transliterates `ø` as `oe`");
  equal(slugify("þorn"), "thorn", "transliterates `þ` as `th`");
  end();
});

test("standard-slugify with Latin Extended-A alphabetic characters", ({
  equal,
  end
}) => {
  equal(
    slugify("āăąćĉċčďđēĕėęěĝğġģĥħĩīĭįıĵķĸĺļľŀłńņňŉŋōŏőŕŗřśŝşšţťŧũūŭůűųŵŷźżžſ"),
    "aaaccccddeeeeegggghhiiiiijkklllllnnnnnooorrrsssstttuuuuuuwyzzzs",
    "transliterates Latin Extended-A alphabetic non-ligature characters"
  );
  equal(slugify("Snĳder"), "snijder", "transliterates `ĳ` as `ij`");
  equal(slugify("phœnix"), "phoenix", "transliterates `œ` as `oe`");
  end();
});

test("standard-slugify with Latin Extended-B characters from WGL4", ({
  equal,
  end
}) => {
  equal(slugify("ƒ"), "f", "transliterates `ƒ` as `f`");
  equal(slugify("ǻ"), "a", "transliterates `ǻ` as `a`");
  equal(slugify("ǽ"), "ae", "transliterates `ǽ` as `ae`");
  equal(slugify("ǿ"), "oe", "transliterates `ǿ` as `oe`");
  end();
});

test("standard-slugify with Latin Extended-B characters from ISO-8859-16", ({
  equal,
  end
}) => {
  equal(slugify("ș"), "s", "transliterates `ș` as `s`");
  equal(slugify("ț"), "t", "transliterates `ț` as `t`");
  end();
});

test("standard-slugify with Greek and Coptic alphabetic characters from ISO-8859-7", ({
  equal,
  end
}) => {
  equal(slugify("δημοκρατία"), "dimokratia", "transliterates Greek");
  end();
});

test("standard-slugify with Cyrillic alphabetic characters from ISO-8859-5", ({
  equal,
  end
}) => {
  equal(slugify("артіст"), "artist", "transliterates Cyrillic");
  end();
});

test("standard-slugify with Cyrillic characters from WGL4", ({
  equal,
  end
}) => {
  equal(slugify("ґава"), "gava", "transliterates `ґ` to `g`");
  end();
});

test("standard-slugify with Cyrillic Ukrainian characters", ({
  equal,
  end
}) => {
  equal(slugify("Європе́йський"), "ievropeiskyi", "transliterates `и` as `y`");
  end();
});

test("standard-slugify with Latin Extended Additional characters from ISO-8859-14", ({
  equal,
  end
}) => {
  equal(slugify("ḃ"), "b", "transliterates `ḃ` as `b`");
  equal(slugify("ḋ"), "d", "transliterates `ḋ` as `d`");
  equal(slugify("ḟ"), "f", "transliterates `ḟ` as `f`");
  equal(slugify("ṁ"), "m", "transliterates `ṁ` as `m`");
  equal(slugify("ṗ"), "p", "transliterates `ṗ` as `p`");
  equal(slugify("ṡ"), "s", "transliterates `ṡ` as `s`");
  equal(slugify("ṫ"), "t", "transliterates `ṫ` as `t`");
  equal(slugify("ẁ"), "w", "transliterates `ẁ` as `w`");
  equal(slugify("ẃ"), "w", "transliterates `ẃ` as `w`");
  equal(slugify("ẅ"), "w", "transliterates `ẅ` as `w`");
  equal(slugify("ỳ"), "y", "transliterates `ỳ` as `y`");
  end();
});

test("standard-slugify with Alphabetic Presentation Forms characters from WGL4", ({
  equal,
  end
}) => {
  equal(slugify("ﬁ"), "fi", "transliterates `ﬁ` as `fi`");
  equal(slugify("ﬂ"), "fl", "transliterates `ﬂ` as `fl`");
  end();
});

test("standard-slugify with custom replacements", ({ equal, end }) => {
  equal(
    slugify("$ and ₿ raising, € falling", {
      $: "usd", // DOLLAR SIGN, United States of America
      "€": "eur", // EURO SIGN, European Monetary Union
      "₿": "xbt" // BITCOIN SIGN, Bitcoin
    }),
    "usd-and-xbt-raising-eur-falling",
    "uses custom replacements"
  );
  end();
});
