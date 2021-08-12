import slugify from "./index.js";

test("standard-slugify with no arguments", () => {
  expect(slugify()).toBe("");
});

test("standard-slugify with C0 Controls", () => {
  expect.assertions(32);
  expect(slugify("\u0000")).toBe("");
  expect(slugify("\u0001")).toBe("");
  expect(slugify("\u0002")).toBe("");
  expect(slugify("\u0003")).toBe("");
  expect(slugify("\u0004")).toBe("");
  expect(slugify("\u0005")).toBe("");
  expect(slugify("\u0006")).toBe("");
  expect(slugify("\u0007")).toBe("");
  expect(slugify("\u0008")).toBe("");
  expect(slugify("a\u0009b")).toBe("a-b");
  expect(slugify("a\u000Ab")).toBe("a-b");
  expect(slugify("a\u000Bb")).toBe("a-b");
  expect(slugify("a\u000Cb")).toBe("a-b");
  expect(slugify("a\u000Db")).toBe("a-b");
  expect(slugify("\u000E")).toBe("");
  expect(slugify("\u000F")).toBe("");
  expect(slugify("\u0010")).toBe("");
  expect(slugify("\u0011")).toBe("");
  expect(slugify("\u0012")).toBe("");
  expect(slugify("\u0013")).toBe("");
  expect(slugify("\u0014")).toBe("");
  expect(slugify("\u0015")).toBe("");
  expect(slugify("\u0016")).toBe("");
  expect(slugify("\u0017")).toBe("");
  expect(slugify("\u0018")).toBe("");
  expect(slugify("\u0019")).toBe("");
  expect(slugify("\u001A")).toBe("");
  expect(slugify("\u001B")).toBe("");
  expect(slugify("a\u001Cb")).toBe("a-b");
  expect(slugify("a\u001Db")).toBe("a-b");
  expect(slugify("a\u001Eb")).toBe("a-b");
  expect(slugify("a\u001Fb")).toBe("a-b");
});

test("standard-slugify with ASCII punctuation and symbols", () => {
  expect.assertions(33);
  expect(slugify("a\u0020b")).toBe("a-b");
  expect(slugify("!")).toBe("");
  expect(slugify('"')).toBe("");
  expect(slugify("#")).toBe("");
  expect(slugify("$")).toBe("");
  expect(slugify("%")).toBe("");
  expect(slugify("&")).toBe("");
  expect(slugify("'")).toBe("");
  expect(slugify("(")).toBe("");
  expect(slugify(")")).toBe("");
  expect(slugify("*")).toBe("");
  expect(slugify("+")).toBe("");
  expect(slugify(",")).toBe("");
  expect(slugify("a-b")).toBe("a-b");
  expect(slugify(".")).toBe("");
  expect(slugify("/")).toBe("");
  expect(slugify(":")).toBe("");
  expect(slugify(";")).toBe("");
  expect(slugify("<")).toBe("");
  expect(slugify("=")).toBe("");
  expect(slugify(">")).toBe("");
  expect(slugify("?")).toBe("");
  expect(slugify("@")).toBe("");
  expect(slugify("[")).toBe("");
  expect(slugify("\\")).toBe("");
  expect(slugify("]")).toBe("");
  expect(slugify("^")).toBe("");
  expect(slugify("_")).toBe("_");
  expect(slugify("`")).toBe("");
  expect(slugify("{")).toBe("");
  expect(slugify("|")).toBe("");
  expect(slugify("}")).toBe("");
  expect(slugify("~")).toBe("");
});

test("standard-slugify with ASCII digits", () => {
  expect.assertions(10);
  expect(slugify("0")).toBe("0");
  expect(slugify("1")).toBe("1");
  expect(slugify("2")).toBe("2");
  expect(slugify("3")).toBe("3");
  expect(slugify("4")).toBe("4");
  expect(slugify("5")).toBe("5");
  expect(slugify("6")).toBe("6");
  expect(slugify("7")).toBe("7");
  expect(slugify("8")).toBe("8");
  expect(slugify("9")).toBe("9");
});

