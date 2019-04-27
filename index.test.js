import test from "./node_modules/tape/index.js";
import slugify from "./index.js";

test("standard-slugify with empty arguments", ({ equal, end }) => {
  equal(slugify(), "", "returns an empty string when given nothing");
  equal(slugify(""), "", "returns an empty string when given an empty string");
  equal(
    slugify(undefined, {}),
    "",
    "returns an empty string when given undefined and an empty object"
  );
  equal(
    slugify("", {}),
    "",
    "returns an empty string when given an empty string and an empty object"
  );
  end();
});

test("standard-slugify with first argument of wrong type", ({
  throws,
  end
}) => {
  throws(() => slugify(true), TypeError, "throws TypeError when given true");
  throws(() => slugify(false), TypeError, "throws TypeError when given false");
  throws(() => slugify(null), TypeError, "throws TypeError when given null");
  throws(() => slugify(0), TypeError, "throws TypeError when given a number");
  throws(() => slugify({}), TypeError, "throws TypeError when given an object");
  throws(() => slugify([]), TypeError, "throws TypeError when given an array");
  throws(
    () => slugify(() => {}),
    TypeError,
    "throws TypeError when given a function"
  );
  end();
});

test("standard-slugify with options argument of wrong type", ({
  equal,
  throws,
  end
}) => {
  equal(slugify("", true), "", "returns an empty string when given true");
  equal(slugify("", false), "", "returns an empty string when given false");
  equal(slugify("", 0), "", "returns an empty string when given a number");
  equal(slugify("", ""), "", "returns an empty string when given a string");
  equal(
    slugify("", () => {}),
    "",
    "returns an empty string when given a function"
  );
  throws(
    () => slugify("", null),
    TypeError,
    "throws TypeError when given a null"
  );
  end();
});

// See https://tools.ietf.org/html/rfc3986#section-2.1
test("standard-slugify with RFC 3986 percent-encoding US-ASCII character", ({
  equal,
  end
}) => {
  equal(slugify("%"), "", "removes percent-encoding character `%`");
  end();
});

// See https://tools.ietf.org/html/rfc3986#section-2.2
test("standard-slugify with RFC 3986 reserved gen-delims US-ASCII characters", ({
  equal,
  plan
}) => {
  plan(7);
  equal(slugify(":"), "", "removes RFC 3986 gen-delim `:`");
  equal(slugify("/"), "", "removes RFC 3986 gen-delim `/`");
  equal(slugify("?"), "", "removes RFC 3986 gen-delim `?`");
  equal(slugify("#"), "", "removes RFC 3986 gen-delim `#`");
  equal(slugify("["), "", "removes RFC 3986 gen-delim `[`");
  equal(slugify("]"), "", "removes RFC 3986 gen-delim `]`");
  equal(slugify("@"), "", "removes RFC 3986 gen-delim `@`");
});

// See https://tools.ietf.org/html/rfc3986#section-2.2
test("standard-slugify with RFC 3986 reserved sub-delims US-ASCII characters", ({
  equal,
  plan
}) => {
  plan(11);
  equal(slugify("!"), "", "removes RFC 3986 sub-delim `!`");
  equal(slugify("$"), "", "removes RFC 3986 sub-delim `$`");
  equal(slugify("&"), "", "removes RFC 3986 sub-delim `&`");
  equal(slugify("'"), "", "removes RFC 3986 sub-delim `'`");
  equal(slugify("("), "", "removes RFC 3986 sub-delim `(`");
  equal(slugify(")"), "", "removes RFC 3986 sub-delim `)`");
  equal(slugify("*"), "", "removes RFC 3986 sub-delim `*`");
  equal(slugify("+"), "", "removes RFC 3986 sub-delim `+`");
  equal(slugify(","), "", "removes RFC 3986 sub-delim `,`");
  equal(slugify(";"), "", "removes RFC 3986 sub-delim `;`");
  equal(slugify("="), "", "removes RFC 3986 sub-delim `=`");
});

// See https://tools.ietf.org/html/rfc3986#section-2.3
test("standard-slugify with RFC 3986 unreserved US-ASCII uppercase letters", ({
  equal,
  plan
}) => {
  plan(26);
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
});

// See https://tools.ietf.org/html/rfc3986#section-2.3
test("standard-slugify with RFC 3986 unreserved US-ASCII lowercase letters", ({
  equal,
  plan
}) => {
  plan(26);
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
});

// See https://tools.ietf.org/html/rfc3986#section-2.3
test("standard-slugify with RFC 3986 unreserved US-ASCII decimal digits", ({
  equal,
  plan
}) => {
  plan(10);
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
});

// See https://tools.ietf.org/html/rfc3986#section-2.3
test("standard-slugify with RFC 3986 unreserved US-ASCII non-alphanumeric characters", ({
  equal,
  plan
}) => {
  plan(4);
  equal(slugify("-"), "-", "keeps `-`");
  equal(slugify("_"), "_", "keeps `_`");
  equal(slugify("."), "", "removes `.`");
  equal(slugify("~"), "", "removes `~`");
});

