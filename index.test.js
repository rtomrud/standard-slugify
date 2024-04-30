import test from "node:test";
import assert from "node:assert/strict";
import slugify from "./index.js";

test("standard-slugify with no arguments", () => {
  assert.equal(slugify(), "");
});

test("standard-slugify with C0 Controls", () => {
  assert.equal(slugify("\u0000"), "");
  assert.equal(slugify("\u0001"), "");
  assert.equal(slugify("\u0002"), "");
  assert.equal(slugify("\u0003"), "");
  assert.equal(slugify("\u0004"), "");
  assert.equal(slugify("\u0005"), "");
  assert.equal(slugify("\u0006"), "");
  assert.equal(slugify("\u0007"), "");
  assert.equal(slugify("\u0008"), "");
  assert.equal(slugify("a\u0009b"), "a-b");
  assert.equal(slugify("a\u000Ab"), "a-b");
  assert.equal(slugify("a\u000Bb"), "a-b");
  assert.equal(slugify("a\u000Cb"), "a-b");
  assert.equal(slugify("a\u000Db"), "a-b");
  assert.equal(slugify("\u000E"), "");
  assert.equal(slugify("\u000F"), "");
  assert.equal(slugify("\u0010"), "");
  assert.equal(slugify("\u0011"), "");
  assert.equal(slugify("\u0012"), "");
  assert.equal(slugify("\u0013"), "");
  assert.equal(slugify("\u0014"), "");
  assert.equal(slugify("\u0015"), "");
  assert.equal(slugify("\u0016"), "");
  assert.equal(slugify("\u0017"), "");
  assert.equal(slugify("\u0018"), "");
  assert.equal(slugify("\u0019"), "");
  assert.equal(slugify("\u001A"), "");
  assert.equal(slugify("\u001B"), "");
  assert.equal(slugify("a\u001Cb"), "a-b");
  assert.equal(slugify("a\u001Db"), "a-b");
  assert.equal(slugify("a\u001Eb"), "a-b");
  assert.equal(slugify("a\u001Fb"), "a-b");
});

test("standard-slugify with ASCII punctuation and symbols", () => {
  assert.equal(slugify("a\u0020b"), "a-b");
  assert.equal(slugify("!"), "");
  assert.equal(slugify('"'), "");
  assert.equal(slugify("#"), "");
  assert.equal(slugify("$"), "");
  assert.equal(slugify("%"), "");
  assert.equal(slugify("&"), "");
  assert.equal(slugify("'"), "");
  assert.equal(slugify("("), "");
  assert.equal(slugify(")"), "");
  assert.equal(slugify("*"), "");
  assert.equal(slugify("+"), "");
  assert.equal(slugify(","), "");
  assert.equal(slugify("a-b"), "a-b");
  assert.equal(slugify("."), "");
  assert.equal(slugify("/"), "");
  assert.equal(slugify(":"), "");
  assert.equal(slugify(";"), "");
  assert.equal(slugify("<"), "");
  assert.equal(slugify("="), "");
  assert.equal(slugify(">"), "");
  assert.equal(slugify("?"), "");
  assert.equal(slugify("@"), "");
  assert.equal(slugify("["), "");
  assert.equal(slugify("\\"), "");
  assert.equal(slugify("]"), "");
  assert.equal(slugify("^"), "");
  assert.equal(slugify("_"), "_");
  assert.equal(slugify("`"), "");
  assert.equal(slugify("{"), "");
  assert.equal(slugify("|"), "");
  assert.equal(slugify("}"), "");
  assert.equal(slugify("~"), "");
});

test("standard-slugify with ASCII digits", () => {
  assert.equal(slugify("0"), "0");
  assert.equal(slugify("1"), "1");
  assert.equal(slugify("2"), "2");
  assert.equal(slugify("3"), "3");
  assert.equal(slugify("4"), "4");
  assert.equal(slugify("5"), "5");
  assert.equal(slugify("6"), "6");
  assert.equal(slugify("7"), "7");
  assert.equal(slugify("8"), "8");
  assert.equal(slugify("9"), "9");
});

