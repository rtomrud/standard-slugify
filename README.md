# standard-slugify

[![build status](https://github.com/rtomrud/standard-slugify/workflows/build/badge.svg)](https://github.com/rtomrud/standard-slugify/actions?query=branch%3Amaster+workflow%3Abuild)
[![npm version](https://badgen.net/npm/v/standard-slugify)](https://www.npmjs.com/package/standard-slugify)
[![bundle size](https://badgen.net/bundlephobia/minzip/standard-slugify)](https://bundlephobia.com/result?p=standard-slugify)

[Converts](#details) a string into a slug safe for [URLs](https://tools.ietf.org/html/rfc3986) and filenames

## Installing

```bash
npm install standard-slugify
```

## API

### `standardSlugify(string, { keepCase, replacements })`

Returns a slug of the given `string`. Leading and trailing white space is removed; white space, control codes that are separators, and hyphen and dash marks are converted to `-`; uppercase letters are lowercased; non-US-ASCII letters are transliterated to US-ASCII; `_` is kept as is; and the rest of characters are removed.

By default, the resulting slug is in lowercase. To keep the original case of the given `string`, set the `keepCase` option to `true`.

```js
import standardSlugify from "standard-slugify";

standardSlugify("What is this $ symbol?");
// => "what-is-this-symbol"

standardSlugify("toString()", { keepCase: false });
// => "tostring"

standardSlugify("toString()", { keepCase: true });
// => "toString"

standardSlugify("Æthelflæd", { keepCase: true });
// => "Aethelflaed"

standardSlugify("ÆTHELFLÆD", { keepCase: true });
// => "AETHELFLAED"
```

To specify custom replacements, pass as the `replacements` option an object where each key matches the characters to be replaced and the value is their replacement. The keys can be regular expressions.

```js
import standardSlugify from "standard-slugify";

standardSlugify("₿ raising, € falling", {
  replacements: {
    "€": "eur", // EURO SIGN
    "₿": "xbt" // BITCOIN SIGN
  }
});
// => "xbt-raising-eur-falling"

// Note that replacements can be regular expressions, which is needed for more
// complex transliteration rules, i.e., matching the start of a word
standardSlugify("Єгипет, Їжак, Йорданія, Югославія, Ямайка", {
  // Transliterate Ukrainian according to ISO/IEC 7501-3
  replacements: {
    "(?<=^|\\P{L})Є": "YE", // if Ukrainian first character (instead of IO)
    "(?<=^|\\P{L})Ї": "YI", // if Ukrainian first character (instead of IE)
    Г: "H", // if Ukrainian (instead of G)
    И: "Y", // if Ukrainian (instead of I)
    "(?<=^|\\P{L})Й": "Y", // if Ukrainian first character (instead of I)
    "(?<=^|\\P{L})Ю": "YU", // if Ukrainian first character (instead of IU)
    "(?<=^|\\P{L})Я": "YA" // if Ukrainian first character (instead of YA)
  }
});
// => "yehypet-yizhak-yordaniia-yuhoslaviia-yamaika"
```

## Details

The replacements used to generate the slug try to be unsurprising and predictable by following these rules and standards (as applicable):

- Leading and trailing whitespace characters and line terminators are removed (trimmed)
- If any custom `replacements` are given, they are applied before the default replacements
- By default, characters are replaced as follows:
  - Letters from [ISO-8859-1,2,3,4,5,7,9,10,13,14,15,16](https://en.wikipedia.org/wiki/ISO/IEC_8859), [MES-1](http://www.evertype.com/standards/iso10646/pdf/cwa13873.pdf) and [WGL4](https://en.wikipedia.org/wiki/Windows_Glyph_List_4) (every Latin, Greek and Cyrillic letter actually used in keyboard layouts or fonts) are [transliterated](https://en.wikipedia.org/wiki/Transliteration) to [US-ASCII](https://en.wikipedia.org/wiki/ASCII):
    - Latin or Cyrillic letters are transliterated according to [ISO/IEC 7501-3](https://www.icao.int/publications/Documents/9303_p3_cons_en.pdf)
    - Greek letters are transliterated according to [ISO 843](https://en.wikipedia.org/wiki/ISO_843)
  - [Characters with the White_Space property or in the Dash_Punctuation (Pd) General Category of Unicode](https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt) and [Control Codes with semantics in Unicode (§ 23.1), such as HT (`\t`) and LF (`\n`)](https://www.unicode.org/versions/Unicode13.0.0/ch23.pdf), are converted to HYPHEN-MINUS (`-`)
  - LOW LINE (`_`) characters are kept as is
  - Other characters that are neither a number, an ASCII letter, LOW LINE (`_`), or HYPHEN-MINUS (`-`) are removed
- Letters are lowercased, unless `keepCase` is `true`

## License

[MIT](./LICENSE)
