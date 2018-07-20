import test from "./node_modules/tape/index.js";
import slugify from "./index.js";

test("standard-slugify with empty arguments", ({ equal, end }) => {
  equal(slugify(), "");
  equal(slugify(""), "");
  equal(slugify(undefined, {}), "");
  equal(slugify("", {}), "");
  end();
});

test("standard-slugify with first argument of wrong type", ({
  throws,
  end
}) => {
  throws(() => slugify(true), TypeError);
  throws(() => slugify(false), TypeError);
  throws(() => slugify(null), TypeError);
  throws(() => slugify(0), TypeError);
  throws(() => slugify({}), TypeError);
  throws(() => slugify([]), TypeError);
  throws(() => slugify(() => {}), TypeError);
  end();
});

test("standard-slugify with optional argument of wrong type", ({
  throws,
  end
}) => {
  throws(() => slugify("", true), TypeError);
  throws(() => slugify("", false), TypeError);
  throws(() => slugify("", null), TypeError);
  throws(() => slugify("", 0), TypeError);
  throws(() => slugify("", ""), TypeError);
  throws(() => slugify("", () => {}), TypeError);
  end();
});

test("standard-slugify with rfc3986 percent-encoding US-ASCII character", ({
  equal,
  end
}) => {
  equal(slugify("%"), "", "removes percent-encoding character `%`");
  end();
});

test("standard-slugify with rfc3986 reserved gen-delims US-ASCII characters", ({
  equal,
  end
}) => {
  equal(slugify(":"), "", "removes rfc3986 gen-delim `:`");
  equal(slugify("/"), "", "removes rfc3986 gen-delim `/`");
  equal(slugify("?"), "", "removes rfc3986 gen-delim `?`");
  equal(slugify("#"), "", "removes rfc3986 gen-delim `#`");
  equal(slugify("["), "", "removes rfc3986 gen-delim `[`");
  equal(slugify("]"), "", "removes rfc3986 gen-delim `]`");
  equal(slugify("@"), "", "removes rfc3986 gen-delim `@`");
  end();
});

test("standard-slugify with rfc3986 reserved sub-delims US-ASCII characters", ({
  equal,
  end
}) => {
  equal(slugify("!"), "", "removes rfc3986 sub-delim `!`");
  equal(slugify("$"), "", "removes rfc3986 sub-delim `$`");
  equal(slugify("&"), "", "removes rfc3986 sub-delim `&`");
  equal(slugify("'"), "", "removes rfc3986 sub-delim `'`");
  equal(slugify("("), "", "removes rfc3986 sub-delim `(`");
  equal(slugify(")"), "", "removes rfc3986 sub-delim `)`");
  equal(slugify("*"), "", "removes rfc3986 sub-delim `*`");
  equal(slugify("+"), "", "removes rfc3986 sub-delim `+`");
  equal(slugify(","), "", "removes rfc3986 sub-delim `,`");
  equal(slugify(";"), "", "removes rfc3986 sub-delim `;`");
  equal(slugify("="), "", "removes rfc3986 sub-delim `=`");
  end();
});

test("standard-slugify with rfc3986 forbidden US-ASCII characters", ({
  equal,
  end
}) => {
  equal(slugify('"'), "", 'removes rfc3986 forbidden character `"`');
  equal(slugify("<"), "", "removes rfc3986 forbidden character `<`");
  equal(slugify(">"), "", "removes rfc3986 forbidden character `>`");
  equal(slugify("\\"), "", "removes rfc3986 forbidden character `\\`");
  equal(slugify("^"), "", "removes rfc3986 forbidden character `^`");
  equal(slugify("`"), "", "removes rfc3986 forbidden character ```");
  equal(slugify("{"), "", "removes rfc3986 forbidden character `{`");
  equal(slugify("|"), "", "removes rfc3986 forbidden character `|`");
  equal(slugify("}"), "", "removes rfc3986 forbidden character `}`");
  end();
});

