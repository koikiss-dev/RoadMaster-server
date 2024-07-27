import { createLocationShema } from "./dto/create_locations.js";
import { updateLocationShema } from "./dto/update_locations.js";
import { query } from "../../utils/query.js";

import { JoiError } from "../../utils/JoiError.js";
import ControllerBaseMode1 from "../ControllerAbstract.js";

class LocationsController extends ControllerBaseMode1 {
  static async getRegisters(req, res) {
    try {
      const limit = req.query.limit || undefined;
      const sql = limit
        ? "CALL SEL_RANGO_UBICACIONES(?)"
        : "CALL SEL_UBICACIONES";
      const results = await query(sql, limit);

      res.status(200).json(results);
    } catch (error) {
      res.status(500).json({
        code: res.statusCode,
        message: "Error al tener las Ubiaciones",
      });
    }
  }

  static async getRegister(req, res) {
    try {
      const id = req.query.id;
      const results = await query("CALL SEL_UBICACION(?)", [id]);

      return res.json(results);
    } catch (error) {
      return res.status(500).json({
        code: res.statusCode,
        message: "Error al obtener la UBicacion",
      });
    }
  }

  static async createRegister(req, res) {
    const body = req.body;
    try {
      const { error, value } = createLocationShema.validate(body);
      if (error) {
        return JoiError(error, res);
      }

      // extract values from the validated object
      const { PV_UBICACION } = value;

      const sql = "CALL INS_UBICACION(?)";

      const resultsLocations = await query(sql, [PV_UBICACION]);
      res.status(201).json(resultsLocations);
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
      const { error, value } = updateLocationShema.validate(body);
      if (error) {
        return JoiError(error, res);
      }

      // extract values from the validated object
      const { PI_COD_UBICACION, PV_UBICACION } = value;

      const sql = "CALL UPD_UBICACION(?, ?)";
      const results = await query(sql, [PI_COD_UBICACION, PV_UBICACION]);
      res.status(200).json(results);
    } catch (error) {
      res.status(500).json({
        code: res.statusCode,
        message: error.message,
      });
    }
  }
}

export default LocationsController;