test("standard-slugify with Uppercase Latin alphabet", () => {
  expect.assertions(26);
  expect(slugify("A")).toBe("a");
  expect(slugify("B")).toBe("b");
  expect(slugify("C")).toBe("c");
  expect(slugify("D")).toBe("d");
  expect(slugify("E")).toBe("e");
  expect(slugify("F")).toBe("f");
  expect(slugify("G")).toBe("g");
  expect(slugify("H")).toBe("h");
  expect(slugify("I")).toBe("i");
  expect(slugify("J")).toBe("j");
  expect(slugify("K")).toBe("k");
  expect(slugify("L")).toBe("l");
  expect(slugify("M")).toBe("m");
  expect(slugify("N")).toBe("n");
  expect(slugify("O")).toBe("o");
  expect(slugify("P")).toBe("p");
  expect(slugify("Q")).toBe("q");
  expect(slugify("R")).toBe("r");
  expect(slugify("S")).toBe("s");
  expect(slugify("T")).toBe("t");
  expect(slugify("U")).toBe("u");
  expect(slugify("V")).toBe("v");
  expect(slugify("W")).toBe("w");
  expect(slugify("X")).toBe("x");
  expect(slugify("Y")).toBe("y");
  expect(slugify("Z")).toBe("z");
});

test("standard-slugify with Lowercase Latin alphabet", () => {
  expect.assertions(26);
  expect(slugify("a")).toBe("a");
  expect(slugify("b")).toBe("b");
  expect(slugify("c")).toBe("c");
  expect(slugify("d")).toBe("d");
  expect(slugify("e")).toBe("e");
  expect(slugify("f")).toBe("f");
  expect(slugify("g")).toBe("g");
  expect(slugify("h")).toBe("h");
  expect(slugify("i")).toBe("i");
  expect(slugify("j")).toBe("j");
  expect(slugify("k")).toBe("k");
  expect(slugify("l")).toBe("l");
  expect(slugify("m")).toBe("m");
  expect(slugify("n")).toBe("n");
  expect(slugify("o")).toBe("o");
  expect(slugify("p")).toBe("p");
  expect(slugify("q")).toBe("q");
  expect(slugify("r")).toBe("r");
  expect(slugify("s")).toBe("s");
  expect(slugify("t")).toBe("t");
  expect(slugify("u")).toBe("u");
  expect(slugify("v")).toBe("v");
  expect(slugify("w")).toBe("w");
  expect(slugify("x")).toBe("x");
  expect(slugify("y")).toBe("y");
  expect(slugify("z")).toBe("z");
});

test("standard-slugify with Control character", () => {
  expect.assertions(1);
  expect(slugify("\u007F")).toBe("");
});

test("standard-slugify with C1 Controls", () => {
  expect.assertions(32);
  expect(slugify("\u0080")).toBe("");
  expect(slugify("\u0081")).toBe("");
  expect(slugify("\u0082")).toBe("");
  expect(slugify("\u0083")).toBe("");
  expect(slugify("\u0084")).toBe("");
  expect(slugify("a\u0085b")).toBe("a-b");
  expect(slugify("\u0086")).toBe("");
  expect(slugify("\u0087")).toBe("");
  expect(slugify("\u0088")).toBe("");
  expect(slugify("\u0089")).toBe("");
  expect(slugify("\u008A")).toBe("");
  expect(slugify("\u008B")).toBe("");
  expect(slugify("\u008C")).toBe("");
  expect(slugify("\u008D")).toBe("");
  expect(slugify("\u008E")).toBe("");
  expect(slugify("\u008F")).toBe("");
  expect(slugify("\u0090")).toBe("");
  expect(slugify("\u0091")).toBe("");
  expect(slugify("\u0092")).toBe("");
  expect(slugify("\u0093")).toBe("");
  expect(slugify("\u0094")).toBe("");
  expect(slugify("\u0095")).toBe("");
  expect(slugify("\u0096")).toBe("");
  expect(slugify("\u0097")).toBe("");
  expect(slugify("\u0098")).toBe("");
  expect(slugify("\u0099")).toBe("");
  expect(slugify("\u009A")).toBe("");
  expect(slugify("\u009B")).toBe("");
  expect(slugify("\u009C")).toBe("");
  expect(slugify("\u009D")).toBe("");
  expect(slugify("\u009E")).toBe("");
  expect(slugify("\u009F")).toBe("");
});

