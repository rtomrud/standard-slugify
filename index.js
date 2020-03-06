/**
 * Transliteration performed according to ISO/IEC 7501-3, except Greek, which is
 * transliterated according to ISO 843 (without diacritics).
 *
 * See the transliteration map of Latin and Cyrillic on pages 38 to 42 of
 * https://www.icao.int/publications/Documents/9303_p3_cons_en.pdf
 */
const defaultReplacements = [
  ["[aàáâãäåāăąǻάαа]", "a"],
  ["[bбḃ]", "b"],
  ["[cçćĉċčћ]", "c"],
  ["[dðďđδдђḋ]", "d"],
  ["[eèéêëēĕėęěέεеэѐё]", "e"],
  ["[fƒφфḟ]", "f"],
  ["[gĝğġģγгѓґ]", "g"],
  ["[hĥħ]", "h"],
  ["[iìíîïĩīĭįıΐήίηιϊийіїѝ]", "i"],
  ["[jĵј]", "j"],
  ["[kķĸκкќ]", "k"],
  ["[lĺļľŀłλл]", "l"],
  ["[mμмṁ]", "m"],
  ["[nñńņňŉŋνн]", "n"],
  ["[oòóôõöōŏőοωόώо]", "o"],
  ["[pπпṗ]", "p"],
  ["q", "q"],
  ["[rŕŗřρр]", "r"],
  ["[sśŝşšſșςσсṡ]", "s"],
  ["[tţťŧțτтṫ]", "t"],
  ["[uùúûüũūŭůűųуў]", "u"],
  ["[vβв]", "v"],
  ["[wŵẁẃẅ]", "w"],
  ["[xξ]", "x"],
  ["[yýÿŷΰυϋύыỳ]", "y"],
  ["[zźżžζз]", "z"],
  ["[æǽ]", "ae"],
  ["[χч]", "ch"],
  ["[ѕџ]", "dz"],
  ["ﬁ", "fi"],
  ["ﬂ", "fl"],
  ["я", "ia"],
  ["[ъє]", "ie"],
  ["ĳ", "ij"],
  ["ю", "iu"],
  ["х", "kh"],
  ["љ", "lj"],
  ["њ", "nj"],
  ["[øœǿ]", "oe"],
  ["ψ", "ps"],
  ["ш", "sh"],
  ["щ", "shch"],
  ["ß", "ss"],
  ["[þθ]", "th"],
  ["ц", "ts"],
  ["ж", "zh"],

  // White_Space, General_Category=Dash_Punctuation and Control Codes
  [
    "[\\u0009-\\u000D\\u001C-\\u001F\\u0020\\u002D\\u0085\\u00A0\\u1680\\u2000-\\u200A\\u2028\\u2029\\u202F\\u205F\\u3000\\u058A\\u05BE\\u1400\\u1806\\u2010-\\u2015\\u2E17\\u2E1A\\u2E3A\\u2E3B\\u2E40\\u301C\\u3030\\u30A0\\uFE31\\uFE32\\uFE58\\uFE63\\uFF0D]",
    "-"
  ]
];

const replaceLoweringCase = (string, [regExp, replacement]) =>
  string.replace(RegExp(regExp, "giu"), replacement);

const replaceKeepingCase = (string, [regExp, replacement]) =>
  string.replace(RegExp(regExp, "giu"), (match, offset) => {
    if (match.toLowerCase() === match) {
      return replacement.toLowerCase();
    }

    const nextChar = string.charAt(offset + 1);
    return !nextChar || nextChar.toUpperCase() === nextChar
      ? replacement.toUpperCase()
      : replacement.charAt().toUpperCase() +
          replacement.substring(1).toLowerCase();
  });

/**
 * Returns a slug of the given `string`. Leading and trailing white space is
 * removed; white space, control codes that are separators, and hyphen and dash
 * marks are converted to `-`; uppercase letters are lowercased; non-US-ASCII
 * letters are transliterated to US-ASCII; `_` is kept as is; and the rest of
 * characters are removed.
 *
 * By default, the resulting slug is in lowercase. To keep the original case of
 * the given `string`, set the `keepCase` option to `true`.
 *
 * To specify custom replacements, pass as the `replacements` option an object
 * where each key matches the characters to be replaced and the value is their
 * replacement. The keys can be regular expressions.
 */
export default function(
  string = "",
  { keepCase = false, replacements = {} } = {}
) {
  const replacer = keepCase ? replaceKeepingCase : replaceLoweringCase;
  return defaultReplacements
    .reduce(
      replacer,
      Object.entries(replacements).reduce(replacer, string.trim())
    )
    .replace(/[^\w-]/g, "");
}