// See https://tools.ietf.org/html/rfc3986#section-2
test("standard-slugify with RFC 3986 forbidden US-ASCII", ({ equal, plan }) => {
  plan(43);
  equal(slugify("\u0000"), "", "removes RFC 3986 forbidden character `\u0000`");
  equal(slugify("\u0001"), "", "removes RFC 3986 forbidden character `\u0001`");
  equal(slugify("\u0002"), "", "removes RFC 3986 forbidden character `\u0002`");
  equal(slugify("\u0003"), "", "removes RFC 3986 forbidden character `\u0003`");
  equal(slugify("\u0004"), "", "removes RFC 3986 forbidden character `\u0004`");
  equal(slugify("\u0005"), "", "removes RFC 3986 forbidden character `\u0005`");
  equal(slugify("\u0006"), "", "removes RFC 3986 forbidden character `\u0006`");
  equal(slugify("\u0007"), "", "removes RFC 3986 forbidden character `\u0007`");
  equal(slugify("\u0008"), "", "removes RFC 3986 forbidden character `\u0008`");
  equal(slugify("a\u0009b"), "a-b", "converts CHARACTER TABULATION to `-`");
  equal(slugify("a\u000Ab"), "a-b", "converts LINE FEED to `-`");
  equal(slugify("a\u000Bb"), "a-b", "converts LINE TABULATION to `-`");
  equal(slugify("a\u000Cb"), "a-b", "converts FORM FEED to `-`");
  equal(slugify("a\u000Db"), "a-b", "converts CARRIAGE RETURN to `-`");
  equal(slugify("\u000E"), "", "removes RFC 3986 forbidden character `\u000E`");
  equal(slugify("\u000F"), "", "removes RFC 3986 forbidden character `\u000F`");
  equal(slugify("\u0010"), "", "removes RFC 3986 forbidden character `\u0010`");
  equal(slugify("\u0011"), "", "removes RFC 3986 forbidden character `\u0011`");
  equal(slugify("\u0012"), "", "removes RFC 3986 forbidden character `\u0012`");
  equal(slugify("\u0013"), "", "removes RFC 3986 forbidden character `\u0013`");
  equal(slugify("\u0014"), "", "removes RFC 3986 forbidden character `\u0014`");
  equal(slugify("\u0015"), "", "removes RFC 3986 forbidden character `\u0015`");
  equal(slugify("\u0016"), "", "removes RFC 3986 forbidden character `\u0016`");
  equal(slugify("\u0017"), "", "removes RFC 3986 forbidden character `\u0017`");
  equal(slugify("\u0018"), "", "removes RFC 3986 forbidden character `\u0018`");
  equal(slugify("\u0019"), "", "removes RFC 3986 forbidden character `\u0019`");
  equal(slugify("\u001A"), "", "removes RFC 3986 forbidden character `\u001A`");
  equal(slugify("\u001B"), "", "removes RFC 3986 forbidden character `\u001B`");
  equal(slugify("\u001C"), "-", "converts FS to `-`");
  equal(slugify("\u001D"), "-", "converts GS to `-`");
  equal(slugify("\u001E"), "-", "converts RS to `-`");
  equal(slugify("\u001F"), "-", "converts US to `-`");
  equal(slugify("a\u0020b"), "a-b", "converts SPACE to `-`");
  equal(slugify('"'), "", 'removes RFC 3986 forbidden character `"`');
  equal(slugify("<"), "", "removes RFC 3986 forbidden character `<`");
  equal(slugify(">"), "", "removes RFC 3986 forbidden character `>`");
  equal(slugify("\\"), "", "removes RFC 3986 forbidden character `\\`");
  equal(slugify("^"), "", "removes RFC 3986 forbidden character `^`");
  equal(slugify("`"), "", "removes RFC 3986 forbidden character ```");
  equal(slugify("{"), "", "removes RFC 3986 forbidden character `{`");
  equal(slugify("|"), "", "removes RFC 3986 forbidden character `|`");
  equal(slugify("}"), "", "removes RFC 3986 forbidden character `}`");
  equal(slugify("\u007F"), "", "removes RFC 3986 forbidden character `\u007F`");
});

test("standard-slugify with C1 Controls", ({ equal, plan }) => {
  plan(32);
  equal(slugify("\u0080"), "", "removes C1 Control `\u0080`");
  equal(slugify("\u0081"), "", "removes C1 Control `\u0081`");
  equal(slugify("\u0082"), "", "removes C1 Control `\u0082`");
  equal(slugify("\u0083"), "", "removes C1 Control `\u0083`");
  equal(slugify("\u0084"), "", "removes C1 Control `\u0084`");
  equal(slugify("\u0085"), "-", "converts NEXT LINE (NEL) to `-`");
  equal(slugify("\u0086"), "", "removes C1 Control `\u0086`");
  equal(slugify("\u0087"), "", "removes C1 Control `\u0087`");
  equal(slugify("\u0088"), "", "removes C1 Control `\u0088`");
  equal(slugify("\u0089"), "", "removes C1 Control `\u0089`");
  equal(slugify("\u008A"), "", "removes C1 Control `\u008A`");
  equal(slugify("\u008B"), "", "removes C1 Control `\u008B`");
  equal(slugify("\u008C"), "", "removes C1 Control `\u008C`");
  equal(slugify("\u008D"), "", "removes C1 Control `\u008D`");
  equal(slugify("\u008E"), "", "removes C1 Control `\u008E`");
  equal(slugify("\u008F"), "", "removes C1 Control `\u008F`");
  equal(slugify("\u0090"), "", "removes C1 Control `\u0090`");
  equal(slugify("\u0091"), "", "removes C1 Control `\u0091`");
  equal(slugify("\u0092"), "", "removes C1 Control `\u0092`");
  equal(slugify("\u0093"), "", "removes C1 Control `\u0093`");
  equal(slugify("\u0094"), "", "removes C1 Control `\u0094`");
  equal(slugify("\u0095"), "", "removes C1 Control `\u0095`");
  equal(slugify("\u0096"), "", "removes C1 Control `\u0096`");
  equal(slugify("\u0097"), "", "removes C1 Control `\u0097`");
  equal(slugify("\u0098"), "", "removes C1 Control `\u0098`");
  equal(slugify("\u0099"), "", "removes C1 Control `\u0099`");
  equal(slugify("\u009A"), "", "removes C1 Control `\u009A`");
  equal(slugify("\u009B"), "", "removes C1 Control `\u009B`");
  equal(slugify("\u009C"), "", "removes C1 Control `\u009C`");
  equal(slugify("\u009D"), "", "removes C1 Control `\u009D`");
  equal(slugify("\u009E"), "", "removes C1 Control `\u009E`");
  equal(slugify("\u009F"), "", "removes C1 Control `\u009F`");
});