test("standard-slugify with rfc3986 unreserved US-ASCII uppercase letters", ({
  equal,
  end
}) => {
  equal(slugify("A"), "a", "lowercases uppercase letter `A`");
  equal(slugify("B"), "b", "lowercases uppercase letter `B`");
  equal(slugify("C"), "c", "lowercases uppercase letter `C`");
  equal(slugify("D"), "d", "lowercases uppercase letter `D`");
  equal(slugify("E"), "e", "lowercases uppercase letter `E`");
  equal(slugify("F"), "f", "lowercases uppercase letter `F`");
  equal(slugify("G"), "g", "lowercases uppercase letter `G`");
  equal(slugify("H"), "h", "lowercases uppercase letter `H`");
  equal(slugify("I"), "i", "lowercases uppercase letter `I`");
  equal(slugify("J"), "j", "lowercases uppercase letter `J`");
  equal(slugify("K"), "k", "lowercases uppercase letter `K`");
  equal(slugify("L"), "l", "lowercases uppercase letter `L`");
  equal(slugify("M"), "m", "lowercases uppercase letter `M`");
  equal(slugify("N"), "n", "lowercases uppercase letter `N`");
  equal(slugify("O"), "o", "lowercases uppercase letter `O`");
  equal(slugify("P"), "p", "lowercases uppercase letter `P`");
  equal(slugify("Q"), "q", "lowercases uppercase letter `Q`");
  equal(slugify("R"), "r", "lowercases uppercase letter `R`");
  equal(slugify("S"), "s", "lowercases uppercase letter `S`");
  equal(slugify("T"), "t", "lowercases uppercase letter `T`");
  equal(slugify("U"), "u", "lowercases uppercase letter `U`");
  equal(slugify("V"), "v", "lowercases uppercase letter `V`");
  equal(slugify("W"), "w", "lowercases uppercase letter `W`");
  equal(slugify("X"), "x", "lowercases uppercase letter `X`");
  equal(slugify("Y"), "y", "lowercases uppercase letter `Y`");
  equal(slugify("Z"), "z", "lowercases uppercase letter `Z`");
  end();
});

test("standard-slugify with rfc3986 unreserved US-ASCII lowercase letters", ({
  equal,
  end
}) => {
  equal(slugify("a"), "a", "keeps lowercase letter `a`");
  equal(slugify("b"), "b", "keeps lowercase letter `b`");
  equal(slugify("c"), "c", "keeps lowercase letter `c`");
  equal(slugify("d"), "d", "keeps lowercase letter `d`");
  equal(slugify("e"), "e", "keeps lowercase letter `e`");
  equal(slugify("f"), "f", "keeps lowercase letter `f`");
  equal(slugify("g"), "g", "keeps lowercase letter `g`");
  equal(slugify("h"), "h", "keeps lowercase letter `h`");
  equal(slugify("i"), "i", "keeps lowercase letter `i`");
  equal(slugify("j"), "j", "keeps lowercase letter `j`");
  equal(slugify("k"), "k", "keeps lowercase letter `k`");
  equal(slugify("l"), "l", "keeps lowercase letter `l`");
  equal(slugify("m"), "m", "keeps lowercase letter `m`");
  equal(slugify("n"), "n", "keeps lowercase letter `n`");
  equal(slugify("o"), "o", "keeps lowercase letter `o`");
  equal(slugify("p"), "p", "keeps lowercase letter `p`");
  equal(slugify("q"), "q", "keeps lowercase letter `q`");
  equal(slugify("r"), "r", "keeps lowercase letter `r`");
  equal(slugify("s"), "s", "keeps lowercase letter `s`");
  equal(slugify("t"), "t", "keeps lowercase letter `t`");
  equal(slugify("u"), "u", "keeps lowercase letter `u`");
  equal(slugify("v"), "v", "keeps lowercase letter `v`");
  equal(slugify("w"), "w", "keeps lowercase letter `w`");
  equal(slugify("x"), "x", "keeps lowercase letter `x`");
  equal(slugify("y"), "y", "keeps lowercase letter `y`");
  equal(slugify("z"), "z", "keeps lowercase letter `z`");
  end();
});