test("standard-slugify with Uppercase Latin alphabet", () => {
  assert.equal(slugify("A"), "a");
  assert.equal(slugify("B"), "b");
  assert.equal(slugify("C"), "c");
  assert.equal(slugify("D"), "d");
  assert.equal(slugify("E"), "e");
  assert.equal(slugify("F"), "f");
  assert.equal(slugify("G"), "g");
  assert.equal(slugify("H"), "h");
  assert.equal(slugify("I"), "i");
  assert.equal(slugify("J"), "j");
  assert.equal(slugify("K"), "k");
  assert.equal(slugify("L"), "l");
  assert.equal(slugify("M"), "m");
  assert.equal(slugify("N"), "n");
  assert.equal(slugify("O"), "o");
  assert.equal(slugify("P"), "p");
  assert.equal(slugify("Q"), "q");
  assert.equal(slugify("R"), "r");
  assert.equal(slugify("S"), "s");
  assert.equal(slugify("T"), "t");
  assert.equal(slugify("U"), "u");
  assert.equal(slugify("V"), "v");
  assert.equal(slugify("W"), "w");
  assert.equal(slugify("X"), "x");
  assert.equal(slugify("Y"), "y");
  assert.equal(slugify("Z"), "z");
});

test("standard-slugify with Lowercase Latin alphabet", () => {
  assert.equal(slugify("a"), "a");
  assert.equal(slugify("b"), "b");
  assert.equal(slugify("c"), "c");
  assert.equal(slugify("d"), "d");
  assert.equal(slugify("e"), "e");
  assert.equal(slugify("f"), "f");
  assert.equal(slugify("g"), "g");
  assert.equal(slugify("h"), "h");
  assert.equal(slugify("i"), "i");
  assert.equal(slugify("j"), "j");
  assert.equal(slugify("k"), "k");
  assert.equal(slugify("l"), "l");
  assert.equal(slugify("m"), "m");
  assert.equal(slugify("n"), "n");
  assert.equal(slugify("o"), "o");
  assert.equal(slugify("p"), "p");
  assert.equal(slugify("q"), "q");
  assert.equal(slugify("r"), "r");
  assert.equal(slugify("s"), "s");
  assert.equal(slugify("t"), "t");
  assert.equal(slugify("u"), "u");
  assert.equal(slugify("v"), "v");
  assert.equal(slugify("w"), "w");
  assert.equal(slugify("x"), "x");
  assert.equal(slugify("y"), "y");
  assert.equal(slugify("z"), "z");
});

test("standard-slugify with Control character", () => {
  assert.equal(slugify("\u007F"), "");
});

test("standard-slugify with C1 Controls", () => {
  assert.equal(slugify("\u0080"), "");
  assert.equal(slugify("\u0081"), "");
  assert.equal(slugify("\u0082"), "");
  assert.equal(slugify("\u0083"), "");
  assert.equal(slugify("\u0084"), "");
  assert.equal(slugify("a\u0085b"), "a-b");
  assert.equal(slugify("\u0086"), "");
  assert.equal(slugify("\u0087"), "");
  assert.equal(slugify("\u0088"), "");
  assert.equal(slugify("\u0089"), "");
  assert.equal(slugify("\u008A"), "");
  assert.equal(slugify("\u008B"), "");
  assert.equal(slugify("\u008C"), "");
  assert.equal(slugify("\u008D"), "");
  assert.equal(slugify("\u008E"), "");
  assert.equal(slugify("\u008F"), "");
  assert.equal(slugify("\u0090"), "");
  assert.equal(slugify("\u0091"), "");
  assert.equal(slugify("\u0092"), "");
  assert.equal(slugify("\u0093"), "");
  assert.equal(slugify("\u0094"), "");
  assert.equal(slugify("\u0095"), "");
  assert.equal(slugify("\u0096"), "");
  assert.equal(slugify("\u0097"), "");
  assert.equal(slugify("\u0098"), "");
  assert.equal(slugify("\u0099"), "");
  assert.equal(slugify("\u009A"), "");
  assert.equal(slugify("\u009B"), "");
  assert.equal(slugify("\u009C"), "");
  assert.equal(slugify("\u009D"), "");
  assert.equal(slugify("\u009E"), "");
  assert.equal(slugify("\u009F"), "");
});

