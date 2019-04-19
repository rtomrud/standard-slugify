# standard-slugify

[![npm version](https://img.shields.io/npm/v/standard-slugify.svg?style=flat-square)](https://www.npmjs.com/package/standard-slugify)
[![Build Status](https://travis-ci.com/rtomrud/standard-slugify.svg?branch=master)](https://travis-ci.com/rtomrud/standard-slugify)

Converts a string into a slug safe for [URLs](https://tools.ietf.org/html/rfc3986) and filenames

* [Standards compliant replacements](#details); no arbitrary and surprising substitutions, but allows custom replacements
* Transliterates to [US-ASCII](https://en.wikipedia.org/wiki/ASCII) every letter from [ISO-8859-1,2,3,4,5,7,9,10,13,14,15,16](https://en.wikipedia.org/wiki/ISO/IEC_8859), [MES-1](http://www.evertype.com/standards/iso10646/pdf/cwa13873.pdf), and [WGL4](https://en.wikipedia.org/wiki/Windows_Glyph_List_4), i.e., every Latin, Greek, and Cyrillic letter actually used in keyboard layouts and fonts
* Converts all white space and separators, e.g., HT, LF, VT, FF, CR, FS, GS, RS, US, SP, NEL, NBPS, LSEP, PSEP
* Converts all dash punctuation characters, e.g., HYPHEN, FIGURE DASH, EN DASH, EM DASH, HORIZONTAL BAR

## Installing

```bash
npm install standard-slugify
```

## API

### `standardSlugify(string, { keepCase, replacements })`

Returns a slug of the given `string`, where white space, control codes that are separators, and hyphen and dash marks are converted to `-`, letters are lowercased, non-US-ASCII letters are transliterated to US-ASCII, `_` is kept, the rest of characters are removed, and leading and trailing `-` are removed.

By default, the resulting slug is in lowercase. To keep the original case of the given string, set the `keepCase` option to `true`.

You can specify custom replacements by passing an object that maps characters to strings as the `replacements` option. The custom replacements take precedence over the default replacements in case of collision.

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

standardSlugify("₿ raising, € falling", {
  replacements: {
    "€": "eur", // EURO SIGN
    "₿": "xbt" // BITCOIN SIGN
  }
});
// => "xbt-raising-eur-falling"
```

## Details

* Leading and trailing whitespace characters and line terminators are removed
* By default, characters are replaced as follows:
    * Letters from ISO-8859-1,2,3,4,5,7,9,10,13,14,15,16, MES-1 or WGL4 are transliterated:
        * Latin or Cyrillic letters are transliterated according to [ISO/IEC 7501-3](https://www.icao.int/publications/Documents/9303_p3_cons_en.pdf)
        * Greek letters are transliterated according to [ISO 843](https://en.wikipedia.org/wiki/ISO_843)
    * Characters with the [White_Space property](https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt), [Control Codes with semantics in Unicode (§ 23.1)](http://www.unicode.org/versions/Unicode11.0.0/ch23.pdf), and characters in the [Dash_Punctuation (Pd) General Category of Unicode](https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt), are converted to HYPHEN-MINUS (`-`)
    * LOW LINE (`_`) characters are kept as is
    * The rest of characters are removed
* When specified, characters are replaced with their respective mappings in the given custom `replacements`, if any
* Letters are lowercased by default, or kept as is if `keepCase` is `true`

## License

[MIT](./LICENSE)
