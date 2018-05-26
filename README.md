# standard-slugify

[![npm version](https://img.shields.io/npm/v/standard-slugify.svg?style=flat-square)](https://www.npmjs.com/package/standard-slugify)
[![Build Status](https://img.shields.io/travis/rtomrud/standard-slugify/master.svg?style=flat-square)](https://travis-ci.org/rtomrud/standard-slugify)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Converts a string into a slug safe for URIs or filenames

* Supports [US-ASCII](https://en.wikipedia.org/wiki/ASCII), [ISO-8859-1,2,3,4,5,7,9,10,13,14,15,16](https://en.wikipedia.org/wiki/ISO/IEC_8859), [MES-1](http://www.evertype.com/standards/iso10646/pdf/cwa13873.pdf) and [WGL4](https://en.wikipedia.org/wiki/Windows_Glyph_List_4), transliterating to US-ASCII
* Standards compliant; no arbitrary and surprising substitutions, but allows [custom replacements](#custom-replacements)
* Handles all separators and joiners (e.g., NO-BREAK SPACE, ZERO WIDTH SPACE, NON-BREAKING HYPHEN, EM DASH or LINE SEPARATOR) instead of only the usual `\s`, `-` and `_`
* Converts all control characters that have semantics defined in [Unicode](http://www.unicode.org/) (e.g. CHARACTER TABULATION, LINE FEED, FORM FEED, CARRIAGE RETURN or NEXT LINE)

## Installing

```bash
npm install --save standard-slugify
```

## Using

```js
import slugify from "standard-slugify";

slugify("What is this $ symbol?"); // -> "what-is-this-symbol"
```

### Custom replacements

You can pass an object with custom replacements as the second argument:

```js
import slugify from "standard-slugify";

slugify("$ and ₿ raising, € falling", {
  $: "usd", // DOLLAR SIGN, United States of America
  "€": "eur", // EURO SIGN, European Monetary Union
  "₿": "xbt" // BITCOIN SIGN, Bitcoin
});
// -> "usd-and-xbt-raising-eur-falling"
```

The keys of the custom replacements object must be one character long, but the values can have any amount of characters. That is, mappings are one-to-any.

## What it does

* Converts uppercase characters to lowercase
* Converts all separators to `-` (HYPHEN-MINUS) and all joiners to `_` (LOW LINE), respectively, including the [C0 Controls and ASCII Punctuation](https://www.unicode.org/charts/PDF/U0000.pdf), [C1 Controls and Latin-1 Punctuation](https://www.unicode.org/charts/PDF/U0080.pdf), and [General Punctuation](https://www.unicode.org/charts/PDF/U2000.pdf) subsets of Unicode
* Merges multiple sequential separators (e.g., `--`) into a single `-`
* Merges multiple sequiential joiners (e.g., `__`) into a single `_`
* Removes leading and trailing whitespace, separators, and joiners
* Removes non-alphanumeric characters other than `-` and `_`
* Transliterates to US-ASCII the non-US-ASCII alphabetic characters included in the subsets of Unicode [Latin-1 Supplement](https://www.unicode.org/charts/PDF/U0080.pdf), [Latin Extended-A](https://www.unicode.org/charts/PDF/U0100.pdf), [Latin Extended-B](https://www.unicode.org/charts/PDF/U0180.pdf), [Greek and Coptic](https://www.unicode.org/charts/PDF/U0370.pdf), [Cyrillic](https://www.unicode.org/charts/PDF/U0400.pdf), [Latin Extended Additional](https://www.unicode.org/charts/PDF/U1E00.pdf) and [Alphabetic Presentation Forms](https://www.unicode.org/charts/PDF/UFB00.pdf)  that are also in ISO-8859-1,2,3,4,5,7,9,10,13,14,15,16, MES-1 or WGL4, transliterating according to [ISO/IEC 7501-3](https://www.icao.int/publications/Documents/9303_p3_cons_en.pdf) (Latin and Cyrillic) and [ISO 843](https://en.wikipedia.org/wiki/ISO_843) (Greek)
* Allows specifying custom replacements as its second argument, which override the default replacement in case of collision, and only allow matching single characters

## License

[MIT](./LICENSE)