test("standard-slugify with Latin-1 Supplement Letters (Uppercase)", () => {
  assert.equal(slugify("À"), "a");
  assert.equal(slugify("Á"), "a");
  assert.equal(slugify("Â"), "a");
  assert.equal(slugify("Ã"), "a");
  assert.equal(slugify("Ä"), "a");
  assert.equal(slugify("Å"), "a");
  assert.equal(slugify("Æ"), "ae");
  assert.equal(slugify("Ç"), "c");
  assert.equal(slugify("È"), "e");
  assert.equal(slugify("É"), "e");
  assert.equal(slugify("Ê"), "e");
  assert.equal(slugify("Ë"), "e");
  assert.equal(slugify("Ì"), "i");
  assert.equal(slugify("Í"), "i");
  assert.equal(slugify("Î"), "i");
  assert.equal(slugify("Ï"), "i");
  assert.equal(slugify("Ð"), "d");
  assert.equal(slugify("Ñ"), "n");
  assert.equal(slugify("Ò"), "o");
  assert.equal(slugify("Ó"), "o");
  assert.equal(slugify("Ô"), "o");
  assert.equal(slugify("Õ"), "o");
  assert.equal(slugify("Ö"), "o");
  assert.equal(slugify("Ø"), "oe");
  assert.equal(slugify("Ù"), "u");
  assert.equal(slugify("Ú"), "u");
  assert.equal(slugify("Û"), "u");
  assert.equal(slugify("Ü"), "u");
  assert.equal(slugify("Ý"), "y");
  assert.equal(slugify("Þ"), "th");
});

test("standard-slugify with Latin-1 Supplement Letters (Lowercase)", () => {
  assert.equal(slugify("ß"), "ss");
  assert.equal(slugify("à"), "a");
  assert.equal(slugify("á"), "a");
  assert.equal(slugify("â"), "a");
  assert.equal(slugify("ã"), "a");
  assert.equal(slugify("ä"), "a");
  assert.equal(slugify("å"), "a");
  assert.equal(slugify("æ"), "ae");
  assert.equal(slugify("ç"), "c");
  assert.equal(slugify("è"), "e");
  assert.equal(slugify("é"), "e");
  assert.equal(slugify("ê"), "e");
  assert.equal(slugify("ë"), "e");
  assert.equal(slugify("ì"), "i");
  assert.equal(slugify("í"), "i");
  assert.equal(slugify("î"), "i");
  assert.equal(slugify("ï"), "i");
  assert.equal(slugify("ð"), "d");
  assert.equal(slugify("ñ"), "n");
  assert.equal(slugify("ò"), "o");
  assert.equal(slugify("ó"), "o");
  assert.equal(slugify("ô"), "o");
  assert.equal(slugify("õ"), "o");
  assert.equal(slugify("ö"), "o");
  assert.equal(slugify("ø"), "oe");
  assert.equal(slugify("ù"), "u");
  assert.equal(slugify("ú"), "u");
  assert.equal(slugify("û"), "u");
  assert.equal(slugify("ü"), "u");
  assert.equal(slugify("ý"), "y");
  assert.equal(slugify("þ"), "th");
  assert.equal(slugify("ÿ"), "y");
});

test("standard-slugify with Latin Extended-A (Uppercase)", () => {
  assert.equal(slugify("Ā"), "a");
  assert.equal(slugify("Ă"), "a");
  assert.equal(slugify("Ą"), "a");
  assert.equal(slugify("Ć"), "c");
  assert.equal(slugify("Ĉ"), "c");
  assert.equal(slugify("Ċ"), "c");
  assert.equal(slugify("Č"), "c");
  assert.equal(slugify("Ď"), "d");
  assert.equal(slugify("Đ"), "d");
  assert.equal(slugify("Ē"), "e");
  assert.equal(slugify("Ĕ"), "e");
  assert.equal(slugify("Ė"), "e");
  assert.equal(slugify("Ę"), "e");
  assert.equal(slugify("Ě"), "e");
  assert.equal(slugify("Ĝ"), "g");
  assert.equal(slugify("Ğ"), "g");
  assert.equal(slugify("Ġ"), "g");
  assert.equal(slugify("Ģ"), "g");
  assert.equal(slugify("Ĥ"), "h");
  assert.equal(slugify("Ħ"), "h");
  assert.equal(slugify("Ĩ"), "i");
  assert.equal(slugify("Ī"), "i");
  assert.equal(slugify("Ĭ"), "i");
  assert.equal(slugify("Į"), "i");
  assert.equal(slugify("I"), "i");
  assert.equal(slugify("Ĳ"), "ij");
  assert.equal(slugify("Ĵ"), "j");
  assert.equal(slugify("Ķ"), "k");
  assert.equal(slugify("Ĺ"), "l");
  assert.equal(slugify("Ļ"), "l");
  assert.equal(slugify("Ľ"), "l");
  assert.equal(slugify("Ŀ"), "l");
  assert.equal(slugify("Ł"), "l");
  assert.equal(slugify("Ń"), "n");
  assert.equal(slugify("Ņ"), "n");
  assert.equal(slugify("Ň"), "n");
  assert.equal(slugify("Ŋ"), "n");
  assert.equal(slugify("Ō"), "o");
  assert.equal(slugify("Ŏ"), "o");
  assert.equal(slugify("Ő"), "o");
  assert.equal(slugify("Œ"), "oe");
  assert.equal(slugify("Ŕ"), "r");
  assert.equal(slugify("Ŗ"), "r");
  assert.equal(slugify("Ř"), "r");
  assert.equal(slugify("Ś"), "s");
  assert.equal(slugify("Ŝ"), "s");
  assert.equal(slugify("Ş"), "s");
  assert.equal(slugify("Š"), "s");
  assert.equal(slugify("Ţ"), "t");
  assert.equal(slugify("Ť"), "t");
  assert.equal(slugify("Ŧ"), "t");
  assert.equal(slugify("Ũ"), "u");
  assert.equal(slugify("Ū"), "u");
  assert.equal(slugify("Ŭ"), "u");
  assert.equal(slugify("Ů"), "u");
  assert.equal(slugify("Ű"), "u");
  assert.equal(slugify("Ų"), "u");
  assert.equal(slugify("Ŵ"), "w");
  assert.equal(slugify("Ŷ"), "y");
  assert.equal(slugify("Ź"), "z");
  assert.equal(slugify("Ż"), "z");
  assert.equal(slugify("Ž"), "z");
});