test("standard-slugify with Latin-1 Supplement Letters (Uppercase)", () => {
  expect.assertions(30);
  expect(slugify("À")).toBe("a");
  expect(slugify("Á")).toBe("a");
  expect(slugify("Â")).toBe("a");
  expect(slugify("Ã")).toBe("a");
  expect(slugify("Ä")).toBe("a");
  expect(slugify("Å")).toBe("a");
  expect(slugify("Æ")).toBe("ae");
  expect(slugify("Ç")).toBe("c");
  expect(slugify("È")).toBe("e");
  expect(slugify("É")).toBe("e");
  expect(slugify("Ê")).toBe("e");
  expect(slugify("Ë")).toBe("e");
  expect(slugify("Ì")).toBe("i");
  expect(slugify("Í")).toBe("i");
  expect(slugify("Î")).toBe("i");
  expect(slugify("Ï")).toBe("i");
  expect(slugify("Ð")).toBe("d");
  expect(slugify("Ñ")).toBe("n");
  expect(slugify("Ò")).toBe("o");
  expect(slugify("Ó")).toBe("o");
  expect(slugify("Ô")).toBe("o");
  expect(slugify("Õ")).toBe("o");
  expect(slugify("Ö")).toBe("o");
  expect(slugify("Ø")).toBe("oe");
  expect(slugify("Ù")).toBe("u");
  expect(slugify("Ú")).toBe("u");
  expect(slugify("Û")).toBe("u");
  expect(slugify("Ü")).toBe("u");
  expect(slugify("Ý")).toBe("y");
  expect(slugify("Þ")).toBe("th");
});

test("standard-slugify with Latin-1 Supplement Letters (Lowercase)", () => {
  expect.assertions(32);
  expect(slugify("ß")).toBe("ss");
  expect(slugify("à")).toBe("a");
  expect(slugify("á")).toBe("a");
  expect(slugify("â")).toBe("a");
  expect(slugify("ã")).toBe("a");
  expect(slugify("ä")).toBe("a");
  expect(slugify("å")).toBe("a");
  expect(slugify("æ")).toBe("ae");
  expect(slugify("ç")).toBe("c");
  expect(slugify("è")).toBe("e");
  expect(slugify("é")).toBe("e");
  expect(slugify("ê")).toBe("e");
  expect(slugify("ë")).toBe("e");
  expect(slugify("ì")).toBe("i");
  expect(slugify("í")).toBe("i");
  expect(slugify("î")).toBe("i");
  expect(slugify("ï")).toBe("i");
  expect(slugify("ð")).toBe("d");
  expect(slugify("ñ")).toBe("n");
  expect(slugify("ò")).toBe("o");
  expect(slugify("ó")).toBe("o");
  expect(slugify("ô")).toBe("o");
  expect(slugify("õ")).toBe("o");
  expect(slugify("ö")).toBe("o");
  expect(slugify("ø")).toBe("oe");
  expect(slugify("ù")).toBe("u");
  expect(slugify("ú")).toBe("u");
  expect(slugify("û")).toBe("u");
  expect(slugify("ü")).toBe("u");
  expect(slugify("ý")).toBe("y");
  expect(slugify("þ")).toBe("th");
  expect(slugify("ÿ")).toBe("y");
});

