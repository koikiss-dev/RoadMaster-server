import { createPersonShema } from "./dto/create_person.js";
import { query } from "../../utils/query.js";
import { updatePersonShema } from "./dto/update_person.js";
import { JoiError } from "../../utils/JoiError.js";
import ControllerBaseModel from "../ControllerAbstract.js";

/**
 * @class PersonController
 * @extends ControllerBaseModel
 */
class PersonController extends ControllerBaseModel {
  /**
   * Get all Person
   * @static
   * @memberof PersonController
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @returns {Promise<Array>}
   */
  static async getRegisters(req, res) {
    try {
      const limit = req.query.limit || undefined;
      const sql = limit ? "CALL SEL_RANGO_PERSONAS(?)" : "CALL SEL_PERSONAS";
      const results = await query(sql, limit);

      res.status(200).json({
        results,
      });
    } catch (error) {
      res.status(500).json({
        code: res.statusCode,
        message: "Error al obtener las Personas",
      });
    }
  }

  /**
   * Get one person by id
   * @static
   * @memberof PersonController
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @returns {Promise<Array>}
   */
  static async getRegister(req, res) {
    try {
      const id = req.query.id;
      const results = await query("CALL SEL_PERSONA(?)", [id]);

      return res.json({
        results,
      });
    } catch (error) {
      return res.status(500).json({
        code: res.statusCode,
        message: "Error al obtener los datos de la persona",
      });
    }
  }

  /**
   * Create a new person
   * @static
   * @memberof PersonController
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @returns {Promise<Array>}
   */
  static async createRegister(req, res) {
    const body = req.body;
    try {
      const { error, value } = createPersonShema.validate(body);
      if (error) {
        return JoiError(error, res);
      }

      // extract values from the validated object
      const {
        PV_DNI,
        PV_NOM_PRIMER_NOMBRE,
        PV_NOM_PRIMER_APELLIDO,
        PI_COD_TELEFONO,
        PI_COD_EMAIL,
        PI_COD_DIRECCION,
        PD_FEC_NACIMIENTO,
        PB_VAL_ESTADO_CIVIL,
        PB_SEX_PERSONA,
      } = value;

      const sqlPerson = "CALL INS_Persona(?, ?, ?, ?, ?, ?, ?, ?, ?)";

      const results = await query(sqlPerson, [
        PV_DNI,
        PV_NOM_PRIMER_NOMBRE,
        PV_NOM_PRIMER_APELLIDO,
        PB_VAL_ESTADO_CIVIL,
        PB_SEX_PERSONA,
        PD_FEC_NACIMIENTO,
        PI_COD_TELEFONO,
        PI_COD_EMAIL,
        PI_COD_DIRECCION,
      ]);
      res.status(201).json(results);
    } catch (error) {
      res.status(500).json({
        code: res.statusCode,
        message: error.message,
      });
    }
  }

  /**
   * Update a person
   * @static
   * @memberof PersonController
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @returns {Promise<Array>}
   */
  static async updateRegister(req, res) {
    const body = req.body;
    try {
      const { error, value } = updatePersonShema.validate(body);
      if (error) {
        return JoiError(error, res);
      }

      // extract values from the validated object
      const {
        PI_COD_PERSONA,
        PV_DNI,
        PV_NOM_PRIMER_NOMBRE,
        PV_NOM_PRIMER_APELLIDO,
        PI_COD_TELEFONO,
        PI_COD_EMAIL,
        PI_COD_DIRECCION,
        PD_FEC_NACIMIENTO,
        PB_VAL_ESTADO_CIVIL,
        PB_SEX_PERSONA,
      } = value;

      const sql = "CALL UPD_PERSONA(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
      const results = await query(sql, [
        PI_COD_PERSONA,
        PV_DNI,
        PV_NOM_PRIMER_NOMBRE,
        PV_NOM_PRIMER_APELLIDO,
        PB_VAL_ESTADO_CIVIL,
        PB_SEX_PERSONA,
        PD_FEC_NACIMIENTO,
        PI_COD_TELEFONO,
        PI_COD_EMAIL,
        PI_COD_DIRECCION,
      ]);
      res.status(200).json(results);
    } catch (error) {
      res.status(500).json({
        code: res.statusCode,
        message: error.message,
      });
    }
  }
}

export default PersonController;