test("standard-slugify with Latin Extended-A (Lowercase)", () => {
  assert.equal(slugify("ā"), "a");
  assert.equal(slugify("ă"), "a");
  assert.equal(slugify("ą"), "a");
  assert.equal(slugify("ć"), "c");
  assert.equal(slugify("ĉ"), "c");
  assert.equal(slugify("ċ"), "c");
  assert.equal(slugify("č"), "c");
  assert.equal(slugify("ď"), "d");
  assert.equal(slugify("đ"), "d");
  assert.equal(slugify("ē"), "e");
  assert.equal(slugify("ĕ"), "e");
  assert.equal(slugify("ė"), "e");
  assert.equal(slugify("ę"), "e");
  assert.equal(slugify("ě"), "e");
  assert.equal(slugify("ĝ"), "g");
  assert.equal(slugify("ğ"), "g");
  assert.equal(slugify("ġ"), "g");
  assert.equal(slugify("ģ"), "g");
  assert.equal(slugify("ĥ"), "h");
  assert.equal(slugify("ħ"), "h");
  assert.equal(slugify("ĩ"), "i");
  assert.equal(slugify("ī"), "i");
  assert.equal(slugify("ĭ"), "i");
  assert.equal(slugify("į"), "i");
  assert.equal(slugify("ı"), "i");
  assert.equal(slugify("ĳ"), "ij");
  assert.equal(slugify("ĵ"), "j");
  assert.equal(slugify("ķ"), "k");
  assert.equal(slugify("ĸ"), "k");
  assert.equal(slugify("ĺ"), "l");
  assert.equal(slugify("ļ"), "l");
  assert.equal(slugify("ľ"), "l");
  assert.equal(slugify("ŀ"), "l");
  assert.equal(slugify("ł"), "l");
  assert.equal(slugify("ń"), "n");
  assert.equal(slugify("ņ"), "n");
  assert.equal(slugify("ň"), "n");
  assert.equal(slugify("ŉ"), "n");
  assert.equal(slugify("ŋ"), "n");
  assert.equal(slugify("ō"), "o");
  assert.equal(slugify("ŏ"), "o");
  assert.equal(slugify("ő"), "o");
  assert.equal(slugify("œ"), "oe");
  assert.equal(slugify("ŕ"), "r");
  assert.equal(slugify("ŗ"), "r");
  assert.equal(slugify("ř"), "r");
  assert.equal(slugify("ś"), "s");
  assert.equal(slugify("ŝ"), "s");
  assert.equal(slugify("ş"), "s");
  assert.equal(slugify("š"), "s");
  assert.equal(slugify("ţ"), "t");
  assert.equal(slugify("ť"), "t");
  assert.equal(slugify("ŧ"), "t");
  assert.equal(slugify("ũ"), "u");
  assert.equal(slugify("ū"), "u");
  assert.equal(slugify("ŭ"), "u");
  assert.equal(slugify("ů"), "u");
  assert.equal(slugify("ű"), "u");
  assert.equal(slugify("ų"), "u");
  assert.equal(slugify("ŵ"), "w");
  assert.equal(slugify("ŷ"), "y");
  assert.equal(slugify("ź"), "z");
  assert.equal(slugify("ż"), "z");
  assert.equal(slugify("ž"), "z");
  assert.equal(slugify("ſ"), "s");
});

