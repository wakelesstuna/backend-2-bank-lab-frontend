/**
 * Converts first letter to uppercase
 * @param {String} s
 * @returns s
 */
export const makeFirstLetterCapital = (s) => {
  return s.substring(0, 1).toUpperCase() + s.substring(1);
};