test("standard-slugify with rfc3986 unreserved US-ASCII decimal digits", ({
  equal,
  end
}) => {
  equal(slugify("0"), "0", "keeps decimal digit `0`");
  equal(slugify("1"), "1", "keeps decimal digit `1`");
  equal(slugify("2"), "2", "keeps decimal digit `2`");
  equal(slugify("3"), "3", "keeps decimal digit `3`");
  equal(slugify("4"), "4", "keeps decimal digit `4`");
  equal(slugify("5"), "5", "keeps decimal digit `5`");
  equal(slugify("6"), "6", "keeps decimal digit `6`");
  equal(slugify("7"), "7", "keeps decimal digit `7`");
  equal(slugify("8"), "8", "keeps decimal digit `8`");
  equal(slugify("9"), "9", "keeps decimal digit `9`");
  end();
});

test("standard-slugify with rfc3986 unreserved US-ASCII non-alphanumeric characters", ({
  equal,
  end
}) => {
  equal(slugify("a-b"), "a-b", "keeps `-` when it isn't leading or trailing");
  equal(slugify("a_b"), "a_b", "keeps `_` when it isn't leading or trailing");
  equal(slugify("."), "", "removes `.` as it's not safe for file systems");
  equal(slugify("~"), "", "removes `~` as it's not safe for file systems");
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
  equal(slugify("ß"), "ss", "transliterates `ß` as `ss`");
  equal(slugify("æ"), "ae", "transliterates `æ` as `ae`");
  equal(slugify("ø̈"), "oe", "transliterates `ø` as `oe`");
  equal(slugify("þ"), "th", "transliterates `þ` as `th`");
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
  equal(slugify("ĳ"), "ij", "transliterates `ĳ` as `ij`");
  equal(slugify("œ"), "oe", "transliterates `œ` as `oe`");
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
  equal(slugify("ΐ"), "i", "transliterates `ΐ` as `i`");
  equal(slugify("ά"), "a", "transliterates `ά` as `a`");
  equal(slugify("έ"), "e", "transliterates `έ` as `e`");
  equal(slugify("ή"), "i", "transliterates `ή` as `i`");
  equal(slugify("ί"), "i", "transliterates `ί` as `i`");
  equal(slugify("ΰ"), "y", "transliterates `ΰ` as `y`");
  equal(slugify("α"), "a", "transliterates `α` as `a`");
  equal(slugify("β"), "v", "transliterates `β` as `v`");
  equal(slugify("γ"), "g", "transliterates `γ` as `g`");
  equal(slugify("δ"), "d", "transliterates `δ` as `d`");
  equal(slugify("ε"), "e", "transliterates `ε` as `e`");
  equal(slugify("ζ"), "z", "transliterates `ζ` as `z`");
  equal(slugify("η"), "i", "transliterates `η` as `i`");
  equal(slugify("θ"), "th", "transliterates `θ` as `th`");
  equal(slugify("ι"), "i", "transliterates `ι` as `i`");
  equal(slugify("κ"), "k", "transliterates `κ` as `k`");
  equal(slugify("λ"), "l", "transliterates `λ` as `l`");
  equal(slugify("μ"), "m", "transliterates `μ` as `m`");
  equal(slugify("ν"), "n", "transliterates `ν` as `n`");
  equal(slugify("ξ"), "x", "transliterates `ξ` as `x`");
  equal(slugify("ο"), "o", "transliterates `ο` as `o`");
  equal(slugify("π"), "p", "transliterates `π` as `p`");
  equal(slugify("ρ"), "r", "transliterates `ρ` as `r`");
  equal(slugify("ς"), "s", "transliterates `ς` as `s`");
  equal(slugify("σ"), "s", "transliterates `σ` as `s`");
  equal(slugify("τ"), "t", "transliterates `τ` as `t`");
  equal(slugify("υ"), "y", "transliterates `υ` as `y`");
  equal(slugify("φ"), "f", "transliterates `φ` as `f`");
  equal(slugify("χ"), "ch", "transliterates `χ` as `ch`");
  equal(slugify("ψ"), "ps", "transliterates `ψ` as `ps`");
  equal(slugify("ω"), "o", "transliterates `ω` as `o`");
  equal(slugify("ϊ"), "i", "transliterates `ϊ` as `i`");
  equal(slugify("ϋ"), "y", "transliterates `ϋ` as `y`");
  equal(slugify("ό"), "o", "transliterates `ό` as `o`");
  equal(slugify("ύ"), "y", "transliterates `ύ` as `y`");
  equal(slugify("ώ"), "o", "transliterates `ώ` as `o`");
  end();
});