test("standard-slugify with Latin Extended-B (Uppercase) from WGL4", () => {
  assert.equal(slugify("Ƒ"), "f");
  assert.equal(slugify("Ǻ"), "a");
  assert.equal(slugify("Ǽ"), "ae");
  assert.equal(slugify("Ǿ"), "oe");
});

test("standard-slugify with Latin Extended-B (Lowercase) from WGL4", () => {
  assert.equal(slugify("ƒ"), "f");
  assert.equal(slugify("ǻ"), "a");
  assert.equal(slugify("ǽ"), "ae");
  assert.equal(slugify("ǿ"), "oe");
});

test("standard-slugify with Latin Extended-B (Uppercase) from ISO-8859-16", () => {
  assert.equal(slugify("Ș"), "s");
  assert.equal(slugify("Ț"), "t");
});

test("standard-slugify with Latin Extended-B (Lowercase) from ISO-8859-16", () => {
  assert.equal(slugify("ș"), "s");
  assert.equal(slugify("ț"), "t");
});

test("standard-slugify with Greek and Coptic (Uppercase) from ISO-8859-7", () => {
  assert.equal(slugify("Ά"), "a");
  assert.equal(slugify("Έ"), "e");
  assert.equal(slugify("Ή"), "i");
  assert.equal(slugify("Ί"), "i");
  assert.equal(slugify("Α"), "a");
  assert.equal(slugify("Β"), "v");
  assert.equal(slugify("Γ"), "g");
  assert.equal(slugify("Δ"), "d");
  assert.equal(slugify("Ε"), "e");
  assert.equal(slugify("Ζ"), "z");
  assert.equal(slugify("Η"), "i");
  assert.equal(slugify("Θ"), "th");
  assert.equal(slugify("Ι"), "i");
  assert.equal(slugify("Κ"), "k");
  assert.equal(slugify("Λ"), "l");
  assert.equal(slugify("Μ"), "m");
  assert.equal(slugify("Ν"), "n");
  assert.equal(slugify("Ξ"), "x");
  assert.equal(slugify("Ο"), "o");
  assert.equal(slugify("Π"), "p");
  assert.equal(slugify("Ρ"), "r");
  assert.equal(slugify("Σ"), "s");
  assert.equal(slugify("Σ"), "s");
  assert.equal(slugify("Τ"), "t");
  assert.equal(slugify("Υ"), "y");
  assert.equal(slugify("Φ"), "f");
  assert.equal(slugify("Χ"), "ch");
  assert.equal(slugify("Ψ"), "ps");
  assert.equal(slugify("Ω"), "o");
  assert.equal(slugify("Ϊ"), "i");
  assert.equal(slugify("Ϋ"), "y");
  assert.equal(slugify("Ό"), "o");
  assert.equal(slugify("Ύ"), "y");
  assert.equal(slugify("Ώ"), "o");
});

test("standard-slugify with Greek and Coptic (Lowercase) from ISO-8859-7", () => {
  assert.equal(slugify("ΐ"), "i");
  assert.equal(slugify("ά"), "a");
  assert.equal(slugify("έ"), "e");
  assert.equal(slugify("ή"), "i");
  assert.equal(slugify("ί"), "i");
  assert.equal(slugify("ΰ"), "y");
  assert.equal(slugify("α"), "a");
  assert.equal(slugify("β"), "v");
  assert.equal(slugify("γ"), "g");
  assert.equal(slugify("δ"), "d");
  assert.equal(slugify("ε"), "e");
  assert.equal(slugify("ζ"), "z");
  assert.equal(slugify("η"), "i");
  assert.equal(slugify("θ"), "th");
  assert.equal(slugify("ι"), "i");
  assert.equal(slugify("κ"), "k");
  assert.equal(slugify("λ"), "l");
  assert.equal(slugify("μ"), "m");
  assert.equal(slugify("ν"), "n");
  assert.equal(slugify("ξ"), "x");
  assert.equal(slugify("ο"), "o");
  assert.equal(slugify("π"), "p");
  assert.equal(slugify("ρ"), "r");
  assert.equal(slugify("ς"), "s");
  assert.equal(slugify("σ"), "s");
  assert.equal(slugify("τ"), "t");
  assert.equal(slugify("υ"), "y");
  assert.equal(slugify("φ"), "f");
  assert.equal(slugify("χ"), "ch");
  assert.equal(slugify("ψ"), "ps");
  assert.equal(slugify("ω"), "o");
  assert.equal(slugify("ϊ"), "i");
  assert.equal(slugify("ϋ"), "y");
  assert.equal(slugify("ό"), "o");
  assert.equal(slugify("ύ"), "y");
  assert.equal(slugify("ώ"), "o");
});

