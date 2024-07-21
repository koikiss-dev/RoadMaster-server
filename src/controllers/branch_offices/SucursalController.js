import { createBranch_OfficeShema } from "./dto/create_sucursal.js";
import { query } from "../../utils/query.js";
import { updateBranch_OfficeShema } from "./dto/update_sucursal.js";
import { JoiError } from "../../utils/JoiError.js";
import ControllerBaseModel from "../ControllerAbstract.js";

/**
 * @class SucursalController
 * @extends ControllerBaseModel
 */
class SucursalController extends ControllerBaseModel {
  /**
   * Get all sucursales
   * @static
   * @memberof SucursalController
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @returns {Promise<Array>}
   */
  static async getRegisters(req, res) {
    try {
      const limit = req.query.limit || undefined;
      const sql = limit ? "CALL SEL_SUCURSALES(?)" : "CALL SEL_SUCURSALES";
      const results = await query(sql, limit);
      results.map(({ COD_SUCURSAL }) => COD_SUCURSAL);

      res.status(200).json({
        results,
      });
    } catch (error) {
      res.status(500).json({
        code: res.statusCode,
        message: "Error al obtener los datos de la sucursal",
      });
    }
  }

  /**
   * Get one sucursal by id
   * @static
   * @memberof SucursalController
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @returns {Promise<Array>}
   */
  static async getRegister(req, res) {
    try {
      const id = req.query.id;
      const results = await query("CALL SEL_SUCURSAL(?)", [id]);
      return res.json(results);

    } catch (error) {
      return res.status(500).json({
        code: res.statusCode,
        message: "Error al obtener la informacion de la sucursal",
      });
    }
  }

  /**
   * Create a new sucursal
   * @static
   * @memberof SucursalController
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @returns {Promise<Array>}
   */
  static async createRegister(req, res) {
    const body = req.body;
    try {
      const { error, value } = createBranch_OfficeShema.validate(body);
      if (error) {
        return JoiError(error, res);
      }

      const { PV_NOM_SUCURSAL, PI_COD_EMPLEADO, PI_COD_UBICACION } = value;

      const sql = "CALL INS_SUCURSAL(?, ?, ?)";
      const results = await query(sqlBranch_Office, [PV_NOM_SUCURSAL, PI_COD_EMPLEADO, PI_COD_UBICACION]);

      res.status(201).json({
        code: res.statusCode,
        message: "Sucursal agregada exitosamente",
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
   * Update a sucursal
   * @static
   * @memberof SucursalController
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @returns {Promise<Array>}
   */
  static async updateRegister(req, res) {
    const body = req.body;
    try {
      const { error, value } = updateBranch_OfficeShema.validate(body);
      if (error) {
        return JoiError(error, res);
      }

      const { PI_COD_SUCURSAL, PV_NOM_SUCURSAL, PI_COD_EMPLEADO, PI_COD_UBICACION } = value;
      const sql = "CALL UPD_SUCURSAL(?, ?, ?, ?)";
      const results = await query(sql, [PI_COD_SUCURSAL, PV_NOM_SUCURSAL, PI_COD_EMPLEADO, PI_COD_UBICACION]);

      res.status(200).json(results);
    } catch (error) {
      res.status(500).json({
        code: res.statusCode,
        message: error.message,
      });
    }
  }
}
export default SucursalController;