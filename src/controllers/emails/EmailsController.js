import { CreateEmailShema } from "./dto/CreateEmail.js";
import { UpdateEmailShema } from "./dto/UpdateEmail.js";
import { query } from "../../utils/query.js";
import { JoiError } from "../../utils/JoiError.js";
import ControllerBaseModel from "../ControllerAbstract.js";

/**
 * @class EmailController
 * @extends ControllerBaseModel
 */
class EmailController extends ControllerBaseModel {
  /**
   * Get all emails
   * @static
   * @memberof EmailController
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @returns {Promise<Array>}
   */
  static async getRegisters(req, res) {
    try {
      const limit = req.query.limit || undefined;
      const sql = limit ? "CALL SEL_RANGO_EMAILS(?)" : "CALL SEL_EMAILS";
      const results = await query(sql, limit);

      res.status(200).json(results);
    } catch (error) {
      res.status(500).json({
        code: res.statusCode,
        message: "Error al obtener los emails",
      });
    }
  }

  /**
   * Get one email by id
   * @static
   * @memberof EmailController
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @returns {Promise<Array>}
   */
  static async getRegister(req, res) {
    try {
      const id = req.query.id;
      const results = await query("CALL SEL_EMAIL(?)", [id]);

      return res.json(results);
    } catch (error) {
      return res.status(500).json({
        code: res.statusCode,
        message: "Error al obtener los datosl email",
      });
    }
  }

  /**
   * Create a new email
   * @static
   * @memberof EmailController
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @returns {Promise<Array>}
   */
  static async createRegister(req, res) {
    const body = req.body;
    try {
      const { error, value } = CreateEmailShema.validate(body);
      if (error) {
        return JoiError(error, res);
      }

      // extract values from the validated object
      const { PV_VAL_EMAIL } = value;

      const sqlPerson = "CALL INS_EMAIL(?)";

      const results = await query(sqlPerson, [PV_VAL_EMAIL]);
      res.status(201).json(results);
    } catch (error) {
      res.status(500).json({
        code: res.statusCode,
        message: error.message,
      });
    }
  }

  /**
   * Update an email
   * @static
   * @memberof EmailController
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @returns {Promise<Array>}
   */
  static async updateRegister(req, res) {
    const body = req.body;
    try {
      const { error, value } = UpdateEmailShema.validate(body);
      if (error) {
        return JoiError(error, res);
      }

      // extract values from the validated object
      const { PI_COD_EMAIL, PV_VAL_EMAIL } = value;

      const sql = "CALL UPD_EMAIL(?, ?)";
      const results = await query(sql, [PI_COD_EMAIL, PV_VAL_EMAIL]);
      res.status(200).json(results);
    } catch (error) {
      res.status(500).json({
        code: res.statusCode,
        message: error.message,
      });
    }
  }
}

export default EmailController;
