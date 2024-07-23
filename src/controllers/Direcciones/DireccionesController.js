import { CreateDireccionesShema } from "./dto/CreateDirecciones.js";
import { UpdateDireccionesShema } from "./dto/UpdateDirecciones.js";
import { query } from "../../utils/query.js";
import { JoiError } from "../../utils/JoiError.js";
import ControllerBaseModel from "../ControllerAbstract.js";

/**
 * @class DireccionesController
 * @extends ControllerBaseModel
 */
class DireccionesController extends ControllerBaseModel {
  /**
   * Get all Direcciones
   * @static
   * @memberof DireccionesController
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @returns {Promise<Array>}
   */
  static async getRegisters(req, res) {
    try {
      const limit = req.query.limit || undefined;
      const sql = limit
        ? "CALL SEL_RANGO_DIRECCIONES(?)"
        : "CALL SEL_DIRECCIONES";
      const results = await query(sql, limit);
      res.status(200).json(results);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        code: res.statusCode,
        message: "Error al obtener las direcciones",
      });
    }
  }

  /**
   * Get one address by id
   * @static
   * @memberof DireccionesController
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @returns {Promise<Array>}
   */
  static async getRegister(req, res) {
    try {
      const id = req.query.id;
      const results = await query("CALL SEL_DIRECCION(?)", [id]);
      res.status(200).json(results);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        code: res.statusCode,
        message: "Error al obtener la dirección",
      });
    }
  }

  /**
   * Create a new address
   * @static
   * @memberof DireccionesController
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @returns {Promise<Array>}
   */
  static async createRegister(req, res) {
    const body = req.body;
    try {
      const { error, value } = CreateDireccionesShema.validate(body);
      if (error) {
        return JoiError(error, res);
      }

      const { PV_DES_DIRECCION } = value;
      const sql = "CALL INS_DIRECCIONES(?)";
      const results = await query(sql, [PV_DES_DIRECCION]);

      res.status(201).json(results);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        code: res.statusCode,
        message: error.message,
      });
    }
  }

  /**
   * Update an address
   * @static
   * @memberof DireccionesController
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @returns {Promise<Array>}
   */
  static async updateRegister(req, res) {
    const body = req.body;
    try {
      const { error, value } = UpdateDireccionesShema.validate(body);
      if (error) {
        return JoiError(error, res);
      }

      const { PI_COD_DIRECCION, PV_DES_DIRECCION } = value;
      const sql = "CALL UPD_DIRECCIONES(?, ?)";
      const results = await query(sql, [PI_COD_DIRECCION, PV_DES_DIRECCION]);

      res.status(200).json(results);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        code: res.statusCode,
        message: error.message,
      });
    }
  }
}

export default DireccionesController;
