import { createVehicleShema } from "./dto/create_vehicle.js";
import { query } from "../../utils/query.js";
import { updateVehicleShema } from "./dto/update_vehicle.js";
import { JoiError } from "../../utils/JoiError.js";
import ControllerBaseModel from "../ControllerAbstract.js";

/**
 * @class VehicleController
 * @extends ControllerBaseModel
 */
class VehicleController extends ControllerBaseModel {
  /**
   * Get all vehicles
   * @static
   * @memberof VehicleController
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @returns {Promise<Array>}
   */
  static async getRegisters(req, res) {
    try {
      const limit = req.query.limit || undefined;
      const sql = limit ? "CALL SEL_RANGO_VEHICULOS(?)" : "CALL SEL_VEHICULOS";
      const results = await query(sql, limit);
      const resultsImageVehicle = await query(
        "CALL SEL_VEHICULO_IMAGEN(?)",
        results.map(({ COD_VEHICULO }) => COD_VEHICULO)
      );

      res.status(200).json({
        results,
        resultsImageVehicle,
      });
    } catch (error) {
      res.status(500).json({
        code: res.statusCode,
        message: "Error al obtener los vehiculos",
      });
    }
  }

  /**
   * Get one vehicle by id
   * @static
   * @memberof VehicleController
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @returns {Promise<Array>}
   */
  static async getRegister(req, res) {
    try {
      const id = Number(req.params.id);
      const results = await query("CALL SEL_VEHICULO(?)", [id]);

      const resultsImageVehicle = await query("CALL SEL_VEHICULO_IMAGEN(?)", [
        results[0].COD_VEHICULO,
      ]);
      return res.json({
        results,
        resultsImageVehicle,
      });
    } catch (error) {
      return res.status(500).json({
        code: res.statusCode,
        message: "Error al obtener el vehiculo",
      });
    }
  }

  /**
   * Create a new vehicle
   * @static
   * @memberof VehicleController
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @returns {Promise<Array>}
   */
  static async createRegister(req, res) {
    const body = req.body;
    try {
      const { error, value } = createVehicleShema.validate(body);
      if (error) {
        return JoiError(error, res);
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

      const sqlVehicle =
        "CALL INS_VEHICULO(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

      const resultsVehicle = await query(sqlVehicle, [
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
      res.status(201).json({
        code: res.statusCode,
        message: "Vehiculo creado exitosamente",
        resultsVehicle,
      });
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
   * @returns {Promise<Array>}
   */
  static async updateRegister(req, res) {
    const body = req.body;
    try {
      const { error, value } = updateVehicleShema.validate(body);
      if (error) {
        return JoiError(error, res);
      }

      // extract values from the validated object
      const {
        PI_COD_VEHICULO,
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
      //23
      const sql =
        "CALL UPD_VEHICULO(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
      const results = await query(sql, [
        PI_COD_VEHICULO,
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
      res.status(200).json(results);
    } catch (error) {
      res.status(500).json({
        code: res.statusCode,
        message: error.message,
      });
    }
  }
}

export default VehicleController;