test("standard-slugify with Latin-1 Supplement lowercase letters", ({
  equal,
  plan
}) => {
  plan(30);
  equal(slugify("À"), "a", "transliterates `À` as `a`");
  equal(slugify("Á"), "a", "transliterates `Á` as `a`");
  equal(slugify("Â"), "a", "transliterates `Â` as `a`");
  equal(slugify("Ã"), "a", "transliterates `Ã` as `a`");
  equal(slugify("Ä"), "a", "transliterates `Ä` as `a`");
  equal(slugify("Å"), "a", "transliterates `Å` as `a`");
  equal(slugify("Æ"), "ae", "transliterates `Æ` as `ae`");
  equal(slugify("Ç"), "c", "transliterates `Ç` as `c`");
  equal(slugify("È"), "e", "transliterates `È` as `e`");
  equal(slugify("É"), "e", "transliterates `É` as `e`");
  equal(slugify("Ê"), "e", "transliterates `Ê` as `e`");
  equal(slugify("Ë"), "e", "transliterates `Ë` as `e`");
  equal(slugify("Ì"), "i", "transliterates `Ì` as `i`");
  equal(slugify("Í"), "i", "transliterates `Í` as `i`");
  equal(slugify("Î"), "i", "transliterates `Î` as `i`");
  equal(slugify("Ï"), "i", "transliterates `Ï` as `i`");
  equal(slugify("Ð"), "d", "transliterates `Ð` as `d`");
  equal(slugify("Ñ"), "n", "transliterates `Ñ` as `n`");
  equal(slugify("Ò"), "o", "transliterates `Ò` as `o`");
  equal(slugify("Ó"), "o", "transliterates `Ó` as `o`");
  equal(slugify("Ô"), "o", "transliterates `Ô` as `o`");
  equal(slugify("Õ"), "o", "transliterates `Õ` as `o`");
  equal(slugify("Ö"), "o", "transliterates `Ö` as `o`");
  equal(slugify("Ø"), "oe", "transliterates `Ø` as `oe`");
  equal(slugify("Ù"), "u", "transliterates `Ù` as `u`");
  equal(slugify("Ú"), "u", "transliterates `Ú` as `u`");
  equal(slugify("Û"), "u", "transliterates `Û` as `u`");
  equal(slugify("Ü"), "u", "transliterates `Ü` as `u`");
  equal(slugify("Ý"), "y", "transliterates `Ý` as `y`");
  equal(slugify("Þ"), "th", "transliterates `Þ` as `th`");
});

test("standard-slugify with Latin-1 Supplement lowercase letters", ({
  equal,
  plan
}) => {
  plan(32);
  equal(slugify("ß"), "ss", "transliterates `ß` as `ss`");
  equal(slugify("à"), "a", "transliterates `à` as `a`");
  equal(slugify("á"), "a", "transliterates `á` as `a`");
  equal(slugify("â"), "a", "transliterates `â` as `a`");
  equal(slugify("ã"), "a", "transliterates `ã` as `a`");
  equal(slugify("ä"), "a", "transliterates `ä` as `a`");
  equal(slugify("å"), "a", "transliterates `å` as `a`");
  equal(slugify("æ"), "ae", "transliterates `æ` as `ae`");
  equal(slugify("ç"), "c", "transliterates `ç` as `c`");
  equal(slugify("è"), "e", "transliterates `è` as `e`");
  equal(slugify("é"), "e", "transliterates `é` as `e`");
  equal(slugify("ê"), "e", "transliterates `ê` as `e`");
  equal(slugify("ë"), "e", "transliterates `ë` as `e`");
  equal(slugify("ì"), "i", "transliterates `ì` as `i`");
  equal(slugify("í"), "i", "transliterates `í` as `i`");
  equal(slugify("î"), "i", "transliterates `î` as `i`");
  equal(slugify("ï"), "i", "transliterates `ï` as `i`");
  equal(slugify("ð"), "d", "transliterates `ð` as `d`");
  equal(slugify("ñ"), "n", "transliterates `ñ` as `n`");
  equal(slugify("ò"), "o", "transliterates `ò` as `o`");
  equal(slugify("ó"), "o", "transliterates `ó` as `o`");
  equal(slugify("ô"), "o", "transliterates `ô` as `o`");
  equal(slugify("õ"), "o", "transliterates `õ` as `o`");
  equal(slugify("ö"), "o", "transliterates `ö` as `o`");
  equal(slugify("ø"), "oe", "transliterates `ø` as `oe`");
  equal(slugify("ù"), "u", "transliterates `ù` as `u`");
  equal(slugify("ú"), "u", "transliterates `ú` as `u`");
  equal(slugify("û"), "u", "transliterates `û` as `u`");
  equal(slugify("ü"), "u", "transliterates `ü` as `u`");
  equal(slugify("ý"), "y", "transliterates `ý` as `y`");
  equal(slugify("þ"), "th", "transliterates `þ` as `th`");
  equal(slugify("ÿ"), "y", "transliterates `ÿ` as `y`");
});

