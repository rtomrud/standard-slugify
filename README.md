# standard-slugify

[![build status](https://github.com/rtomrud/standard-slugify/workflows/build/badge.svg)](https://github.com/rtomrud/standard-slugify/actions?query=branch%3Amaster+workflow%3Abuild)
[![npm version](https://badgen.net/npm/v/standard-slugify)](https://www.npmjs.com/package/standard-slugify)
[![bundle size](https://badgen.net/bundlephobia/minzip/standard-slugify)](https://bundlephobia.com/result?p=standard-slugify)

Converts a string into a [slug](#details) safe for [URLs](https://tools.ietf.org/html/rfc3986) and filenames

## Installing

```bash
npm install standard-slugify
```

## API

### `standardSlugify(string, { keepCase, replacements })`

Returns a slug of the given `string`.

The slug is in lowercase, unless the `keepCase` option is set to `true`.

```js
import standardSlugify from "standard-slugify";

standardSlugify("Where is your résumé?");
// => "where-is-your-resume"

standardSlugify("toString()", { keepCase: false });
// => "tostring"

standardSlugify("toString()", { keepCase: true });
// => "toString"

standardSlugify("Æthelflæd", { keepCase: true });
// => "Aethelflaed"

standardSlugify("ÆTHELFLÆD", { keepCase: true });
// => "AETHELFLAED"
```

To specify custom replacements, pass as the `replacements` option an object where each key matches the characters to be replaced and the value is their replacement. The keys may be regular expressions.

```js
import standardSlugify from "standard-slugify";

standardSlugify("₿ raising, € falling", {
  replacements: {
    "€": "eur", // EURO SIGN
    "₿": "xbt" // BITCOIN SIGN
  }
});
// => "xbt-raising-eur-falling"

// Note that replacements can be regular expressions, which is useful for
// complex transliteration rules, i.e., matching the start of a word
standardSlugify("Єгипет, Їжак, Йорданія, Югославія, Ямайка", {
  // Transliterate Ukrainian according to ISO/IEC 7501-3
  replacements: {
    "(?<=^|\\P{L})Є": "YE", // Є as the first character
    "(?<=^|\\P{L})Ї": "YI", // Ї as the first character
    Г: "H",
    И: "Y",
    "(?<=^|\\P{L})Й": "Y", // Й as the first character
    "(?<=^|\\P{L})Ю": "YU", // Ю as the first character
    "(?<=^|\\P{L})Я": "YA", // Я as the first character
  },
});
// => "yehypet-yizhak-yordaniia-yuhoslaviia-yamaika"
```

## Details

The slug is created by replacing characters according to the following rules and standards:

1. If any custom `replacements` are given, they are applied before the default replacements
2. Letters from [ISO-8859-1,2,3,4,5,7,9,10,13,14,15,16](https://en.wikipedia.org/wiki/ISO/IEC_8859), [MES-1](http://www.evertype.com/standards/iso10646/pdf/cwa13873.pdf) and [WGL4](https://en.wikipedia.org/wiki/Windows_Glyph_List_4) (every Latin, Greek and Cyrillic letter actually used in keyboard layouts or fonts) are [transliterated](https://en.wikipedia.org/wiki/Transliteration) to [ASCII](https://en.wikipedia.org/wiki/ASCII):
   - Latin or Cyrillic letters are transliterated according to [ISO/IEC 7501-3](https://www.icao.int/publications/Documents/9303_p3_cons_en.pdf)
   - Greek letters are transliterated according to [ISO 843](https://en.wikipedia.org/wiki/ISO_843)
3. Letters are lowercased, unless the `keepCase` option is set to `true`
4. [Characters with the White_Space property or in the Dash_Punctuation (Pd) General Category of Unicode](https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt) and [Control Codes with semantics in Unicode (§ 23.1), such as HT (`\t`) and LF (`\n`)](https://www.unicode.org/versions/Unicode13.0.0/ch23.pdf), are converted to [HYPHEN-MINUS](https://en.wikipedia.org/wiki/Hyphen-minus) (`-`)
5. Characters than are not an ASCII letter (`[A-Za-z]`), a number (`[0-9]`), a LOWLINE (`_`) or a HYPHEN-MINUS (`-`) are removed
6. Leading, trailing and duplicate HYPHEN-MINUS (`-`) characters are removed

## License

[MIT](./LICENSE)
