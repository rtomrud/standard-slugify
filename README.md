# standard-slugify

[![npm version](https://img.shields.io/npm/v/standard-slugify.svg?style=flat-square)](https://www.npmjs.com/package/standard-slugify)
[![Build Status](https://travis-ci.com/rtomrud/standard-slugify.svg?branch=master)](https://travis-ci.com/rtomrud/standard-slugify)

Converts a string into a slug safe for URIs and filenames

* Supports [US-ASCII](https://en.wikipedia.org/wiki/ASCII), [ISO-8859-1,2,3,4,5,7,9,10,13,14,15,16](https://en.wikipedia.org/wiki/ISO/IEC_8859), [MES-1](http://www.evertype.com/standards/iso10646/pdf/cwa13873.pdf) and [WGL4](https://en.wikipedia.org/wiki/Windows_Glyph_List_4), transliterating to US-ASCII
* Standards compliant; no arbitrary and surprising substitutions, but allows custom replacements
* Handles all white space characters (e.g., NO-BREAK SPACE, EM SPACE, FIGURE SPACE, PUNCTUATION SPACE, THIN SPACE, LINE SEPARATOR or PARAGRAPH SEPARATOR) instead of just SPACE
* Converts all control characters that have semantics defined in [Unicode](http://www.unicode.org/) (e.g. CHARACTER TABULATION, LINE FEED, LINE TABULATION, FORM FEED, CARRIAGE RETURN, NEXT LINE or INFORMATION SEPARATOR ONE)

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

* Converts uppercase characters to lowercase
* Converts all Unicode characters with the White_Space property to `-` (HYPHEN-MINUS)
* Converts all control characters with semantics in Unicode to `-` (HYPHEN-MINUS)
* Removes leading and trailing separators, e.g., `-` (HYPHEN-MINUS) or ` ` (SPACE)
* Removes non-alphanumeric characters other than `-` (HYPHEN-MINUS) and `_` (LOW LINE)
* Transliterates to US-ASCII the non-US-ASCII alphabetic characters included in the subsets of Unicode [Latin-1 Supplement](https://www.unicode.org/charts/PDF/U0080.pdf), [Latin Extended-A](https://www.unicode.org/charts/PDF/U0100.pdf), [Latin Extended-B](https://www.unicode.org/charts/PDF/U0180.pdf), [Greek and Coptic](https://www.unicode.org/charts/PDF/U0370.pdf), [Cyrillic](https://www.unicode.org/charts/PDF/U0400.pdf), [Latin Extended Additional](https://www.unicode.org/charts/PDF/U1E00.pdf) and [Alphabetic Presentation Forms](https://www.unicode.org/charts/PDF/UFB00.pdf)  that are also in ISO-8859-1,2,3,4,5,7,9,10,13,14,15,16, MES-1 or WGL4, transliterating according to [ISO/IEC 7501-3](https://www.icao.int/publications/Documents/9303_p3_cons_en.pdf) (Latin and Cyrillic) and [ISO 843](https://en.wikipedia.org/wiki/ISO_843) (Greek)
* Allows specifying custom replacements, which override the default replacement in case of collision, and allow replacing one-to-any characters

## License

[MIT](./LICENSE)