test("standard-slugify with Latin Extended-A uppercase letters", ({
  equal,
  plan
}) => {
  plan(62);
  equal(slugify("Ā"), "a", "transliterates `Ā` as `a`");
  equal(slugify("Ă"), "a", "transliterates `Ă` as `a`");
  equal(slugify("Ą"), "a", "transliterates `Ą` as `a`");
  equal(slugify("Ć"), "c", "transliterates `Ć` as `c`");
  equal(slugify("Ĉ"), "c", "transliterates `Ĉ` as `c`");
  equal(slugify("Ċ"), "c", "transliterates `Ċ` as `c`");
  equal(slugify("Č"), "c", "transliterates `Č` as `c`");
  equal(slugify("Ď"), "d", "transliterates `Ď` as `d`");
  equal(slugify("Đ"), "d", "transliterates `Đ` as `d`");
  equal(slugify("Ē"), "e", "transliterates `Ē` as `e`");
  equal(slugify("Ĕ"), "e", "transliterates `Ĕ` as `e`");
  equal(slugify("Ė"), "e", "transliterates `Ė` as `e`");
  equal(slugify("Ę"), "e", "transliterates `Ę` as `e`");
  equal(slugify("Ě"), "e", "transliterates `Ě` as `e`");
  equal(slugify("Ĝ"), "g", "transliterates `Ĝ` as `g`");
  equal(slugify("Ğ"), "g", "transliterates `Ğ` as `g`");
  equal(slugify("Ġ"), "g", "transliterates `Ġ` as `g`");
  equal(slugify("Ģ"), "g", "transliterates `Ģ` as `g`");
  equal(slugify("Ĥ"), "h", "transliterates `Ĥ` as `h`");
  equal(slugify("Ħ"), "h", "transliterates `Ħ` as `h`");
  equal(slugify("Ĩ"), "i", "transliterates `Ĩ` as `i`");
  equal(slugify("Ī"), "i", "transliterates `Ī` as `i`");
  equal(slugify("Ĭ"), "i", "transliterates `Ĭ` as `i`");
  equal(slugify("Į"), "i", "transliterates `Į` as `i`");
  equal(slugify("I"), "i", "transliterates `I` as `i`");
  equal(slugify("Ĳ"), "ij", "transliterates `Ĳ` as `ij`");
  equal(slugify("Ĵ"), "j", "transliterates `Ĵ` as `j`");
  equal(slugify("Ķ"), "k", "transliterates `Ķ` as `k`");
  equal(slugify("Ĺ"), "l", "transliterates `Ĺ` as `l`");
  equal(slugify("Ļ"), "l", "transliterates `Ļ` as `l`");
  equal(slugify("Ľ"), "l", "transliterates `Ľ` as `l`");
  equal(slugify("Ŀ"), "l", "transliterates `Ŀ` as `l`");
  equal(slugify("Ł"), "l", "transliterates `Ł` as `l`");
  equal(slugify("Ń"), "n", "transliterates `Ń` as `n`");
  equal(slugify("Ņ"), "n", "transliterates `Ņ` as `n`");
  equal(slugify("Ň"), "n", "transliterates `Ň` as `n`");
  equal(slugify("Ŋ"), "n", "transliterates `Ŋ` as `n`");
  equal(slugify("Ō"), "o", "transliterates `Ō` as `o`");
  equal(slugify("Ŏ"), "o", "transliterates `Ŏ` as `o`");
  equal(slugify("Ő"), "o", "transliterates `Ő` as `o`");
  equal(slugify("Œ"), "oe", "transliterates `Œ` as `oe`");
  equal(slugify("Ŕ"), "r", "transliterates `Ŕ` as `r`");
  equal(slugify("Ŗ"), "r", "transliterates `Ŗ` as `r`");
  equal(slugify("Ř"), "r", "transliterates `Ř` as `r`");
  equal(slugify("Ś"), "s", "transliterates `Ś` as `s`");
  equal(slugify("Ŝ"), "s", "transliterates `Ŝ` as `s`");
  equal(slugify("Ş"), "s", "transliterates `Ş` as `s`");
  equal(slugify("Š"), "s", "transliterates `Š` as `s`");
  equal(slugify("Ţ"), "t", "transliterates `Ţ` as `t`");
  equal(slugify("Ť"), "t", "transliterates `Ť` as `t`");
  equal(slugify("Ŧ"), "t", "transliterates `Ŧ` as `t`");
  equal(slugify("Ũ"), "u", "transliterates `Ũ` as `u`");
  equal(slugify("Ū"), "u", "transliterates `Ū` as `u`");
  equal(slugify("Ŭ"), "u", "transliterates `Ŭ` as `u`");
  equal(slugify("Ů"), "u", "transliterates `Ů` as `u`");
  equal(slugify("Ű"), "u", "transliterates `Ű` as `u`");
  equal(slugify("Ų"), "u", "transliterates `Ų` as `u`");
  equal(slugify("Ŵ"), "w", "transliterates `Ŵ` as `w`");
  equal(slugify("Ŷ"), "y", "transliterates `Ŷ` as `y`");
  equal(slugify("Ź"), "z", "transliterates `Ź` as `z`");
  equal(slugify("Ż"), "z", "transliterates `Ż` as `z`");
  equal(slugify("Ž"), "z", "transliterates `Ž` as `z`");
});