test("standard-slugify with Cyrillic (Uppercase) from ISO-8859-5", () => {
  assert.equal(slugify("А"), "a");
  assert.equal(slugify("Б"), "b");
  assert.equal(slugify("В"), "v");
  assert.equal(slugify("Г"), "g");
  assert.equal(slugify("Д"), "d");
  assert.equal(slugify("Е"), "e");
  assert.equal(slugify("Ж"), "zh");
  assert.equal(slugify("З"), "z");
  assert.equal(slugify("И"), "i");
  assert.equal(slugify("Й"), "i");
  assert.equal(slugify("К"), "k");
  assert.equal(slugify("Л"), "l");
  assert.equal(slugify("М"), "m");
  assert.equal(slugify("Н"), "n");
  assert.equal(slugify("О"), "o");
  assert.equal(slugify("П"), "p");
  assert.equal(slugify("Р"), "r");
  assert.equal(slugify("С"), "s");
  assert.equal(slugify("Т"), "t");
  assert.equal(slugify("У"), "u");
  assert.equal(slugify("Ф"), "f");
  assert.equal(slugify("Х"), "kh");
  assert.equal(slugify("Ц"), "ts");
  assert.equal(slugify("Ч"), "ch");
  assert.equal(slugify("Ш"), "sh");
  assert.equal(slugify("Щ"), "shch");
  assert.equal(slugify("Ъ"), "ie");
  assert.equal(slugify("Ы"), "y");
  assert.equal(slugify("Ь"), "");
  assert.equal(slugify("Э"), "e");
  assert.equal(slugify("Ю"), "iu");
  assert.equal(slugify("Я"), "ia");
  assert.equal(slugify("Ѐ"), "e");
  assert.equal(slugify("Ё"), "e");
  assert.equal(slugify("Ђ"), "d");
  assert.equal(slugify("Ѓ"), "g");
  assert.equal(slugify("Є"), "ie");
  assert.equal(slugify("Ѕ"), "dz");
  assert.equal(slugify("І"), "i");
  assert.equal(slugify("Ї"), "i");
  assert.equal(slugify("Ј"), "j");
  assert.equal(slugify("Љ"), "lj");
  assert.equal(slugify("Њ"), "nj");
  assert.equal(slugify("Ћ"), "c");
  assert.equal(slugify("Ќ"), "k");
  assert.equal(slugify("Ѝ"), "i");
  assert.equal(slugify("Ў"), "u");
  assert.equal(slugify("Џ"), "dz");
});

test("standard-slugify with Cyrillic (Lowercase) from ISO-8859-5", () => {
  assert.equal(slugify("а"), "a");
  assert.equal(slugify("б"), "b");
  assert.equal(slugify("в"), "v");
  assert.equal(slugify("г"), "g");
  assert.equal(slugify("е"), "e");
  assert.equal(slugify("ж"), "zh");
  assert.equal(slugify("з"), "z");
  assert.equal(slugify("и"), "i");
  assert.equal(slugify("й"), "i");
  assert.equal(slugify("к"), "k");
  assert.equal(slugify("л"), "l");
  assert.equal(slugify("м"), "m");
  assert.equal(slugify("н"), "n");
  assert.equal(slugify("о"), "o");
  assert.equal(slugify("п"), "p");
  assert.equal(slugify("р"), "r");
  assert.equal(slugify("с"), "s");
  assert.equal(slugify("т"), "t");
  assert.equal(slugify("у"), "u");
  assert.equal(slugify("ф"), "f");
  assert.equal(slugify("х"), "kh");
  assert.equal(slugify("ц"), "ts");
  assert.equal(slugify("ч"), "ch");
  assert.equal(slugify("ш"), "sh");
  assert.equal(slugify("щ"), "shch");
  assert.equal(slugify("ъ"), "ie");
  assert.equal(slugify("ы"), "y");
  assert.equal(slugify("ь"), "");
  assert.equal(slugify("э"), "e");
  assert.equal(slugify("ю"), "iu");
  assert.equal(slugify("я"), "ia");
  assert.equal(slugify("ѐ"), "e");
  assert.equal(slugify("ё"), "e");
  assert.equal(slugify("ђ"), "d");
  assert.equal(slugify("ѓ"), "g");
  assert.equal(slugify("є"), "ie");
  assert.equal(slugify("ѕ"), "dz");
  assert.equal(slugify("і"), "i");
  assert.equal(slugify("ї"), "i");
  assert.equal(slugify("ј"), "j");
  assert.equal(slugify("љ"), "lj");
  assert.equal(slugify("њ"), "nj");
  assert.equal(slugify("ћ"), "c");
  assert.equal(slugify("ќ"), "k");
  assert.equal(slugify("ѝ"), "i");
  assert.equal(slugify("ў"), "u");
  assert.equal(slugify("џ"), "dz");
});

