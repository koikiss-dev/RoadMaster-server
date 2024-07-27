/**
 * Checks if the input rows are empty and returns an empty array if so.
 *
 * @param {string} rows - The input rows to check.
 * @return {Array<string>} Returns an empty array if the input rows are falsy, otherwise returns the input rows.
 */
export function CheckEmptyRows(rows) {
  if (!rows) {
    return [
      {
        mensaje: "No se econtro informacion",
      },
    ];
  }
  return rows;
}