// eslint-disable-next-line max-lines-per-function
test("standard-slugify with Cyrillic alphabetic characters from ISO-8859-5", ({
  equal,
  end
}) => {
  equal(slugify("а"), "a", "transliterates `а` as `a`");
  equal(slugify("б"), "b", "transliterates `б` as `b`");
  equal(slugify("в"), "v", "transliterates `в` as `v`");
  equal(slugify("г"), "g", "transliterates `г` as `g`");
  equal(slugify("е"), "e", "transliterates `е` as `e`");
  equal(slugify("ж"), "zh", "transliterates `ж` as `zh`");
  equal(slugify("з"), "z", "transliterates `з` as `z`");
  equal(slugify("и"), "i", "transliterates `и` as `i`");
  equal(slugify("й"), "i", "transliterates `й` as `i`");
  equal(slugify("к"), "k", "transliterates `к` as `k`");
  equal(slugify("л"), "l", "transliterates `л` as `l`");
  equal(slugify("м"), "m", "transliterates `м` as `m`");
  equal(slugify("н"), "n", "transliterates `н` as `n`");
  equal(slugify("о"), "o", "transliterates `о` as `o`");
  equal(slugify("п"), "p", "transliterates `п` as `p`");
  equal(slugify("р"), "r", "transliterates `р` as `r`");
  equal(slugify("с"), "s", "transliterates `с` as `s`");
  equal(slugify("т"), "t", "transliterates `т` as `t`");
  equal(slugify("у"), "u", "transliterates `у` as `u`");
  equal(slugify("ф"), "f", "transliterates `ф` as `f`");
  equal(slugify("х"), "kh", "transliterates `х` as `kh`");
  equal(slugify("ц"), "ts", "transliterates `ц` as `ts`");
  equal(slugify("ч"), "ch", "transliterates `ч` as `ch`");
  equal(slugify("ш"), "sh", "transliterates `ш` as `sh`");
  equal(slugify("щ"), "shch", "transliterates `щ` as `shch`");
  equal(slugify("ъ"), "ie", "transliterates `ъ` as `ie`");
  equal(slugify("ы"), "y", "transliterates `ы` as `y`");
  equal(slugify("ь"), "", "transliterates `ь` as ``");
  equal(slugify("э"), "e", "transliterates `э` as `e`");
  equal(slugify("ю"), "iu", "transliterates `ю` as `iu`");
  equal(slugify("я"), "ia", "transliterates `я` as `ia`");
  equal(slugify("ѐ"), "e", "transliterates `ѐ` as `e`");
  equal(slugify("ё"), "e", "transliterates `ё` as `e`");
  equal(slugify("ђ"), "d", "transliterates `ђ` as `d`");
  equal(slugify("ѓ"), "g", "transliterates `ѓ` as `g`");
  equal(slugify("є"), "ie", "transliterates `є` as `ie`");
  equal(slugify("ѕ"), "dz", "transliterates `ѕ` as `dz`");
  equal(slugify("і"), "i", "transliterates `і` as `i`");
  equal(slugify("ї"), "i", "transliterates `ї` as `i`");
  equal(slugify("ј"), "j", "transliterates `ј` as `j`");
  equal(slugify("љ"), "lj", "transliterates `љ` as `lj`");
  equal(slugify("њ"), "nj", "transliterates `њ` as `nj`");
  equal(slugify("ћ"), "c", "transliterates `ћ` as `c`");
  equal(slugify("ќ"), "k", "transliterates `ќ` as `k`");
  equal(slugify("ѝ"), "i", "transliterates `ѝ` as `i`");
  equal(slugify("ў"), "u", "transliterates `ў` as `u`");
  equal(slugify("џ"), "dz", "transliterates `џ` as `dz`");
  end();
});

