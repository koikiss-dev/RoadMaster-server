import { createUserShema } from "./dto/create_user.js";
import { query } from "../../utils/query.js";
import { updateUserShema } from "./dto/update_user.js";
import { JoiError } from "../../utils/JoiError.js";
import ControllerBaseMode1 from "../ControllerAbstract.js";

class userController extends ControllerBaseMode1 {
  static async getRegisters(req, res) {
    try {
      const limit = req.query.limit || undefined;
      const sql = limit ? "CALL SEL_RANGO_USUARIOS(?)" : "CALL SEL_USUARIOS";
      const results = await query(sql, limit);

      res.status(200).json(results);
    } catch (error) {
      res.status(500).json({
        code: res.statusCode,
        message: "Error al Obtener los Usuarios",
      });
    }
  }

  static async getRegister(req, res) {
    try {
      const id = req.query.id;
      const results = await query("CALL SEL_USUARIO(?)", [id]);

      return res.json(results);
    } catch (error) {
      return res.status(500).json({
        code: res.statusCode,
        message: "Error al obtener la Usuario",
      });
    }
  }

  static async createRegister(req, res) {
    const body = req.body;
    try {
      const { error, value } = createUserShema.validate(body);
      if (error) {
        return JoiError(error, res);
      }

      // extract values from the validated object
      const {
        PV_NOM_USUARIO,
        PV_EMAIL_USUARIO,
        PV_PWR_USUARIO,
        PV_DIR_MAC,
        PV_DIR_IP,
        PI_COD_PERSONA,
      } = value;

      const sqlUser = "CALL INS_USUARIO(?, ?, ?, ?, ?, ? )";

      const resultsUser = await query(sqlUser, [
        PV_NOM_USUARIO,
        PV_EMAIL_USUARIO,
        PV_PWR_USUARIO,
        PV_DIR_MAC,
        PV_DIR_IP,
        PI_COD_PERSONA,
      ]);
      res.status(201).json(resultsUser);
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
      const { error, value } = updateUserShema.validate(body);
      if (error) {
        return JoiError(error, res);
      }

      // extract values from the validated object
      const {
        PI_COD_USUARIO,
        PV_NOM_USUARIO,
        PV_EMAIL_USUARIO,
        PV_PWR_USUARIO,
        PV_DIR_MAC,
        PV_DIR_IP,
        PI_COD_PERSONA,
      } = value;

      const sql = "CALL UPD_USUARIO(?, ?, ?, ?, ? , ? , ?)";
      const results = await query(sql, [
        PI_COD_USUARIO,
        PV_NOM_USUARIO,
        PV_EMAIL_USUARIO,
        PV_PWR_USUARIO,
        PV_DIR_MAC,
        PV_DIR_IP,
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

export default userController;
