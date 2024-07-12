import connection from "../db/connect.js";
import { CheckEmptyRows } from "./ChekEmptyRows.js";

/**
 * Executes an SQL query and returns the result after checking for empty rows.
 *
 * @param {string} sql - The SQL query to be executed.
 * @param {Array} [values] values - The values to be used in the query.
 * @return {Promise<Array>} A promise that resolves to an array of rows from the query result.
 * If the result is empty, an empty array is returned.
 */
export async function query(sql, values) {
  const [result] = await connection.query(sql, values);
  return CheckEmptyRows(result[0]);
}