test("standard-slugify with Latin Extended-A (Uppercase)", () => {
  expect.assertions(62);
  expect(slugify("Ā")).toBe("a");
  expect(slugify("Ă")).toBe("a");
  expect(slugify("Ą")).toBe("a");
  expect(slugify("Ć")).toBe("c");
  expect(slugify("Ĉ")).toBe("c");
  expect(slugify("Ċ")).toBe("c");
  expect(slugify("Č")).toBe("c");
  expect(slugify("Ď")).toBe("d");
  expect(slugify("Đ")).toBe("d");
  expect(slugify("Ē")).toBe("e");
  expect(slugify("Ĕ")).toBe("e");
  expect(slugify("Ė")).toBe("e");
  expect(slugify("Ę")).toBe("e");
  expect(slugify("Ě")).toBe("e");
  expect(slugify("Ĝ")).toBe("g");
  expect(slugify("Ğ")).toBe("g");
  expect(slugify("Ġ")).toBe("g");
  expect(slugify("Ģ")).toBe("g");
  expect(slugify("Ĥ")).toBe("h");
  expect(slugify("Ħ")).toBe("h");
  expect(slugify("Ĩ")).toBe("i");
  expect(slugify("Ī")).toBe("i");
  expect(slugify("Ĭ")).toBe("i");
  expect(slugify("Į")).toBe("i");
  expect(slugify("I")).toBe("i");
  expect(slugify("Ĳ")).toBe("ij");
  expect(slugify("Ĵ")).toBe("j");
  expect(slugify("Ķ")).toBe("k");
  expect(slugify("Ĺ")).toBe("l");
  expect(slugify("Ļ")).toBe("l");
  expect(slugify("Ľ")).toBe("l");
  expect(slugify("Ŀ")).toBe("l");
  expect(slugify("Ł")).toBe("l");
  expect(slugify("Ń")).toBe("n");
  expect(slugify("Ņ")).toBe("n");
  expect(slugify("Ň")).toBe("n");
  expect(slugify("Ŋ")).toBe("n");
  expect(slugify("Ō")).toBe("o");
  expect(slugify("Ŏ")).toBe("o");
  expect(slugify("Ő")).toBe("o");
  expect(slugify("Œ")).toBe("oe");
  expect(slugify("Ŕ")).toBe("r");
  expect(slugify("Ŗ")).toBe("r");
  expect(slugify("Ř")).toBe("r");
  expect(slugify("Ś")).toBe("s");
  expect(slugify("Ŝ")).toBe("s");
  expect(slugify("Ş")).toBe("s");
  expect(slugify("Š")).toBe("s");
  expect(slugify("Ţ")).toBe("t");
  expect(slugify("Ť")).toBe("t");
  expect(slugify("Ŧ")).toBe("t");
  expect(slugify("Ũ")).toBe("u");
  expect(slugify("Ū")).toBe("u");
  expect(slugify("Ŭ")).toBe("u");
  expect(slugify("Ů")).toBe("u");
  expect(slugify("Ű")).toBe("u");
  expect(slugify("Ų")).toBe("u");
  expect(slugify("Ŵ")).toBe("w");
  expect(slugify("Ŷ")).toBe("y");
  expect(slugify("Ź")).toBe("z");
  expect(slugify("Ż")).toBe("z");
  expect(slugify("Ž")).toBe("z");
});

test("standard-slugify with Latin Extended-A (Lowercase)", () => {
  expect.assertions(65);
  expect(slugify("ā")).toBe("a");
  expect(slugify("ă")).toBe("a");
  expect(slugify("ą")).toBe("a");
  expect(slugify("ć")).toBe("c");
  expect(slugify("ĉ")).toBe("c");
  expect(slugify("ċ")).toBe("c");
  expect(slugify("č")).toBe("c");
  expect(slugify("ď")).toBe("d");
  expect(slugify("đ")).toBe("d");
  expect(slugify("ē")).toBe("e");
  expect(slugify("ĕ")).toBe("e");
  expect(slugify("ė")).toBe("e");
  expect(slugify("ę")).toBe("e");
  expect(slugify("ě")).toBe("e");
  expect(slugify("ĝ")).toBe("g");
  expect(slugify("ğ")).toBe("g");
  expect(slugify("ġ")).toBe("g");
  expect(slugify("ģ")).toBe("g");
  expect(slugify("ĥ")).toBe("h");
  expect(slugify("ħ")).toBe("h");
  expect(slugify("ĩ")).toBe("i");
  expect(slugify("ī")).toBe("i");
  expect(slugify("ĭ")).toBe("i");
  expect(slugify("į")).toBe("i");
  expect(slugify("ı")).toBe("i");
  expect(slugify("ĳ")).toBe("ij");
  expect(slugify("ĵ")).toBe("j");
  expect(slugify("ķ")).toBe("k");
  expect(slugify("ĸ")).toBe("k");
  expect(slugify("ĺ")).toBe("l");
  expect(slugify("ļ")).toBe("l");
  expect(slugify("ľ")).toBe("l");
  expect(slugify("ŀ")).toBe("l");
  expect(slugify("ł")).toBe("l");
  expect(slugify("ń")).toBe("n");
  expect(slugify("ņ")).toBe("n");
  expect(slugify("ň")).toBe("n");
  expect(slugify("ŉ")).toBe("n");
  expect(slugify("ŋ")).toBe("n");
  expect(slugify("ō")).toBe("o");
  expect(slugify("ŏ")).toBe("o");
  expect(slugify("ő")).toBe("o");
  expect(slugify("œ")).toBe("oe");
  expect(slugify("ŕ")).toBe("r");
  expect(slugify("ŗ")).toBe("r");
  expect(slugify("ř")).toBe("r");
  expect(slugify("ś")).toBe("s");
  expect(slugify("ŝ")).toBe("s");
  expect(slugify("ş")).toBe("s");
  expect(slugify("š")).toBe("s");
  expect(slugify("ţ")).toBe("t");
  expect(slugify("ť")).toBe("t");
  expect(slugify("ŧ")).toBe("t");
  expect(slugify("ũ")).toBe("u");
  expect(slugify("ū")).toBe("u");
  expect(slugify("ŭ")).toBe("u");
  expect(slugify("ů")).toBe("u");
  expect(slugify("ű")).toBe("u");
  expect(slugify("ų")).toBe("u");
  expect(slugify("ŵ")).toBe("w");
  expect(slugify("ŷ")).toBe("y");
  expect(slugify("ź")).toBe("z");
  expect(slugify("ż")).toBe("z");
  expect(slugify("ž")).toBe("z");
  expect(slugify("ſ")).toBe("s");
});