test("standard-slugify with Cyrillic (Uppercase) from WGL4", () => {
  assert.equal(slugify("Ґ"), "g");
});

test("standard-slugify with Cyrillic (Lowercase) from WGL4", () => {
  assert.equal(slugify("ґ"), "g");
});

test("standard-slugify with Latin Extended Additional (Uppercase) from ISO-8859-14", () => {
  assert.equal(slugify("Ḃ"), "b");
  assert.equal(slugify("Ḋ"), "d");
  assert.equal(slugify("Ḟ"), "f");
  assert.equal(slugify("Ṁ"), "m");
  assert.equal(slugify("Ṗ"), "p");
  assert.equal(slugify("Ṡ"), "s");
  assert.equal(slugify("Ṫ"), "t");
  assert.equal(slugify("Ẁ"), "w");
  assert.equal(slugify("Ẃ"), "w");
  assert.equal(slugify("Ẅ"), "w");
  assert.equal(slugify("Ỳ"), "y");
});

test("standard-slugify with Latin Extended Additional (Lowercase) from ISO-8859-14", () => {
  assert.equal(slugify("ḃ"), "b");
  assert.equal(slugify("ḋ"), "d");
  assert.equal(slugify("ḟ"), "f");
  assert.equal(slugify("ṁ"), "m");
  assert.equal(slugify("ṗ"), "p");
  assert.equal(slugify("ṡ"), "s");
  assert.equal(slugify("ṫ"), "t");
  assert.equal(slugify("ẁ"), "w");
  assert.equal(slugify("ẃ"), "w");
  assert.equal(slugify("ẅ"), "w");
  assert.equal(slugify("ỳ"), "y");
});

test("standard-slugify with Alphabetic Presentation Forms from WGL4", () => {
  assert.equal(slugify("ﬁ"), "fi");
  assert.equal(slugify("ﬂ"), "fl");
});

// See White_Space in https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt
test("standard-slugify with White_Space characters (except C0 and C1)", () => {
  assert.equal(slugify("a\u0020b"), "a-b");
  assert.equal(slugify("a\u00A0b"), "a-b");
  assert.equal(slugify("a\u1680b"), "a-b");
  assert.equal(slugify("a\u2000b"), "a-b");
  assert.equal(slugify("a\u2001b"), "a-b");
  assert.equal(slugify("a\u2002b"), "a-b");
  assert.equal(slugify("a\u2003b"), "a-b");
  assert.equal(slugify("a\u2004b"), "a-b");
  assert.equal(slugify("a\u2005b"), "a-b");
  assert.equal(slugify("a\u2006b"), "a-b");
  assert.equal(slugify("a\u2007b"), "a-b");
  assert.equal(slugify("a\u2008b"), "a-b");
  assert.equal(slugify("a\u2009b"), "a-b");
  assert.equal(slugify("a\u200Ab"), "a-b");
  assert.equal(slugify("a\u2028b"), "a-b");
  assert.equal(slugify("a\u2029b"), "a-b");
  assert.equal(slugify("a\u202Fb"), "a-b");
  assert.equal(slugify("a\u205Fb"), "a-b");
  assert.equal(slugify("a\u3000b"), "a-b");
});

test("standard-slugify with White_Space characters (consecutive)", () => {
  assert.equal(slugify("a\u0020\u0020b"), "a-b");
});

test("standard-slugify with leading white space", () => {
  assert.equal(slugify("\u0020a"), "a");
  assert.equal(slugify("\u0020\u0020a⁠"), "a");
  assert.equal(slugify("\na"), "a");
  assert.equal(slugify("\n\na"), "a");
  assert.equal(slugify("\ta"), "a");
  assert.equal(slugify("\t\ta"), "a");
});

test("standard-slugify with trailing white space", () => {
  assert.equal(slugify("a\u0020"), "a");
  assert.equal(slugify("a\u0020\u0020"), "a");
  assert.equal(slugify("a\n"), "a");
  assert.equal(slugify("a\n\n"), "a");
  assert.equal(slugify("a\t"), "a");
  assert.equal(slugify("a\t\t"), "a");
});