test("standard-slugify with Cyrillic characters from WGL4", ({
  equal,
  end
}) => {
  equal(slugify("ґ"), "g", "transliterates `ґ` as `g`");
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

// See Table 23-1 in https://www.unicode.org/versions/Unicode11.0.0/ch23.pdf
test("standard-slugify with control characters that are separators", ({
  equal,
  end
}) => {
  equal(slugify("a\u0009b"), "a-b", "converts CHARACTER TABULATION to `-`");
  equal(slugify("a\u000Ab"), "a-b", "converts LINE FEED to `-`");
  equal(slugify("a\u000Bb"), "a-b", "converts LINE TABULATION to `-`");
  equal(slugify("a\u000Cb"), "a-b", "converts FORM FEED to `-`");
  equal(slugify("a\u000Db"), "a-b", "converts CARRIAGE RETURN to `-`");
  equal(
    slugify("a\u001Cb"),
    "a-b",
    "converts INFORMATION SEPARATOR FOUR to `-`"
  );
  equal(
    slugify("a\u001Db"),
    "a-b",
    "converts INFORMATION SEPARATOR THREE to `-`"
  );
  equal(
    slugify("a\u001Eb"),
    "a-b",
    "converts INFORMATION SEPARATOR TWO to `-`"
  );
  equal(
    slugify("a\u001Fb"),
    "a-b",
    "converts INFORMATION SEPARATOR ONE to `-`"
  );
  equal(slugify("a\u0085b"), "a-b", "converts NEXT LINE to `-`");
  end();
});

// See White_Space in https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt
test("standard-slugify with non-control white space characters", ({
  equal,
  end
}) => {
  equal(slugify("a\u0020b"), "a-b", "converts SPACE to `-`");
  equal(slugify("a\u00A0b"), "a-b", "converts NO-BREAK SPACE to `-`");
  equal(slugify("a\u1680b"), "a-b", "converts OGHAM SPACE MARK to `-`");
  equal(slugify("a\u2000b"), "a-b", "converts EN QUAD to `-`");
  equal(slugify("a\u2001b"), "a-b", "converts EM QUAD to `-`");
  equal(slugify("a\u2002b"), "a-b", "converts EN SPACE to `-`");
  equal(slugify("a\u2003b"), "a-b", "converts EM SPACE to `-`");
  equal(slugify("a\u2004b"), "a-b", "converts THREE-PER-EM SPACE to `-`");
  equal(slugify("a\u2005b"), "a-b", "converts FOUR-PER-EM SPACE to `-`");
  equal(slugify("a\u2006b"), "a-b", "converts SIX-PER-EM SPACE to `-`");
  equal(slugify("a\u2007b"), "a-b", "converts FIGURE SPACE to `-`");
  equal(slugify("a\u2008b"), "a-b", "converts PUNCTUATION SPACE to `-`");
  equal(slugify("a\u2009b"), "a-b", "converts THIN SPACE to `-`");
  equal(slugify("a\u200Ab"), "a-b", "converts HAIR SPACE to `-`");
  equal(slugify("a\u2028b"), "a-b", "converts LINE SEPARATOR to `-`");
  equal(slugify("a\u2029b"), "a-b", "converts PARAGRAPH SEPARATOR to `-`");
  equal(slugify("a\u202Fb"), "a-b", "converts NARROW NO-BREAK SPACE to `-`");
  equal(
    slugify("a\u205Fb"),
    "a-b",
    "converts MEDIUM MATHEMATICAL SPACE to `-`"
  );
  equal(slugify("a\u3000b"), "a-b", "converts IDEOGRAPHIC SPACE to `-`");
  end();
});

test("standard-slugify with leading and trailing white space characters", ({
  equal,
  end
}) => {
  equal(slugify("\u0020a⁠"), "a", "removes leading SPACE");
  equal(slugify("a\u0020⁠"), "a", "removes trailing SPACE");
  equal(slugify("\u0020\u0020a⁠"), "a", "removes leading SPACE characters");
  equal(slugify("a\u0020\u0020⁠"), "a", "removes trailing SPACE characters");
  end();
});

// See # Pd in https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt
test("standard-slugify with dash punctuation marks", ({ equal, end }) => {
  equal(slugify("a-b"), "a-b", "keeps `-` character");
  equal(slugify("a\u058Ab"), "a-b", "converts ARMENIAN HYPHEN to `-`");
  equal(slugify("a\u05BEb"), "a-b", "converts HEBREW PUNCTUATION MAQAF to `-`");
  equal(
    slugify("a\u1400b"),
    "a-b",
    "converts CANADIAN SYLLABICS HYPHEN to `-`"
  );
  equal(
    slugify("a\u1806b"),
    "a-b",
    "converts MONGOLIAN TODO SOFT HYPHEN to `-`"
  );
  equal(slugify("a\u2010b"), "a-b", "converts HYPHEN to `-`");
  equal(slugify("a\u2011b"), "a-b", "converts NON-BREAKING HYPHEN to `-`");
  equal(slugify("a\u2012b"), "a-b", "converts FIGURE DASH to `-`");
  equal(slugify("a\u2013b"), "a-b", "converts EN DASH to `-`");
  equal(slugify("a\u2014b"), "a-b", "converts EM DASH to `-`");
  equal(slugify("a\u2015b"), "a-b", "converts HORIZONTAL BAR to `-`");
  equal(slugify("a\u2E17b"), "a-b", "converts DOUBLE OBLIQUE HYPHEN to `-`");
  equal(slugify("a\u2E1Ab"), "a-b", "converts HYPHEN WITH DIAERESIS to `-`");
  equal(slugify("a\u2E3Ab"), "a-b", "converts TWO-EM DASH to `-`");
  equal(slugify("a\u2E3Bb"), "a-b", "converts THREE-EM DASH to `-`");
  equal(slugify("a\u2E40b"), "a-b", "converts DOUBLE HYPHEN to `-`");
  equal(slugify("a\u301Cb"), "a-b", "converts WAVE DASH to `-`");
  equal(slugify("a\u3030b"), "a-b", "converts WAVY DASH to `-`");
  equal(
    slugify("a\u30A0b"),
    "a-b",
    "converts KATAKANA-HIRAGANA DOUBLE HYPHEN to `-`"
  );
  equal(
    slugify("a\uFE31b"),
    "a-b",
    "converts PRESENTATION FORM FOR VERTICAL EM DASH to `-`"
  );
  equal(
    slugify("a\uFE32b"),
    "a-b",
    "converts PRESENTATION FORM FOR VERTICAL EN DASH to `-`"
  );
  equal(slugify("a\uFE58b"), "a-b", "converts SMALL EM DASH to `-`");
  equal(slugify("a\uFE63b"), "a-b", "converts SMALL HYPHEN-MINUS to `-`");
  equal(slugify("a\uFF0Db"), "a-b", "converts FULLWIDTH HYPHEN-MINUS to `-`");
  end();
});

test("standard-slugify with leading or trailing separators", ({
  equal,
  end
}) => {
  equal(slugify("--a⁠"), "a", "removes leading `-` characters");
  equal(slugify("a--⁠"), "a", "removes trailing `-` characters");
  end();
});

test("standard-slugify with non-leading or non-trailing connectors", ({
  equal,
  end
}) => {
  equal(slugify("a_b"), "a_b", "keeps LOW LINE character");
  equal(
    slugify("a__b"),
    "a__b",
    "keeps multiple sequential LOW LINE characters"
  );
  end();
});

test("standard-slugify with leading or trailing connectors", ({
  equal,
  end
}) => {
  equal(slugify("__a⁠"), "__a", "keeps leading LOW LINE characters");
  equal(slugify("a__⁠"), "a__", "keeps trailing LOW LINE characters");
  end();
});

test("standard-slugify with inner separators next to connectors", ({
  equal,
  end
}) => {
  equal(slugify("_-a⁠"), "_-a", "keeps `-` after leading LOW LINE");
  equal(slugify("a-_⁠"), "a-_", "keeps `-` before trailing LOW LINE");
  equal(slugify("a_-a⁠"), "a_-a", "keeps `-` after inner LOW LINE");
  equal(slugify("a-_a⁠"), "a-_a", "keeps `-` before inner LOW LINE");
  equal(
    slugify("a⁠_-_a"),
    "a_-_a",
    "keeps `-` between inner LOW LINE characters"
  );
  equal(
    slugify("a⁠-_-a"),
    "a-_-a",
    "keeps LOW LINE between inner `-` characters"
  );
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
