import { createVehicleShema } from "./dto/create_vehicle.js";
import { query } from "../../utils/query.js";
import Joi from "joi";
class VehicleController {
  /**
   * Get all vehicles
   * @static
   * @memberof VehicleController
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   */
  static async getVehicles(req, res) {
    try {
      const sql = "CALL SEL_VEHICULOS";
      const results = await query(sql);

      res.json(results);
    } catch (error) {
      res.status(500).json({
        code: res.statusCode,
        message: "Error al obtener todos los vehiculos",
      });
    }
  }

  /**
   * Get one vehicle
   * @static
   * @memberof VehicleController
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   */
  static async getVehicle(req, res) {}

  /**
   * Create a new vehicle
   * @static
   * @memberof VehicleController
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   */
  static async createVehicle(req, res) {
    const body = req.body;
    try {
      const { error, value } = createVehicleShema.validate(body);
      if (error) {
        return res.status(400).json({
          code: res.statusCode,
          message: error.message,
        });
      }

      // extract values from the validated object
      const {
        PV_NOM_VEHICULO,
        PV_DES_VEHICULO,
        PI_COD_SUCURSAL,
        PI_COD_MARCA,
        PI_COD_MODELO,
        PF_NUM_PRECIO,
        PD_FEC_LANZAMIENTO,
        PV_TIP_VEHICULO,
        PE_TIP_MOTOR,
        PE_TIP_TRANSMISION,
        PE_TIP_TRACCION,
        PF_NUM_CONSUMO_COMBUSTIBLE_KM,
        PF_NUM_CAPACIDAD_TANQUE,
        PI_NUM_LONGITUD,
        PI_NUM_ANCHO,
        PI_NUM_ALTURA,
        PI_NUM_PESO,
        PI_NUM_CAPACIDAD_CARGA_KG,
        PI_NUM_ASIENTOS,
        PI_NUM_AIRBAGS,
        PB_VAL_FRENOS,
        PB_VAL_VENDIDO,
      } = value;

      const sql =
        "CALL INS_VEHICULO(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
      const results = await query(sql, [
        PV_NOM_VEHICULO,
        PV_DES_VEHICULO,
        PI_COD_SUCURSAL,
        PI_COD_MARCA,
        PI_COD_MODELO,
        PF_NUM_PRECIO,
        PD_FEC_LANZAMIENTO,
        PV_TIP_VEHICULO,
        PE_TIP_MOTOR,
        PE_TIP_TRANSMISION,
        PE_TIP_TRACCION,
        PF_NUM_CONSUMO_COMBUSTIBLE_KM,
        PF_NUM_CAPACIDAD_TANQUE,
        PI_NUM_LONGITUD,
        PI_NUM_ANCHO,
        PI_NUM_ALTURA,
        PI_NUM_PESO,
        PI_NUM_CAPACIDAD_CARGA_KG,
        PI_NUM_ASIENTOS,
        PI_NUM_AIRBAGS,
        PB_VAL_FRENOS,
        PB_VAL_VENDIDO,
      ]);

      res.json(results);
    } catch (error) {
      res.status(500).json({
        code: res.statusCode,
        message: error.message,
      });
    }
  }

  /**
   * Update a vehicle
   * @static
   * @memberof VehicleController
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   */
  static async updateVehicle(req, res) {
    res.send("Hello World");
  }
}

export default VehicleController;