test("standard-slugify with Latin Extended-B (Uppercase) from WGL4", () => {
  expect(slugify("Ƒ")).toBe("f");
  expect(slugify("Ǻ")).toBe("a");
  expect(slugify("Ǽ")).toBe("ae");
  expect(slugify("Ǿ")).toBe("oe");
});

test("standard-slugify with Latin Extended-B (Lowercase) from WGL4", () => {
  expect(slugify("ƒ")).toBe("f");
  expect(slugify("ǻ")).toBe("a");
  expect(slugify("ǽ")).toBe("ae");
  expect(slugify("ǿ")).toBe("oe");
});

test("standard-slugify with Latin Extended-B (Uppercase) from ISO-8859-16", () => {
  expect(slugify("Ș")).toBe("s");
  expect(slugify("Ț")).toBe("t");
});

test("standard-slugify with Latin Extended-B (Lowercase) from ISO-8859-16", () => {
  expect(slugify("ș")).toBe("s");
  expect(slugify("ț")).toBe("t");
});

test("standard-slugify with Greek and Coptic (Uppercase) from ISO-8859-7", () => {
  expect(slugify("Ά")).toBe("a");
  expect(slugify("Έ")).toBe("e");
  expect(slugify("Ή")).toBe("i");
  expect(slugify("Ί")).toBe("i");
  expect(slugify("Α")).toBe("a");
  expect(slugify("Β")).toBe("v");
  expect(slugify("Γ")).toBe("g");
  expect(slugify("Δ")).toBe("d");
  expect(slugify("Ε")).toBe("e");
  expect(slugify("Ζ")).toBe("z");
  expect(slugify("Η")).toBe("i");
  expect(slugify("Θ")).toBe("th");
  expect(slugify("Ι")).toBe("i");
  expect(slugify("Κ")).toBe("k");
  expect(slugify("Λ")).toBe("l");
  expect(slugify("Μ")).toBe("m");
  expect(slugify("Ν")).toBe("n");
  expect(slugify("Ξ")).toBe("x");
  expect(slugify("Ο")).toBe("o");
  expect(slugify("Π")).toBe("p");
  expect(slugify("Ρ")).toBe("r");
  expect(slugify("Σ")).toBe("s");
  expect(slugify("Σ")).toBe("s");
  expect(slugify("Τ")).toBe("t");
  expect(slugify("Υ")).toBe("y");
  expect(slugify("Φ")).toBe("f");
  expect(slugify("Χ")).toBe("ch");
  expect(slugify("Ψ")).toBe("ps");
  expect(slugify("Ω")).toBe("o");
  expect(slugify("Ϊ")).toBe("i");
  expect(slugify("Ϋ")).toBe("y");
  expect(slugify("Ό")).toBe("o");
  expect(slugify("Ύ")).toBe("y");
  expect(slugify("Ώ")).toBe("o");
});

