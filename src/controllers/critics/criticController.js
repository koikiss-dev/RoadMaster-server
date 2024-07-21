import { createCriticShema } from "./dto/create_critic.js";
import { query } from "../../utils/query.js";
import { updateCriticShema } from "./dto/update_critic.js";
import { JoiError } from "../../utils/JoiError.js";
import ControllerBaseMode1 from "../ControllerAbstract.js";

class criticController extends ControllerBaseMode1 {
  static async getRegisters(req, res) {
    try {
      const limit = req.query.limit || undefined;
      const sql = limit ? "CALL SEL_RANGO_CRITICAS(?)" : "CALL SEL_CRITICAS";
      const results = await query(sql, limit);

      res.status(200).json(results);
    } catch (error) {
      res.status(500).json({
        code: res.statusCode,
        message: "Error al Obtener las Criticas",
      });
    }
  }

  static async getRegister(req, res) {
    try {
      const id = req.query.id;
      const results = await query("CALL SEL_CRITICA(?)", [id]);

      return res.json(results);
    } catch (error) {
      return res.status(500).json({
        code: res.statusCode,
        message: "Error al obtener la Critica",
      });
    }
  }

  static async createRegister(req, res) {
    const body = req.body;
    try {
      const { error, value } = createCriticShema.validate(body);
      if (error) {
        return JoiError(error, res);
      }

      // extract values from the validated object
      const { PV_DETALLES, PI_CAN_ESTRELLAS, PI_COD_VEHICULO } = value;

      const sqlCritic = "CALL INS_CRITICA(?, ?, ?)";

      const results = await query(sqlCritic, [
        PV_DETALLES,
        PI_CAN_ESTRELLAS,
        PI_COD_VEHICULO,
      ]);
      res.status(201).json(results);
    } catch (error) {
      res.status(500).json({
        code: res.statusCode,
        message: error.message,
      });
    }
  }

  static async updateRegister(req, res) {
    const body = req.body;
    try {
      const { error, value } = updateCriticShema.validate(body);
      if (error) {
        return JoiError(error, res);
      }

      // extract values from the validated object
      const { PI_COD_CRITICA, PV_DETALLES, PI_CAN_ESTRELLAS, PI_COD_VEHICULO } =
        value;

      const sql = "CALL UPD_CRITICA(?, ?, ?, ?)";
      const results = await query(sql, [
        PI_COD_CRITICA,
        PV_DETALLES,
        PI_CAN_ESTRELLAS,
        PI_COD_VEHICULO,
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

export default criticController;