// See # Pd in https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt
test("standard-slugify with Dash characters", () => {
  assert.equal(slugify("a-b"), "a-b");
  assert.equal(slugify("a\u058Ab"), "a-b");
  assert.equal(slugify("a\u05BEb"), "a-b");
  assert.equal(slugify("a\u1400b"), "a-b");
  assert.equal(slugify("a\u1806b"), "a-b");
  assert.equal(slugify("a\u2010b"), "a-b");
  assert.equal(slugify("a\u2011b"), "a-b");
  assert.equal(slugify("a\u2012b"), "a-b");
  assert.equal(slugify("a\u2013b"), "a-b");
  assert.equal(slugify("a\u2014b"), "a-b");
  assert.equal(slugify("a\u2015b"), "a-b");
  assert.equal(slugify("a\u2E17b"), "a-b");
  assert.equal(slugify("a\u2E1Ab"), "a-b");
  assert.equal(slugify("a\u2E3Ab"), "a-b");
  assert.equal(slugify("a\u2E3Bb"), "a-b");
  assert.equal(slugify("a\u2E40b"), "a-b");
  assert.equal(slugify("a\u301Cb"), "a-b");
  assert.equal(slugify("a\u3030b"), "a-b");
  assert.equal(slugify("a\u30A0b"), "a-b");
  assert.equal(slugify("a\uFE31b"), "a-b");
  assert.equal(slugify("a\uFE32b"), "a-b");
  assert.equal(slugify("a\uFE58b"), "a-b");
  assert.equal(slugify("a\uFE63b"), "a-b");
  assert.equal(slugify("a\uFF0Db"), "a-b");
});

test("standard-slugify with Dash characters (consecutive)", () => {
  assert.equal(slugify("a--b"), "a-b");
});

test("standard-slugify with keepCase", () => {
  assert.equal(slugify("a", { keepCase: true }), "a");
  assert.equal(slugify("A", { keepCase: true }), "A");
  assert.equal(slugify("A_", { keepCase: true }), "A_");
  assert.equal(slugify("AA", { keepCase: true }), "AA");
  assert.equal(slugify("Aa", { keepCase: true }), "Aa");
  assert.equal(slugify("aa", { keepCase: true }), "aa");
  assert.equal(slugify("aA", { keepCase: true }), "aA");
  assert.equal(slugify("AaA", { keepCase: true }), "AaA");
  assert.equal(slugify("aAa", { keepCase: true }), "aAa");
  assert.equal(slugify("Æ", { keepCase: true }), "AE");
  assert.equal(slugify("Æ_", { keepCase: true }), "AE_");
  assert.equal(slugify("ÆA", { keepCase: true }), "AEA");
  assert.equal(slugify("Æa", { keepCase: true }), "Aea");
});

test("standard-slugify with replacements", () => {
  assert.equal(
    slugify("₿ raising, € falling", {
      replacements: [
        ["€", "eur"], // EURO SIGN
        ["₿", "btc"], // BITCOIN SIGN
      ],
    }),
    "btc-raising-eur-falling",
  );
});

test("standard-slugify with keepCase and replacements", () => {
  assert.equal(
    slugify("Єгипет, Їжак, Йорданія, Югославія, Ямайка", {
      keepCase: true,
      replacements: [
        [/(?<=^|\P{L})Є/, "YE"],
        [/(?<=^|\P{L})Ї/, "YI"],
        ["Г", "H"],
        ["И", "Y"],
        [/(?<=^|\P{L})Й/, "Y"],
        [/(?<=^|\P{L})Ю/, "YU"],
        [/(?<=^|\P{L})Я/, "YA"],
      ],
    }),
    "Yehypet-Yizhak-Yordaniia-Yuhoslaviia-Yamaika",
  );
  assert.equal(
    slugify("Єгипет, Їжак, Йорданія, Югославія, Ямайка", {
      replacements: [
        [/(?<=^|\P{L})Є/, "YE"],
        [/(?<=^|\P{L})Ї/, "YI"],
        ["Г", "H"],
        ["И", "Y"],
        [/(?<=^|\P{L})Й/, "Y"],
        [/(?<=^|\P{L})Ю/, "YU"],
        [/(?<=^|\P{L})Я/, "YA"],
      ],
    }),
    "yehypet-yizhak-yordaniia-yuhoslaviia-yamaika",
  );
});