test("standard-slugify with Greek and Coptic (Lowercase) from ISO-8859-7", () => {
  expect(slugify("ΐ")).toBe("i");
  expect(slugify("ά")).toBe("a");
  expect(slugify("έ")).toBe("e");
  expect(slugify("ή")).toBe("i");
  expect(slugify("ί")).toBe("i");
  expect(slugify("ΰ")).toBe("y");
  expect(slugify("α")).toBe("a");
  expect(slugify("β")).toBe("v");
  expect(slugify("γ")).toBe("g");
  expect(slugify("δ")).toBe("d");
  expect(slugify("ε")).toBe("e");
  expect(slugify("ζ")).toBe("z");
  expect(slugify("η")).toBe("i");
  expect(slugify("θ")).toBe("th");
  expect(slugify("ι")).toBe("i");
  expect(slugify("κ")).toBe("k");
  expect(slugify("λ")).toBe("l");
  expect(slugify("μ")).toBe("m");
  expect(slugify("ν")).toBe("n");
  expect(slugify("ξ")).toBe("x");
  expect(slugify("ο")).toBe("o");
  expect(slugify("π")).toBe("p");
  expect(slugify("ρ")).toBe("r");
  expect(slugify("ς")).toBe("s");
  expect(slugify("σ")).toBe("s");
  expect(slugify("τ")).toBe("t");
  expect(slugify("υ")).toBe("y");
  expect(slugify("φ")).toBe("f");
  expect(slugify("χ")).toBe("ch");
  expect(slugify("ψ")).toBe("ps");
  expect(slugify("ω")).toBe("o");
  expect(slugify("ϊ")).toBe("i");
  expect(slugify("ϋ")).toBe("y");
  expect(slugify("ό")).toBe("o");
  expect(slugify("ύ")).toBe("y");
  expect(slugify("ώ")).toBe("o");
});

test("standard-slugify with Cyrillic (Uppercase) from ISO-8859-5", () => {
  expect(slugify("А")).toBe("a");
  expect(slugify("Б")).toBe("b");
  expect(slugify("В")).toBe("v");
  expect(slugify("Г")).toBe("g");
  expect(slugify("Д")).toBe("d");
  expect(slugify("Е")).toBe("e");
  expect(slugify("Ж")).toBe("zh");
  expect(slugify("З")).toBe("z");
  expect(slugify("И")).toBe("i");
  expect(slugify("Й")).toBe("i");
  expect(slugify("К")).toBe("k");
  expect(slugify("Л")).toBe("l");
  expect(slugify("М")).toBe("m");
  expect(slugify("Н")).toBe("n");
  expect(slugify("О")).toBe("o");
  expect(slugify("П")).toBe("p");
  expect(slugify("Р")).toBe("r");
  expect(slugify("С")).toBe("s");
  expect(slugify("Т")).toBe("t");
  expect(slugify("У")).toBe("u");
  expect(slugify("Ф")).toBe("f");
  expect(slugify("Х")).toBe("kh");
  expect(slugify("Ц")).toBe("ts");
  expect(slugify("Ч")).toBe("ch");
  expect(slugify("Ш")).toBe("sh");
  expect(slugify("Щ")).toBe("shch");
  expect(slugify("Ъ")).toBe("ie");
  expect(slugify("Ы")).toBe("y");
  expect(slugify("Ь")).toBe("");
  expect(slugify("Э")).toBe("e");
  expect(slugify("Ю")).toBe("iu");
  expect(slugify("Я")).toBe("ia");
  expect(slugify("Ѐ")).toBe("e");
  expect(slugify("Ё")).toBe("e");
  expect(slugify("Ђ")).toBe("d");
  expect(slugify("Ѓ")).toBe("g");
  expect(slugify("Є")).toBe("ie");
  expect(slugify("Ѕ")).toBe("dz");
  expect(slugify("І")).toBe("i");
  expect(slugify("Ї")).toBe("i");
  expect(slugify("Ј")).toBe("j");
  expect(slugify("Љ")).toBe("lj");
  expect(slugify("Њ")).toBe("nj");
  expect(slugify("Ћ")).toBe("c");
  expect(slugify("Ќ")).toBe("k");
  expect(slugify("Ѝ")).toBe("i");
  expect(slugify("Ў")).toBe("u");
  expect(slugify("Џ")).toBe("dz");
});

