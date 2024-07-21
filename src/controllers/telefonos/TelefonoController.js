import { createTelefonoShema } from "./dto/create_telefonos.js";
import { query } from "../../utils/query.js";
import { updateTelefonoShema } from "./dto/update_telefono.js";
import { JoiError } from "../../utils/JoiError.js";
import ControllerBaseModel from "../ControllerAbstract.js";

/**
 * @class TelefonoController
 * @extends ControllerBaseModel
 */
class TelefonoController extends ControllerBaseModel {
  /**
   * Get all telefonos
   * @static
   * @memberof TelefonoController
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @returns {Promise<Array>}
   */
  static async getRegisters(req, res) {
    try {
      const limit = req.query.limit || undefined;
      const sql = limit ? "CALL SEL_TELEFONOS(?)" : "CALL SEL_TELEFONOS";
      const results = await query(sql, limit ? [limit] : []);
      results.map(({ COD_TELEFONO }) => COD_TELEFONO);
  
      res.status(200).json({
        results,
      });
    } catch (error) {
      res.status(500).json({
        code: res.statusCode,
        message: "Error al obtener los números de teléfonos",
      });
    }
  }
  

  /**
   * Get one telefono by id
   * @static
   * @memberof TelefonoController
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @returns {Promise<Array>}
   */
  static async getRegister(req, res) {
    try {
      const id = req.params.id;
      const results = await query("CALL SEL_TELEFONOS(?)", [id]);
      return res.json({
        results,
      });
    } catch (error) {
      return res.status(500).json({
        code: res.statusCode,
        message: "Error al obtener el teléfono",
      });
    }
  }

  /**
   * Create a new telefono
   * @static
   * @memberof TelefonoController
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @returns {Promise<Array>}
   */
  static async createRegister(req, res) {
    const body = req.body;
    try {
      const { error, value } = createTelefonoShema.validate(body);
      if (error) {
        return JoiError(error, res);
      }

      const { PI_NUM_TELEFONO } = value;

      const sql = "CALL INS_TELEFONO(?)";
      const results = await query(sql, [PI_NUM_TELEFONO]);

      res.status(201).json({
        code: res.statusCode,
        message: "Teléfono agregado exitosamente",
        results,
      });
    } catch (error) {
      res.status(500).json({
        code: res.statusCode,
        message: error.message,
      });
    }
  }

  /**
   * Update a telefono
   * @static
   * @memberof TelefonoController
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @returns {Promise<Array>}
   */
  static async updateRegister(req, res) {
    const body = req.body;
    try {
      const { error, value } = updateTelefonoShema.validate(body);
      if (error) {
        return JoiError(error, res);
      }

      const { PI_COD_TELEFONO, PI_NUM_TELEFONO } = value;
      const sql = "CALL UPD_TELEFONO(?, ?)";
      const results = await query(sql, [PI_COD_TELEFONO, PI_NUM_TELEFONO]);

      res.status(200).json(results);
    } catch (error) {
      res.status(500).json({
        code: res.statusCode,
        message: error.message,
      });
    }
  }
}

export default TelefonoController;