test("standard-slugify with Latin Extended-A lowercase letters", ({
  equal,
  plan
}) => {
  plan(65);
  equal(slugify("ā"), "a", "transliterates `ā` as `a`");
  equal(slugify("ă"), "a", "transliterates `ă` as `a`");
  equal(slugify("ą"), "a", "transliterates `ą` as `a`");
  equal(slugify("ć"), "c", "transliterates `ć` as `c`");
  equal(slugify("ĉ"), "c", "transliterates `ĉ` as `c`");
  equal(slugify("ċ"), "c", "transliterates `ċ` as `c`");
  equal(slugify("č"), "c", "transliterates `č` as `c`");
  equal(slugify("ď"), "d", "transliterates `ď` as `d`");
  equal(slugify("đ"), "d", "transliterates `đ` as `d`");
  equal(slugify("ē"), "e", "transliterates `ē` as `e`");
  equal(slugify("ĕ"), "e", "transliterates `ĕ` as `e`");
  equal(slugify("ė"), "e", "transliterates `ė` as `e`");
  equal(slugify("ę"), "e", "transliterates `ę` as `e`");
  equal(slugify("ě"), "e", "transliterates `ě` as `e`");
  equal(slugify("ĝ"), "g", "transliterates `ĝ` as `g`");
  equal(slugify("ğ"), "g", "transliterates `ğ` as `g`");
  equal(slugify("ġ"), "g", "transliterates `ġ` as `g`");
  equal(slugify("ģ"), "g", "transliterates `ģ` as `g`");
  equal(slugify("ĥ"), "h", "transliterates `ĥ` as `h`");
  equal(slugify("ħ"), "h", "transliterates `ħ` as `h`");
  equal(slugify("ĩ"), "i", "transliterates `ĩ` as `i`");
  equal(slugify("ī"), "i", "transliterates `ī` as `i`");
  equal(slugify("ĭ"), "i", "transliterates `ĭ` as `i`");
  equal(slugify("į"), "i", "transliterates `į` as `i`");
  equal(slugify("ı"), "i", "transliterates `ı` as `i`");
  equal(slugify("ĳ"), "ij", "transliterates `ĳ` as `ij`");
  equal(slugify("ĵ"), "j", "transliterates `ĵ` as `j`");
  equal(slugify("ķ"), "k", "transliterates `ķ` as `k`");
  equal(slugify("ĸ"), "k", "transliterates `ĸ` as `k`");
  equal(slugify("ĺ"), "l", "transliterates `ĺ` as `l`");
  equal(slugify("ļ"), "l", "transliterates `ļ` as `l`");
  equal(slugify("ľ"), "l", "transliterates `ľ` as `l`");
  equal(slugify("ŀ"), "l", "transliterates `ŀ` as `l`");
  equal(slugify("ł"), "l", "transliterates `ł` as `l`");
  equal(slugify("ń"), "n", "transliterates `ń` as `n`");
  equal(slugify("ņ"), "n", "transliterates `ņ` as `n`");
  equal(slugify("ň"), "n", "transliterates `ň` as `n`");
  equal(slugify("ŉ"), "n", "transliterates `ŉ` as `n`");
  equal(slugify("ŋ"), "n", "transliterates `ŋ` as `n`");
  equal(slugify("ō"), "o", "transliterates `ō` as `o`");
  equal(slugify("ŏ"), "o", "transliterates `ŏ` as `o`");
  equal(slugify("ő"), "o", "transliterates `ő` as `o`");
  equal(slugify("œ"), "oe", "transliterates `œ` as `oe`");
  equal(slugify("ŕ"), "r", "transliterates `ŕ` as `r`");
  equal(slugify("ŗ"), "r", "transliterates `ŗ` as `r`");
  equal(slugify("ř"), "r", "transliterates `ř` as `r`");
  equal(slugify("ś"), "s", "transliterates `ś` as `s`");
  equal(slugify("ŝ"), "s", "transliterates `ŝ` as `s`");
  equal(slugify("ş"), "s", "transliterates `ş` as `s`");
  equal(slugify("š"), "s", "transliterates `š` as `s`");
  equal(slugify("ţ"), "t", "transliterates `ţ` as `t`");
  equal(slugify("ť"), "t", "transliterates `ť` as `t`");
  equal(slugify("ŧ"), "t", "transliterates `ŧ` as `t`");
  equal(slugify("ũ"), "u", "transliterates `ũ` as `u`");
  equal(slugify("ū"), "u", "transliterates `ū` as `u`");
  equal(slugify("ŭ"), "u", "transliterates `ŭ` as `u`");
  equal(slugify("ů"), "u", "transliterates `ů` as `u`");
  equal(slugify("ű"), "u", "transliterates `ű` as `u`");
  equal(slugify("ų"), "u", "transliterates `ų` as `u`");
  equal(slugify("ŵ"), "w", "transliterates `ŵ` as `w`");
  equal(slugify("ŷ"), "y", "transliterates `ŷ` as `y`");
  equal(slugify("ź"), "z", "transliterates `ź` as `z`");
  equal(slugify("ż"), "z", "transliterates `ż` as `z`");
  equal(slugify("ž"), "z", "transliterates `ž` as `z`");
  equal(slugify("ſ"), "s", "transliterates `ſ` as `s`");
});

test("standard-slugify with Latin Extended-B uppercase letters from WGL4", ({
  equal,
  end
}) => {
  equal(slugify("Ƒ"), "f", "transliterates `Ƒ` as `f`");
  equal(slugify("Ǻ"), "a", "transliterates `Ǻ` as `a`");
  equal(slugify("Ǽ"), "ae", "transliterates `Ǽ` as `ae`");
  equal(slugify("Ǿ"), "oe", "transliterates `Ǿ` as `oe`");
  end();
});

test("standard-slugify with Latin Extended-B lowercase letters from WGL4", ({
  equal,
  end
}) => {
  equal(slugify("ƒ"), "f", "transliterates `ƒ` as `f`");
  equal(slugify("ǻ"), "a", "transliterates `ǻ` as `a`");
  equal(slugify("ǽ"), "ae", "transliterates `ǽ` as `ae`");
  equal(slugify("ǿ"), "oe", "transliterates `ǿ` as `oe`");
  end();
});