test("standard-slugify with Cyrillic (Lowercase) from ISO-8859-5", () => {
  expect(slugify("а")).toBe("a");
  expect(slugify("б")).toBe("b");
  expect(slugify("в")).toBe("v");
  expect(slugify("г")).toBe("g");
  expect(slugify("е")).toBe("e");
  expect(slugify("ж")).toBe("zh");
  expect(slugify("з")).toBe("z");
  expect(slugify("и")).toBe("i");
  expect(slugify("й")).toBe("i");
  expect(slugify("к")).toBe("k");
  expect(slugify("л")).toBe("l");
  expect(slugify("м")).toBe("m");
  expect(slugify("н")).toBe("n");
  expect(slugify("о")).toBe("o");
  expect(slugify("п")).toBe("p");
  expect(slugify("р")).toBe("r");
  expect(slugify("с")).toBe("s");
  expect(slugify("т")).toBe("t");
  expect(slugify("у")).toBe("u");
  expect(slugify("ф")).toBe("f");
  expect(slugify("х")).toBe("kh");
  expect(slugify("ц")).toBe("ts");
  expect(slugify("ч")).toBe("ch");
  expect(slugify("ш")).toBe("sh");
  expect(slugify("щ")).toBe("shch");
  expect(slugify("ъ")).toBe("ie");
  expect(slugify("ы")).toBe("y");
  expect(slugify("ь")).toBe("");
  expect(slugify("э")).toBe("e");
  expect(slugify("ю")).toBe("iu");
  expect(slugify("я")).toBe("ia");
  expect(slugify("ѐ")).toBe("e");
  expect(slugify("ё")).toBe("e");
  expect(slugify("ђ")).toBe("d");
  expect(slugify("ѓ")).toBe("g");
  expect(slugify("є")).toBe("ie");
  expect(slugify("ѕ")).toBe("dz");
  expect(slugify("і")).toBe("i");
  expect(slugify("ї")).toBe("i");
  expect(slugify("ј")).toBe("j");
  expect(slugify("љ")).toBe("lj");
  expect(slugify("њ")).toBe("nj");
  expect(slugify("ћ")).toBe("c");
  expect(slugify("ќ")).toBe("k");
  expect(slugify("ѝ")).toBe("i");
  expect(slugify("ў")).toBe("u");
  expect(slugify("џ")).toBe("dz");
});

test("standard-slugify with Cyrillic (Uppercase) from WGL4", () => {
  expect(slugify("Ґ")).toBe("g");
});

test("standard-slugify with Cyrillic (Lowercase) from WGL4", () => {
  expect(slugify("ґ")).toBe("g");
});

test("standard-slugify with Latin Extended Additional (Uppercase) from ISO-8859-14", () => {
  expect(slugify("Ḃ")).toBe("b");
  expect(slugify("Ḋ")).toBe("d");
  expect(slugify("Ḟ")).toBe("f");
  expect(slugify("Ṁ")).toBe("m");
  expect(slugify("Ṗ")).toBe("p");
  expect(slugify("Ṡ")).toBe("s");
  expect(slugify("Ṫ")).toBe("t");
  expect(slugify("Ẁ")).toBe("w");
  expect(slugify("Ẃ")).toBe("w");
  expect(slugify("Ẅ")).toBe("w");
  expect(slugify("Ỳ")).toBe("y");
});

test("standard-slugify with Latin Extended Additional (Lowercase) from ISO-8859-14", () => {
  expect(slugify("ḃ")).toBe("b");
  expect(slugify("ḋ")).toBe("d");
  expect(slugify("ḟ")).toBe("f");
  expect(slugify("ṁ")).toBe("m");
  expect(slugify("ṗ")).toBe("p");
  expect(slugify("ṡ")).toBe("s");
  expect(slugify("ṫ")).toBe("t");
  expect(slugify("ẁ")).toBe("w");
  expect(slugify("ẃ")).toBe("w");
  expect(slugify("ẅ")).toBe("w");
  expect(slugify("ỳ")).toBe("y");
});

test("standard-slugify with Alphabetic Presentation Forms from WGL4", () => {
  expect(slugify("ﬁ")).toBe("fi");
  expect(slugify("ﬂ")).toBe("fl");
});

// See White_Space in https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt
test("standard-slugify with White_Space characters (except C0 and C1)", () => {
  expect.assertions(19);
  expect(slugify("a\u0020b")).toBe("a-b");
  expect(slugify("a\u00A0b")).toBe("a-b");
  expect(slugify("a\u1680b")).toBe("a-b");
  expect(slugify("a\u2000b")).toBe("a-b");
  expect(slugify("a\u2001b")).toBe("a-b");
  expect(slugify("a\u2002b")).toBe("a-b");
  expect(slugify("a\u2003b")).toBe("a-b");
  expect(slugify("a\u2004b")).toBe("a-b");
  expect(slugify("a\u2005b")).toBe("a-b");
  expect(slugify("a\u2006b")).toBe("a-b");
  expect(slugify("a\u2007b")).toBe("a-b");
  expect(slugify("a\u2008b")).toBe("a-b");
  expect(slugify("a\u2009b")).toBe("a-b");
  expect(slugify("a\u200Ab")).toBe("a-b");
  expect(slugify("a\u2028b")).toBe("a-b");
  expect(slugify("a\u2029b")).toBe("a-b");
  expect(slugify("a\u202Fb")).toBe("a-b");
  expect(slugify("a\u205Fb")).toBe("a-b");
  expect(slugify("a\u3000b")).toBe("a-b");
});

