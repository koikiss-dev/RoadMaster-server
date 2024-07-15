import { query } from "../../utils/query.js";
import { JoiError } from "../../utils/JoiError.js";
import ControllerBaseModel from "../ControllerAbstract.js";

/**
 * @class ImageController
 * @extends ControllerBaseModel
 */
class ImageController extends ControllerBaseModel {
  /**
   * Get all images with limit option
   * @static
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @returns {Promise<Array>}
   */
  static async getRegisters(req, res) {
    try {
      let sql;
      let results;
      const limit = req.query.limit;

      // if no limit is provided, return all vehicles
      if (!limit) {
        sql = "CALL SEL_IMAGENES";
        results = await query(sql);
        return res.json(results);
      }
      sql = "CALL SEL_RANGO_IMAGENES(?)";
      results = await query(sql, [limit]);

      res.json(results);
    } catch (error) {
      res.status(500).json({
        code: res.statusCode,
        message: "Error al obtener los vehiculos",
      });
    }
  }
  static async getRegister(req, res) {}
  static async createRegister(req, res) {}
  static async updateRegister(req, res) {}
}
export default ImageController;

/*
try {
      let sql;
      let results;
      const limit = req.query.limit;

      // if no limit is provided, return all vehicles
      if (!limit) {
        sql = "CALL SEL_IMAGENES";
        results = await query(sql);
        return res.json(results);
      }
      sql = "CALL SEL_RANGO_IMAGENES(?)";
      results = await query(sql, [limit]);

      res.json(results);
    } catch (error) {
      res.status(500).json({
        code: res.statusCode,
        message: "Error al obtener los vehiculos",
      });
    }
*/