test("standard-slugify with Latin Extended-B uppercase letters from ISO-8859-16", ({
  equal,
  end
}) => {
  equal(slugify("Ș"), "s", "transliterates `Ș` as `s`");
  equal(slugify("Ț"), "t", "transliterates `Ț` as `t`");
  end();
});

test("standard-slugify with Latin Extended-B uppercase letters from ISO-8859-16", ({
  equal,
  end
}) => {
  equal(slugify("ș"), "s", "transliterates `ș` as `s`");
  equal(slugify("ț"), "t", "transliterates `ț` as `t`");
  end();
});

test("standard-slugify with Greek and Coptic uppercase letters from ISO-8859-7", ({
  equal,
  end
}) => {
  equal(slugify("Ά"), "a", "transliterates `Ά` as `a`");
  equal(slugify("Έ"), "e", "transliterates `Έ` as `e`");
  equal(slugify("Ή"), "i", "transliterates `Ή` as `i`");
  equal(slugify("Ί"), "i", "transliterates `Ί` as `i`");
  equal(slugify("Α"), "a", "transliterates `Α` as `a`");
  equal(slugify("Β"), "v", "transliterates `Β` as `v`");
  equal(slugify("Γ"), "g", "transliterates `Γ` as `g`");
  equal(slugify("Δ"), "d", "transliterates `Δ` as `d`");
  equal(slugify("Ε"), "e", "transliterates `Ε` as `e`");
  equal(slugify("Ζ"), "z", "transliterates `Ζ` as `z`");
  equal(slugify("Η"), "i", "transliterates `Η` as `i`");
  equal(slugify("Θ"), "th", "transliterates `Θ` as `th`");
  equal(slugify("Ι"), "i", "transliterates `Ι` as `i`");
  equal(slugify("Κ"), "k", "transliterates `Κ` as `k`");
  equal(slugify("Λ"), "l", "transliterates `Λ` as `l`");
  equal(slugify("Μ"), "m", "transliterates `Μ` as `m`");
  equal(slugify("Ν"), "n", "transliterates `Ν` as `n`");
  equal(slugify("Ξ"), "x", "transliterates `Ξ` as `x`");
  equal(slugify("Ο"), "o", "transliterates `Ο` as `o`");
  equal(slugify("Π"), "p", "transliterates `Π` as `p`");
  equal(slugify("Ρ"), "r", "transliterates `Ρ` as `r`");
  equal(slugify("Σ"), "s", "transliterates `Σ` as `s`");
  equal(slugify("Σ"), "s", "transliterates `Σ` as `s`");
  equal(slugify("Τ"), "t", "transliterates `Τ` as `t`");
  equal(slugify("Υ"), "y", "transliterates `Υ` as `y`");
  equal(slugify("Φ"), "f", "transliterates `Φ` as `f`");
  equal(slugify("Χ"), "ch", "transliterates `Χ` as `ch`");
  equal(slugify("Ψ"), "ps", "transliterates `Ψ` as `ps`");
  equal(slugify("Ω"), "o", "transliterates `Ω` as `o`");
  equal(slugify("Ϊ"), "i", "transliterates `Ϊ` as `i`");
  equal(slugify("Ϋ"), "y", "transliterates `Ϋ` as `y`");
  equal(slugify("Ό"), "o", "transliterates `Ό` as `o`");
  equal(slugify("Ύ"), "y", "transliterates `Ύ` as `y`");
  equal(slugify("Ώ"), "o", "transliterates `Ώ` as `o`");
  end();
});

