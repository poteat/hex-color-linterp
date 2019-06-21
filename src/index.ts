/**
 * Convert a number 0.. 255 to hex-encoded string of length 2
 * @param x Number to covert to hex
 * @example ```ts
 * dec2hex(255) // e.g. "FF"
 * ```
 */
const dec2hex = (x: number) => x.toString(16).padStart(2, "0");

/**
 * Convert a hex-encoded string to integer value
 * @param s Hex value to convert to integer
 * @example ```ts
 * hex2dec("FF") // e.g. 255
 * ```
 */
const hex2dec = (s: string) => parseInt(s, 16);

/**
 * Linearly interpolate between two numbers
 * @param x Range [0 .. 1], interpolates between min and max
 * @param min Number associated with x = 0, does not need to be actually smaller
 * @param max Number associated with x = 1
 * @example ```ts
 * linterp(0.5, 100, 200) // e.g. 150
 * ```
 */
const linterp = (x: number, min: number, max: number) =>
  (1 - x) * min + x * max;

/**
 * Convert hex string to 3-length array of numbers 0.. 255
 * @param h String to convert
 * @example ```ts
 * hex2color("FF0000") // e.g. [255, 0, 0]
 * ```
 */
const hex2color = (h: string) => h.match(/../g).map(hex2dec);

/**
 * Linearly interpolate between two hex-encoded colors
 * @param x Range between zero and one inclusive that interpolates between min and max
 * @param min Color associated with x = 0, does not need to be lower in any ordinal sense
 * @param max Color associated with x = 1
 * @example ```ts
 * hexColorLinterp(0.75, "FF0000", "00CC00");
 * ```
 */
export const hexColorLinterp = (x: number, min: string, max: string) => {
  let minVec = hex2color(min);
  let maxVec = hex2color(max);

  return minVec
    .map((minx, i) => dec2hex(Math.floor(linterp(x, minx, maxVec[i]))))
    .join("");
};