test("standard-slugify with White_Space characters (consecutive)", () => {
  expect(slugify("a\u0020\u0020b")).toBe("a-b");
});

test("standard-slugify with leading white space", () => {
  expect(slugify("\u0020a")).toBe("a");
  expect(slugify("\u0020\u0020a⁠")).toBe("a");
  expect(slugify("\na")).toBe("a");
  expect(slugify("\n\na")).toBe("a");
  expect(slugify("\ta")).toBe("a");
  expect(slugify("\t\ta")).toBe("a");
});

test("standard-slugify with trailing white space", () => {
  expect(slugify("a\u0020")).toBe("a");
  expect(slugify("a\u0020\u0020")).toBe("a");
  expect(slugify("a\n")).toBe("a");
  expect(slugify("a\n\n")).toBe("a");
  expect(slugify("a\t")).toBe("a");
  expect(slugify("a\t\t")).toBe("a");
});

// See # Pd in https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt
test("standard-slugify with Dash characters", () => {
  expect.assertions(24);
  expect(slugify("a-b")).toBe("a-b");
  expect(slugify("a\u058Ab")).toBe("a-b");
  expect(slugify("a\u05BEb")).toBe("a-b");
  expect(slugify("a\u1400b")).toBe("a-b");
  expect(slugify("a\u1806b")).toBe("a-b");
  expect(slugify("a\u2010b")).toBe("a-b");
  expect(slugify("a\u2011b")).toBe("a-b");
  expect(slugify("a\u2012b")).toBe("a-b");
  expect(slugify("a\u2013b")).toBe("a-b");
  expect(slugify("a\u2014b")).toBe("a-b");
  expect(slugify("a\u2015b")).toBe("a-b");
  expect(slugify("a\u2E17b")).toBe("a-b");
  expect(slugify("a\u2E1Ab")).toBe("a-b");
  expect(slugify("a\u2E3Ab")).toBe("a-b");
  expect(slugify("a\u2E3Bb")).toBe("a-b");
  expect(slugify("a\u2E40b")).toBe("a-b");
  expect(slugify("a\u301Cb")).toBe("a-b");
  expect(slugify("a\u3030b")).toBe("a-b");
  expect(slugify("a\u30A0b")).toBe("a-b");
  expect(slugify("a\uFE31b")).toBe("a-b");
  expect(slugify("a\uFE32b")).toBe("a-b");
  expect(slugify("a\uFE58b")).toBe("a-b");
  expect(slugify("a\uFE63b")).toBe("a-b");
  expect(slugify("a\uFF0Db")).toBe("a-b");
});

test("standard-slugify with Dash characters (consecutive)", () => {
  expect(slugify("a--b")).toBe("a-b");
});

test("standard-slugify with keepCase", () => {
  expect(slugify("a", { keepCase: true })).toBe("a");
  expect(slugify("A", { keepCase: true })).toBe("A");
  expect(slugify("A_", { keepCase: true })).toBe("A_");
  expect(slugify("AA", { keepCase: true })).toBe("AA");
  expect(slugify("Aa", { keepCase: true })).toBe("Aa");
  expect(slugify("aa", { keepCase: true })).toBe("aa");
  expect(slugify("aA", { keepCase: true })).toBe("aA");
  expect(slugify("AaA", { keepCase: true })).toBe("AaA");
  expect(slugify("aAa", { keepCase: true })).toBe("aAa");
  expect(slugify("Æ", { keepCase: true })).toBe("AE");
  expect(slugify("Æ_", { keepCase: true })).toBe("AE_");
  expect(slugify("ÆA", { keepCase: true })).toBe("AEA");
  expect(slugify("Æa", { keepCase: true })).toBe("Aea");
});

test("standard-slugify with replacements", () => {
  expect(
    slugify("₿ raising, € falling", {
      replacements: [
        ["€", "eur"], // EURO SIGN
        ["₿", "btc"], // BITCOIN SIGN
      ],
    })
  ).toBe("btc-raising-eur-falling");
});

test("standard-slugify with keepCase and replacements", () => {
  expect(
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
    })
  ).toBe("Yehypet-Yizhak-Yordaniia-Yuhoslaviia-Yamaika");
  expect(
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
    })
  ).toBe("yehypet-yizhak-yordaniia-yuhoslaviia-yamaika");
});