test("standard-slugify with Greek and Coptic lowercase letters from ISO-8859-7", ({
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

test("standard-slugify with Cyrillic uppercase letters from ISO-8859-5", ({
  equal,
  end
}) => {
  equal(slugify("А"), "a", "transliterates `А` as `a`");
  equal(slugify("Б"), "b", "transliterates `Б` as `b`");
  equal(slugify("В"), "v", "transliterates `В` as `v`");
  equal(slugify("Г"), "g", "transliterates `Г` as `g`");
  equal(slugify("Д"), "d", "transliterates `Д` as `d`");
  equal(slugify("Е"), "e", "transliterates `Е` as `e`");
  equal(slugify("Ж"), "zh", "transliterates `Ж` as `zh`");
  equal(slugify("З"), "z", "transliterates `З` as `z`");
  equal(slugify("И"), "i", "transliterates `И` as `i`");
  equal(slugify("Й"), "i", "transliterates `Й` as `i`");
  equal(slugify("К"), "k", "transliterates `К` as `k`");
  equal(slugify("Л"), "l", "transliterates `Л` as `l`");
  equal(slugify("М"), "m", "transliterates `М` as `m`");
  equal(slugify("Н"), "n", "transliterates `Н` as `n`");
  equal(slugify("О"), "o", "transliterates `О` as `o`");
  equal(slugify("П"), "p", "transliterates `П` as `p`");
  equal(slugify("Р"), "r", "transliterates `Р` as `r`");
  equal(slugify("С"), "s", "transliterates `С` as `s`");
  equal(slugify("Т"), "t", "transliterates `Т` as `t`");
  equal(slugify("У"), "u", "transliterates `У` as `u`");
  equal(slugify("Ф"), "f", "transliterates `Ф` as `f`");
  equal(slugify("Х"), "kh", "transliterates `Х` as `kh`");
  equal(slugify("Ц"), "ts", "transliterates `Ц` as `ts`");
  equal(slugify("Ч"), "ch", "transliterates `Ч` as `ch`");
  equal(slugify("Ш"), "sh", "transliterates `Ш` as `sh`");
  equal(slugify("Щ"), "shch", "transliterates `Щ` as `shch`");
  equal(slugify("Ъ"), "ie", "transliterates `Ъ` as `ie`");
  equal(slugify("Ы"), "y", "transliterates `Ы` as `y`");
  equal(slugify("Ь"), "", "transliterates `Ь` as ``");
  equal(slugify("Э"), "e", "transliterates `Э` as `e`");
  equal(slugify("Ю"), "iu", "transliterates `Ю` as `iu`");
  equal(slugify("Я"), "ia", "transliterates `Я` as `ia`");
  equal(slugify("Ѐ"), "e", "transliterates `Ѐ` as `e`");
  equal(slugify("Ё"), "e", "transliterates `Ё` as `e`");
  equal(slugify("Ђ"), "d", "transliterates `Ђ` as `d`");
  equal(slugify("Ѓ"), "g", "transliterates `Ѓ` as `g`");
  equal(slugify("Є"), "ie", "transliterates `Є` as `ie`");
  equal(slugify("Ѕ"), "dz", "transliterates `Ѕ` as `dz`");
  equal(slugify("І"), "i", "transliterates `І` as `i`");
  equal(slugify("Ї"), "i", "transliterates `Ї` as `i`");
  equal(slugify("Ј"), "j", "transliterates `Ј` as `j`");
  equal(slugify("Љ"), "lj", "transliterates `Љ` as `lj`");
  equal(slugify("Њ"), "nj", "transliterates `Њ` as `nj`");
  equal(slugify("Ћ"), "c", "transliterates `Ћ` as `c`");
  equal(slugify("Ќ"), "k", "transliterates `Ќ` as `k`");
  equal(slugify("Ѝ"), "i", "transliterates `Ѝ` as `i`");
  equal(slugify("Ў"), "u", "transliterates `Ў` as `u`");
  equal(slugify("Џ"), "dz", "transliterates `Џ` as `dz`");
  end();
});

test("standard-slugify with Cyrillic lowercase letters from ISO-8859-5", ({
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

test("standard-slugify with Cyrillic uppercase letters from WGL4", ({
  equal,
  end
}) => {
  equal(slugify("Ґ"), "g", "transliterates `Ґ` as `g`");
  end();
});

test("standard-slugify with Cyrillic lowercase letters from WGL4", ({
  equal,
  end
}) => {
  equal(slugify("ґ"), "g", "transliterates `ґ` as `g`");
  end();
});

test("standard-slugify with Latin Extended Additional uppercase letters from ISO-8859-14", ({
  equal,
  end
}) => {
  equal(slugify("Ḃ"), "b", "transliterates `Ḃ` as `b`");
  equal(slugify("Ḋ"), "d", "transliterates `Ḋ` as `d`");
  equal(slugify("Ḟ"), "f", "transliterates `Ḟ` as `f`");
  equal(slugify("Ṁ"), "m", "transliterates `Ṁ` as `m`");
  equal(slugify("Ṗ"), "p", "transliterates `Ṗ` as `p`");
  equal(slugify("Ṡ"), "s", "transliterates `Ṡ` as `s`");
  equal(slugify("Ṫ"), "t", "transliterates `Ṫ` as `t`");
  equal(slugify("Ẁ"), "w", "transliterates `Ẁ` as `w`");
  equal(slugify("Ẃ"), "w", "transliterates `Ẃ` as `w`");
  equal(slugify("Ẅ"), "w", "transliterates `Ẅ` as `w`");
  equal(slugify("Ỳ"), "y", "transliterates `Ỳ` as `y`");
  end();
});

test("standard-slugify with Latin Extended Additional lowercase letters from ISO-8859-14", ({
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

test("standard-slugify with Alphabetic Presentation Forms letters from WGL4", ({
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
  equal(slugify("\u001C"), "-", "converts INFORMATION SEPARATOR FOUR to `-`");
  equal(slugify("\u001D"), "-", "converts INFORMATION SEPARATOR THREE to `-`");
  equal(slugify("\u001E"), "-", "converts INFORMATION SEPARATOR TWO to `-`");
  equal(slugify("\u001F"), "-", "converts INFORMATION SEPARATOR ONE to `-`");
  equal(slugify("\u0085"), "-", "converts NEXT LINE to `-`");
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
  equal(slugify("\u0020a"), "a", "removes leading SPACE");
  equal(slugify("a\u0020"), "a", "removes trailing SPACE");
  equal(slugify("\u0020\u0020a⁠"), "a", "removes many leading SPACE");
  equal(slugify("a\u0020\u0020"), "a", "removes many trailing SPACE");
  equal(slugify("\na"), "a", "removes leading LINE FEED");
  equal(slugify("a\n"), "a", "removes trailing LINE FEED");
  equal(slugify("\n\na"), "a", "removes many leading LINE FEEDs");
  equal(slugify("a\n\n"), "a", "removes many trailing LINE FEEDs");
  equal(slugify("\ta"), "a", "removes leading HORIZONTAL TABULATION");
  equal(slugify("a\t"), "a", "removes trailing HORIZONTAL TABULATION");
  equal(slugify("\t\ta"), "a", "removes many leading HORIZONTAL TABULATION");
  equal(slugify("a\t\t"), "a", "removes many trailing HORIZONTAL TABULATION");
  end();
});

// See # Pd in https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt
test("standard-slugify with dash punctuation marks", ({ equal, end }) => {
  equal(slugify("-"), "-", "keeps `-` as is");
  equal(slugify("\u058A"), "-", "converts ARMENIAN HYPHEN to `-`");
  equal(slugify("\u05BE"), "-", "converts HEBREW PUNCTUATION MAQAF to `-`");
  equal(slugify("\u1400"), "-", "converts CANADIAN SYLLABICS HYPHEN to `-`");
  equal(slugify("\u1806"), "-", "converts MONGOLIAN TODO SOFT HYPHEN to `-`");
  equal(slugify("\u2010"), "-", "converts HYPHEN to `-`");
  equal(slugify("\u2011"), "-", "converts NON-BREAKING HYPHEN to `-`");
  equal(slugify("\u2012"), "-", "converts FIGURE DASH to `-`");
  equal(slugify("\u2013"), "-", "converts EN DASH to `-`");
  equal(slugify("\u2014"), "-", "converts EM DASH to `-`");
  equal(slugify("\u2015"), "-", "converts HORIZONTAL BAR to `-`");
  equal(slugify("\u2E17"), "-", "converts DOUBLE OBLIQUE HYPHEN to `-`");
  equal(slugify("\u2E1A"), "-", "converts HYPHEN WITH DIAERESIS to `-`");
  equal(slugify("\u2E3A"), "-", "converts TWO-EM DASH to `-`");
  equal(slugify("\u2E3B"), "-", "converts THREE-EM DASH to `-`");
  equal(slugify("\u2E40"), "-", "converts DOUBLE HYPHEN to `-`");
  equal(slugify("\u301C"), "-", "converts WAVE DASH to `-`");
  equal(slugify("\u3030"), "-", "converts WAVY DASH to `-`");
  equal(
    slugify("\u30A0"),
    "-",
    "converts KATAKANA-HIRAGANA DOUBLE HYPHEN to `-`"
  );
  equal(
    slugify("\uFE31"),
    "-",
    "converts PRESENTATION FORM FOR VERTICAL EM DASH to `-`"
  );
  equal(
    slugify("\uFE32"),
    "-",
    "converts PRESENTATION FORM FOR VERTICAL EN DASH to `-`"
  );
  equal(slugify("\uFE58"), "-", "converts SMALL EM DASH to `-`");
  equal(slugify("\uFE63"), "-", "converts SMALL HYPHEN-MINUS to `-`");
  equal(slugify("\uFF0D"), "-", "converts FULLWIDTH HYPHEN-MINUS to `-`");
  end();
});

test("standard-slugify with keepCase and single-character replacements", ({
  equal,
  end
}) => {
  equal(slugify("a", { keepCase: true }), "a", "keeps case");
  equal(slugify("A", { keepCase: true }), "A", "keeps case");
  equal(slugify("A_", { keepCase: true }), "A_", "keeps case");
  equal(slugify("AA", { keepCase: true }), "AA", "keeps case");
  equal(slugify("Aa", { keepCase: true }), "Aa", "keeps case");
  equal(slugify("aa", { keepCase: true }), "aa", "keeps case");
  equal(slugify("aA", { keepCase: true }), "aA", "keeps case");
  equal(slugify("AaA", { keepCase: true }), "AaA", "keeps case");
  equal(slugify("aAa", { keepCase: true }), "aAa", "keeps case");
  end();
});

test("standard-slugify with keepCase and multi-character replacements", ({
  equal,
  end
}) => {
  equal(slugify("Æ", { keepCase: true }), "AE", "keeps case");
  equal(slugify("Æ_", { keepCase: true }), "AE_", "keeps case");
  equal(slugify("ÆA", { keepCase: true }), "AEA", "keeps case");
  equal(slugify("Æa", { keepCase: true }), "Aea", "keeps case");
  equal(slugify("Ĳ", { keepCase: true }), "IJ", "keeps case");
  equal(slugify("Ĳ_", { keepCase: true }), "IJ_", "keeps case");
  equal(slugify("ĲA", { keepCase: true }), "IJA", "keeps case");
  equal(slugify("Ĳa", { keepCase: true }), "Ija", "keeps case");
  equal(slugify("Ǽ", { keepCase: true }), "AE", "keeps case");
  equal(slugify("Ǽ_", { keepCase: true }), "AE_", "keeps case");
  equal(slugify("ǼA", { keepCase: true }), "AEA", "keeps case");
  equal(slugify("Ǽa", { keepCase: true }), "Aea", "keeps case");
  equal(slugify("Θ", { keepCase: true }), "TH", "keeps case");
  equal(slugify("Θ_", { keepCase: true }), "TH_", "keeps case");
  equal(slugify("ΘA", { keepCase: true }), "THA", "keeps case");
  equal(slugify("Θa", { keepCase: true }), "Tha", "keeps case");
  equal(slugify("Ж", { keepCase: true }), "ZH", "keeps case");
  equal(slugify("Ж_", { keepCase: true }), "ZH_", "keeps case");
  equal(slugify("ЖA", { keepCase: true }), "ZHA", "keeps case");
  equal(slugify("Жa", { keepCase: true }), "Zha", "keeps case");
  end();
});

test("standard-slugify with replacements", ({ equal, end }) => {
  equal(
    slugify("₿ raising, € falling", {
      replacements: {
        "€": "eur", // EURO SIGN
        "₿": "xbt" // BITCOIN SIGN
      }
    }),
    "xbt-raising-eur-falling",
    "uses the given custom replacements"
  );
  end();
});

test("standard-slugify with keepCase and replacements", ({ equal, end }) => {
  equal(
    slugify("ȜET", {
      keepCase: true,
      replacements: {
        Ȝ: "Y" // LATIN SMALL LETTER YOGH
      }
    }),
    "YET",
    "keeps case of custom replacements and original string"
  );
  equal(
    slugify("ȜET", {
      keepCase: false,
      replacements: {
        Ȝ: "Y" // LATIN SMALL LETTER YOGH
      }
    }),
    "yet",
    "lowercases custom replacements and original string"
  );
  end();
});
