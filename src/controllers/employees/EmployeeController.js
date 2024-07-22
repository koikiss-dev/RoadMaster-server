import { createEmployeeShema } from "./dto/create_employees.js";
import { query } from "../../utils/query.js";
import { updateEmployeeShema } from "./dto/update_employees.js";
import { JoiError } from "../../utils/JoiError.js";
import ControllerBaseModel from "../ControllerAbstract.js";

/**
 * @class EmployeeController
 * @extends ControllerBaseModel
 */

class EmployeeController extends ControllerBaseModel {
  /**
   * Get all employees
   * @static
   * @memberof EmployeeController
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @returns {Promise<Array>}
   */

  static async getRegisters(req, res) {
    try {
      const limit = req.query.limit || undefined;
      const sql = limit ? "CALL SEL_RANGO_EMPLEADOS(?)" : "CALL SEL_EMPLEADOS";
      const results = await query(sql, limit);

      res.status(200).json({
        results,
      });
    } catch (error) {
      res.status(500).json({
        code: res.statusCode,
        message: "Error al obtener los vehiculos",
      });
    }
  }

  /**
   * Get one employee by id
   * @static
   * @memberof EmployeeController
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @returns {Promise<Array>}
   */

  static async getRegister(req, res) {
    try {
      const id = req.query.id;
      const results = await query("CALL SEL_EMPLEADO(?)", [id]);

      return res.json({
        results,
      });
    } catch (error) {
      return res.status(500).json({
        code: res.statusCode,
        message: "Error al obtener el vehiculo",
      });
    }
  }

  /**
   * Create a new employee
   * @static
   * @memberof EmployeeController
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @returns {Promise<Array>}
   */

  static async createRegister(req, res) {
    const body = req.body;
    try {
      const { error, value } = createEmployeeShema.validate(body);
      if (error) {
        return JoiError(error, res);
      }

      // extract values from the validated object
      const { PB_VAL_ROL, PI_COD_PERSONA } = value;

      const sqlEmployee = "CALL INS_EMPLEADO(?, ?)";

      const resultsEmployee = await query(sqlEmployee, [
        PB_VAL_ROL,
        PI_COD_PERSONA,
      ]);
      res.status(201).json({
        code: res.statusCode,
        message: "Empleado creado exitosamente",
        resultsEmployee,
      });
    } catch (error) {
      res.status(500).json({
        code: res.statusCode,
        message: error.message,
      });
    }
  }

  /**
   * Update a employee
   * @static
   * @memberof EmployeeController
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @returns {Promise<Array>}
   */
  static async updateRegister(req, res) {
    const body = req.body;
    try {
      const { error, value } = updateEmployeeShema.validate(body);
      if (error) {
        return JoiError(error, res);
      }

      // extract values from the validated object
      const { PI_COD_EMPLEADO, PB_VAL_ROL, PI_COD_PERSONA } = value;

      const sql = "CALL UPD_EMPLEADO(?, ?, ?)";
      const results = await query(sql, [
        PI_COD_EMPLEADO,
        PB_VAL_ROL,
        PI_COD_PERSONA,
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

export default EmployeeController;
