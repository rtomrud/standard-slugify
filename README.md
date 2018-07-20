# standard-slugify

[![npm version](https://img.shields.io/npm/v/standard-slugify.svg?style=flat-square)](https://www.npmjs.com/package/standard-slugify)
[![Build Status](https://travis-ci.com/rtomrud/standard-slugify.svg?branch=master)](https://travis-ci.com/rtomrud/standard-slugify)

Converts a string into a slug safe for URIs and filenames

* Supports [US-ASCII](https://en.wikipedia.org/wiki/ASCII), [ISO-8859-1,2,3,4,5,7,9,10,13,14,15,16](https://en.wikipedia.org/wiki/ISO/IEC_8859), [MES-1](http://www.evertype.com/standards/iso10646/pdf/cwa13873.pdf) and [WGL4](https://en.wikipedia.org/wiki/Windows_Glyph_List_4), transliterating to US-ASCII
* Standards compliant; no arbitrary and surprising substitutions, but allows custom replacements
* Converts all white space and separators, e.g., HT, LF, VT, FF, CR, FS, GS, RS, US, SP, NEL, NBPS, LSEP, PSEP
* Converts all dash punctuation characters, e.g., HYPHEN, FIGURE DASH, EN DASH, EM DASH, HORIZONTAL BAR

## Installing

```bash
npm install standard-slugify
```

## API

### `standardSlugify(string, customReplacements)`

Returns a slugified version of the specified string, where non-alphanumeric characters are removed, separators are replaced with `-`, alphabetic characters are lowercased, and non-US-ASCII alphabetic characters are transliterated to US-ASCII. You can specify custom replacements by passing an object as the second argument.

The returned string is safe for use in URIs and filenames.

Supports all characters from US-ASCII, ISO-8859-1,2,3,4,5,7,9,10,13,14,15,16, MES-1 and WGL4. Non-supported characters are removed by default.

```js
import standardSlugify from "standard-slugify";

standardSlugify("What is this $ symbol?");
// ->
"what-is-this-symbol"
```

You can pass an object with custom replacements as the second argument:

```js
import standardSlugify from "standard-slugify";

standardSlugify("$ and ₿ raising, € falling", {
  $: "usd", // DOLLAR SIGN, United States of America
  "€": "eur", // EURO SIGN, European Monetary Union
  "₿": "xbt" // BITCOIN SIGN, Bitcoin
});
// ->
"usd-and-xbt-raising-eur-falling"
```

The keys of the custom replacements object must be one character long, but the values can have any amount of characters. That is, mappings are one-to-any.

## Details

* Letters are lowercased
* Characters are replaced with their associated custom replacement, if any, overriding the default replacement
* By default, characters are replaced as follows:
    * Letters from ISO-8859-1,2,3,4,5,7,9,10,13,14,15,16, MES-1 or WGL4 are transliterated:
        * Latin or Cyrillic letters are transliterated according to [ISO/IEC 7501-3](https://www.icao.int/publications/Documents/9303_p3_cons_en.pdf)
        * Greek letters are transliterated according to [ISO 843](https://en.wikipedia.org/wiki/ISO_843)
    * Characters with the [White_Space property](https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt), [Control Codes with semantics in Unicode (§ 23.1)](http://www.unicode.org/versions/Unicode11.0.0/ch23.pdf), and characters in the [Dash_Punctuation (Pd) General Category of Unicode](https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt), are converted to HYPHEN-MINUS (`-`)
    * LOW LINE (`_`) characters are kept as is
    * The rest of characters are removed
* Leading and trailing HYPHEN-MINUS (`-`) characters are removed, after applying the replacements

## License

[MIT](./LICENSE)
