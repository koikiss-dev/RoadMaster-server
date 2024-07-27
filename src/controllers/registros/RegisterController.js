import ControllerBaseModel from "../ControllerAbstract.js";
import { JoiError } from "../../utils/JoiError.js";
import { query } from "../../utils/query.js";
import { CreateRegisterShema } from "./dto/CreateRegister.js";
import { UpdateRegisterShema } from "./dto/UpdateRegister.js";

export class RegisterController extends ControllerBaseModel {
  /**
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @returns {Promise<Array>}
   */
  static async getRegisters(req, res) {
    try {
      const limit = req.query.limit || undefined;
      const sql = limit ? "CALL SEL_RANGO_REGISTROS(?)" : "CALL SEL_REGISTROS";
      const results = await query(sql, limit);

      res.status(200).json(results);
    } catch (error) {
      res.status(500).json({
        code: res.statusCode,
        message: "Error al obtener las Personas",
      });
    }
  }

  /**
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @returns {Promise<Array>}
   */
  static async getRegister(req, res) {
    try {
      const id = req.query.id;
      const sql = "CALL SEL_REGISTRO(?)";
      const results = await query(sql, [id]);

      res.status(200).json(results);
    } catch (error) {
      res.status(500).json({
        code: res.statusCode,
        message: "Error al obtener las Personas",
      });
    }
  }

  /**
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @returns {Promise<Array>}
   */
  static async createRegister(req, res) {
    const body = req.body;
    try {
      const { error, value } = CreateRegisterShema.validate(body);
      if (error) {
        return JoiError(error, res);
      }

      // extract values from the validated object
      const { PV_NOM_REGISTRO, PV_URL_REGISTRO, PI_COD_USUARIO } = value;

      const sqlCreationRegister = await query("CALL INS_REGISTRO(?,?,?)", [
        PV_NOM_REGISTRO,
        PV_URL_REGISTRO,
        PI_COD_USUARIO,
      ]);

      res.status(201).json(sqlCreationRegister);
    } catch (error) {
      res.status(500).json({
        code: res.statusCode,
        message: "Error al obtener las Personas",
      });
    }
  }

  /**
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @returns {Promise<Array>}
   */
  static async updateRegister(req, res) {
    const body = req.body;
    try {
      const { error, value } = UpdateRegisterShema.validate(body);
      if (error) {
        return JoiError(error, res);
      }

      // extract values from the validated object
      const {
        PI_COD_REGISTRO,
        PV_NOM_REGISTRO,
        PV_URL_REGISTRO,
        PI_COD_USUARIO,
      } = value;

      const sqlUpdateRegister = await query("CALL UPD_REGISTRO(?,?,?,?)", [
        PI_COD_REGISTRO,
        PV_NOM_REGISTRO,
        PV_URL_REGISTRO,
        PI_COD_USUARIO,
      ]);

      res.status(200).json(sqlUpdateRegister);
    } catch (error) {
      res.status(500).json({
        code: res.statusCode,
        message: "Error al obtener las Personas",
      });
    }
  }
}
