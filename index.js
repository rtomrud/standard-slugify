/**
 * Uppercase characters are omited because the string is lowercased.
 * Non-alphanumeric characters that are removed are also omited.
 *
 * Transliterated according to ISO/IEC 7501-3, except Greek, which is
 * transiletated according to ISO 843.
 *
 * Transliteration map of Latin and Cyrillic on pages 38 to 42 of
 * https://www.icao.int/publications/Documents/9303_p3_cons_en.pdf
 */
const replacements = {
  /**
   * C0 Controls and Basic Latin
   *
   * - US-ASCII
   *
   * https://www.unicode.org/charts/PDF/U0000.pdf
   */
  "\u0009": "-", // HT: CHARACTER TABULATION, horizontal tabulation (ht), tab
  "\u000A": "-", // LF: LINE FEED, new line (nl), end of line (eol)
  "\u000B": "-", // VT: LINE TABULATION, vertical tabulation (vt)
  "\u000C": "-", // FF: FORM FEED (ff)
  "\u000D": "-", // CR: CARRIAGE RETURN (cr)
  "\u001C": "-", // FS: INFORMATION SEPARATOR FOUR, file separator
  "\u001D": "-", // GS: INFORMATION SEPARATOR THREE, group separator
  "\u001E": "-", // RS: INFORMATION SEPARATOR TWO, record separator
  "\u001F": "-", // US: INFORMATION SEPARATOR ONE, unit separator
  " ": "-", // SP: SPACE
  "-": "-", // HYPHEN-MINUS, hyphen or minus sign, hyphus
  "0": "0",
  "1": "1",
  "2": "2",
  "3": "3",
  "4": "4",
  "5": "5",
  "6": "6",
  "7": "7",
  "8": "8",
  "9": "9",
  _: "_", // LOW LINE, spacing underscore
  a: "a",
  b: "b",
  c: "c",
  d: "d",
  e: "e",
  f: "f",
  g: "g",
  h: "h",
  i: "i",
  j: "j",
  k: "k",
  l: "l",
  m: "m",
  n: "n",
  o: "o",
  p: "p",
  q: "q",
  r: "r",
  s: "s",
  t: "t",
  u: "u",
  v: "v",
  w: "w",
  x: "x",
  y: "y",
  z: "z",

  /**
   * C1 Controls and Latin-1 Supplement
   *
   * - ISO-8859-1: Latin-1
   *
   * https://www.unicode.org/charts/PDF/U0080.pdf
   */
  "\u0085": "-", // NEL: NEXT LINE (nel)
  " ": "-", // NBPS: NO-BREAK SPACE, non-breaking space
  ß: "ss",
  à: "a",
  á: "a",
  â: "a",
  ã: "a",
  ä: "a",
  å: "a",
  æ: "ae",
  ç: "c",
  è: "e",
  é: "e",
  ê: "e",
  ë: "e",
  ì: "i",
  í: "i",
  î: "i",
  ï: "i",
  ð: "d",
  ñ: "n",
  ò: "o",
  ó: "o",
  ô: "o",
  õ: "o",
  ö: "o",
  ø: "oe",
  ù: "u",
  ú: "u",
  û: "u",
  ü: "u",
  ý: "y",
  þ: "th",
  ÿ: "y",

  /**
   * Latin Extended-A
   *
   * - ISO-8859-2: Latin-2 Central European
   * - ISO-8859-3: Latin-3 South European
   * - ISO-8859-4: Latin-4 North European
   * - ISO-8859-9: Latin-5 Turkish
   * - ISO-8859-10: Latin-6 Nordic
   * - ISO-8859-13: Latin-7 Baltic Rim
   * - ISO-8859-14: Latin-8 Celtic
   * - ISO-8859-15: Latin-9
   * - ISO-8859-16: Latin-10 South-Eastern European
   * - MES-1
   * - WGL4
   *
   * https://www.unicode.org/charts/PDF/U0100.pdf
   */
  ā: "a",
  ă: "a",
  ą: "a",
  ć: "c",
  ĉ: "c",
  ċ: "c",
  č: "c",
  ď: "d",
  đ: "d",
  ē: "e",
  ĕ: "e",
  ė: "e",
  ę: "e",
  ě: "e",
  ĝ: "g",
  ğ: "g",
  ġ: "g",
  ģ: "g",
  ĥ: "h",
  ħ: "h",
  ĩ: "i",
  ī: "i",
  ĭ: "i",
  į: "i",
  ı: "i",
  ĳ: "ij",
  ĵ: "j",
  ķ: "k",
  ĸ: "k",
  ĺ: "l",
  ļ: "l",
  ľ: "l",
  ŀ: "l",
  ł: "l",
  ń: "n",
  ņ: "n",
  ň: "n",
  ŉ: "n",
  ŋ: "n",
  ō: "o",
  ŏ: "o",
  ő: "o",
  œ: "oe",
  ŕ: "r",
  ŗ: "r",
  ř: "r",
  ś: "s",
  ŝ: "s",
  ş: "s",
  š: "s",
  ţ: "t",
  ť: "t",
  ŧ: "t",
  ũ: "u",
  ū: "u",
  ŭ: "u",
  ů: "u",
  ű: "u",
  ų: "u",
  ŵ: "w",
  ŷ: "y",
  ź: "z",
  ż: "z",
  ž: "z",
  ſ: "s",

  /**
   * Latin Extended-B (subset)
   *
   * - WGL4
   *
   * https://www.unicode.org/charts/PDF/U0180.pdf
   */
  ƒ: "f",
  ǻ: "a",
  ǽ: "ae",
  ǿ: "oe",

  /**
   * Latin Extended-B (subset)
   *
   * - ISO-8859-16: Latin-10 South-Eastern European
   *
   * https://www.unicode.org/charts/PDF/U0180.pdf
   */
  ș: "s",
  ț: "t",

  /**
   * Greek and Coptic (Greek subset)
   *
   * - ISO-8859-7: Latin/Greek
   *
   * Transliterated according to ISO 843, and then the diacritics are removed as
   * specified in ISO/IEC 7501-3.
   *
   * https://www.unicode.org/charts/PDF/U0370.pdf
   *
   * https://en.wikipedia.org/wiki/ISO_843
   */
  ΐ: "i",
  ά: "a",
  έ: "e",
  ή: "i",
  ί: "i",
  ΰ: "y",
  α: "a",
  β: "v",
  γ: "g",
  δ: "d",
  ε: "e",
  ζ: "z",
  η: "i",
  θ: "th",
  ι: "i",
  κ: "k",
  λ: "l",
  μ: "m",
  ν: "n",
  ξ: "x",
  ο: "o",
  π: "p",
  ρ: "r",
  ς: "s",
  σ: "s",
  τ: "t",
  υ: "y",
  φ: "f",
  χ: "ch",
  ψ: "ps",
  ω: "o",
  ϊ: "i",
  ϋ: "y",
  ό: "o",
  ύ: "y",
  ώ: "o",

  /**
   * Cyrillic (subset)
   *
   * - ISO-8859-5: Latin/Cyrillic
   *
   * Transliterated according to ISO/IEC 7501-3. The ISO 9:1995, identical to
   * GOST 7.79-2000 System A, does not apply because its goal is
   * transliterating to Latin using single letters with diacritics to allow
   * reverse transliteration.
   *
   * https://www.unicode.org/charts/PDF/U0400.pdf
   *
   * https://www.icao.int/publications/Documents/9303_p3_cons_en.pdf
   */
  а: "a",
  б: "b",
  в: "v",
  г: "g", // `h` for Serbian and Belorussian
  д: "d",
  е: "e",
  ж: "zh", // `z` for Serbian
  з: "z",
  и: "i", // `y` for Ukrainian
  й: "i",
  к: "k",
  л: "l",
  м: "m",
  н: "n",
  о: "o",
  п: "p",
  р: "r",
  с: "s",
  т: "t",
  у: "u",
  ф: "f",
  х: "kh", // `h` for Serbian
  ц: "ts", // `c` for Serbian
  ч: "ch", // `c` for Serbian
  ш: "sh", // `s` for Serbian
  щ: "shch", // `sht` for Bulgarian
  ъ: "ie", // Novel transliteration only present in ISO/IEC 7501-3
  ы: "y",
  ь: "",
  э: "e",
  ю: "iu",
  я: "ia",
  ѐ: "e",
  ё: "e", // `io` for Belorussian
  ђ: "d",
  ѓ: "g",
  є: "ie",
  ѕ: "dz",
  і: "i",
  ї: "i",
  ј: "j",
  љ: "lj",
  њ: "nj",
  ћ: "c",
  ќ: "k",
  ѝ: "i",
  ў: "u",
  џ: "dz",

  /**
   * Cyrillic (subset)
   *
   * - WGL4
   *
   * https://www.unicode.org/charts/PDF/U0400.pdf
   */
  ґ: "g",

  /**
   * Latin Extended Additional (subset)
   *
   * - ISO-8859-14: Latin-8 Celtic
   *
   * https://www.unicode.org/charts/PDF/U1E00.pdf
   */
  ḃ: "b",
  ḋ: "d",
  ḟ: "f",
  ṁ: "m",
  ṗ: "p",
  ṡ: "s",
  ṫ: "t",
  ẁ: "w",
  ẃ: "w",
  ẅ: "w",
  ỳ: "y",

  /**
   * Alphabetic Presentation Forms
   *
   * - WGL4
   *
   * https://www.unicode.org/charts/PDF/UFB00.pdf
   */
  ﬁ: "fi", // LATIN SMALL LIGATURE FI
  ﬂ: "fl", // LATIN SMALL LIGATURE FL

  /**
   * Other White_Space characters
   *
   * https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt
   */
  " ": "-", // OGHAM SPACE MARK
  " ": "-", // EN QUAD
  " ": "-", // EM QUAD, mutton quad
  " ": "-", // EN SPACE, nut
  " ": "-", // EM SPACE, mutton
  " ": "-", // THREE-PER-EM SPACE, thick space
  " ": "-", // FOUR-PER-EM SPACE, mid space
  " ": "-", // SIX-PER-EM SPACE
  " ": "-", // FIGURE SPACE
  " ": "-", // PUNCTUATION SPACE
  " ": "-", // THIN SPACE
  " ": "-", // HAIR SPACE
  "\u2028": "-", // LSEP: LINE SEPARATOR
  "\u2029": "-", // PSEP: PARAGRAPH SEPARATOR
  " ": "-", // NNBSP: NARROW NO-BREAK SPACE (nnbsp)
  " ": "-", // MMSP: MEDIUM MATHEMATICAL SPACE (mmsp)
  "　": "-", // IDEOGRAPHIC SPACE

  "‐": "-", // HYPHEN
  "‑": "-", // NON-BREAKING HYPHEN
  "‒": "-", // FIGURE DASH
  "–": "-", // EN DASH
  "—": "-", // EM DASH
  "―": "-" // HORIZONTAL BAR, quotation dash
};

// Hack to make TypeScript's type inference work properly
const initReplacements = {};

/**
 * Returns a slugified version of the specified string, where non-alphanumeric
 * characters are removed, separators are replaced with `-`, alphabetic
 * characters are lowercased, and non-US-ASCII alphabetic characters are
 * transliterated to US-ASCII. You can specify custom replacements by passing
 * an object as the second argument.
 *
 * The returned string is safe for use in URIs and filenames.
 *
 * Supports all characters from US-ASCII, ISO-8859-1,2,3,4,5,7,9,10,13,14,15,16,
 * MES-1 and WGL4. Non-supported characters are removed by default.
 */
export default function(string = "", customReplacements = initReplacements) {
  if (typeof customReplacements !== "object" || customReplacements == null) {
    throw TypeError();
  }

  const shouldUseDefaultReplacer = customReplacements === initReplacements;
  const replacer = shouldUseDefaultReplacer
    ? match => replacements[match] || ""
    : match => {
        const customReplacement = customReplacements[match];
        return customReplacement == null
          ? replacements[match] || ""
          : customReplacement;
      };

  return string
    .toLowerCase()
    .replace(/[\s\S]/g, replacer)
    .replace(/^-+|-+$/g, "");
}
