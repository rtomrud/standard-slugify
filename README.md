# standard-slugify

Converts a string into a [slug](#details) safe for [URLs](https://tools.ietf.org/html/rfc3986) and filenames. Supports Latin, Greek and Cyrillic scripts.

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

To specify custom replacements, pass as the `replacements` option an array of `[regexp, replacement]` pairs.

```js
import standardSlugify from "standard-slugify";

standardSlugify("₿ raising, € falling", {
  replacements: [
    ["€", "eur"], // EURO SIGN
    ["₿", "btc"], // BITCOIN SIGN
  ],
});
// => "btc-raising-eur-falling"

// Replacements can be matched with regular expressions,
// e.g., transliterating Ukrainian according to ISO/IEC 7501-3
standardSlugify("Єгипет, Їжак, Йорданія, Югославія, Ямайка", {
  replacements: [
    [/(?<=^|\P{L})Є/, "YE"], // Є as the first letter of a word
    [/(?<=^|\P{L})Ї/, "YI"], // Ї as the first letter of a word
    ["Г", "H"], // Г in any position
    ["И", "Y"], // И in any position
    [/(?<=^|\P{L})Й/, "Y"], // Й as the first letter of a word
    [/(?<=^|\P{L})Ю/, "YU"], // Ю as the first letter of a word
    [/(?<=^|\P{L})Я/, "YA"], // Я as the first letter of a word
  ],
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
