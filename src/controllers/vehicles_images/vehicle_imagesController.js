import { createVehicleimageShema } from "./dto/create_vehicles_images.js";
import { query } from "../../utils/query.js";
import { updateVehicleimageShema } from "./dto/update_vehicles_images.js";
import { JoiError } from "../../utils/JoiError.js";
import ControllerBaseMode1 from "../ControllerAbstract.js";

class VehicleimageController extends ControllerBaseMode1 {
  static async getRegisters(req, res) {
    try {
      const limit = req.query.limit || undefined;
      const sql = limit ? "CALL SEL_RANGO_VEHICULOS_IMAGENES(?)" : "CALL SEL_VEHICULOS_IMAGENES";
      const results = await query(sql, limit);

      res.status(200).json(results);
    } catch (error) {
      res.status(500).json({
        code: res.statusCode,
        message: "Error al tener la imagen del Vehiculo",
      });
    }
  }

  static async getRegister(req, res) {
    try {
      const id = req.query.id;
      const results = await query("SEL_VEHICULOS_IMAGENES(?)", [id]);

      return res.json(results);
    } catch (error) {
      return res.status(500).json({
        code: res.statusCode,
        message: "Error al obtener la IMAGEN DEL VEHICULO",
      });
    }
  }

  static async createRegister(req, res) {
    const body = req.body;
    try {
      const { error, value } = createVehicleimageShema.validate(body);
      if (error) {
        return JoiError(error, res);
      }

      // extract values from the validated object
      const {
      PI_COD_VEHICULO,
      PI_COD_IMAGEN,
      } = value;

      const sqlUser = "CALL INS_VEHICULOS_IMAGENES(?, ?)";

      const resultsVehicleimage = await query(sqlUser, [
        PI_COD_VEHICULO,
        PI_COD_IMAGEN,
      ]);
      res.status(201).json(resultsVehicleimage);
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
      const { error, value } = updateVehicleimageShema.validate(body);
      if (error) {
        return JoiError(error, res);
      }

      // extract values from the validated object
      const {
        PI_COD_VEHICULO,
      PI_COD_IMAGEN,
      } = value;

      const sql = "CALL UPD_COD_VEHICULO(?, ?)";
      const results = await query(sql, [
        PI_COD_VEHICULO,
      PI_COD_IMAGEN,
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

export default VehicleimageController;