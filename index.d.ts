/**
 * Options for generating slugs.
 */
interface SlugifyOptions {
  /**
   * Flag indicating whether to keep the case of characters in the string (false by default).
   */
  keepCase?: boolean;
  /**
   * Custom replacements specified as an array of `[regexp, replacement]` pairs.
   */
  replacements?: Array<[RegExp, string]>;
}

/**
 * Returns a slug of the given `string`.
 * @param string The string to generate a slug from.
 * @param options Options for generating the slug.
 * @returns The generated slug.
 */
export default function standardSlugify(
  string?: string,
  options?: SlugifyOptions,
): string;
