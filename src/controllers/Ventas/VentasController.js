import { CreateVentasShema } from "./dto/create_ventas.js";
import { UpdateVentasShema } from "./dto/update_ventas.js";
import { query } from "../../utils/query.js";
import { JoiError } from "../../utils/JoiError.js";
import ControllerBaseModel from "../ControllerAbstract.js";

/**
 * Clase para ventas
 * @class VentasController
 * @extends ControllerBaseModel
 */
class VentasController extends ControllerBaseModel {
  /**
   * Obtener todas las ventas
   * @static
   * @memberof VentasController
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   */
  static async getVentas(req, res) {
    try {
      const limit = req.query.limit || undefined;
      const sql = limit ? "CALL SEL_RANGO_VENTAS(?)" : "CALL SEL_VENTAS";
      const results = await query(sql, limit);

      res.status(200).json({
        results,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        code: res.statusCode,
        message: "Error al obtener las ventas",
      });
    }
  }

  /**
   * Obtener una venta
   * @static
   * @memberof VentasController
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   */
  static async getVenta(req, res) {
    try {
      const id = req.query.id;
      const results = await query("CALL SEL_VENTA(?)", [id]);

      return res.json({
        results,
      });
    } catch (error) {
      return res.status(500).json({
        code: res.statusCode,
        message: "Error al obtener la venta",
      });
    }
  }

  /**
   * Crear una nueva venta
   * @static
   * @memberof VentasController
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   */
  static async createVenta(req, res) {
    const body = req.body;
    try {
      const { error, value } = CreateVentasShema.validate(body);
      if (error) {
        return res.status(400).json({
          code: res.statusCode,
          message: error.message,
        });
      }

      // extraer valores del objeto validado
      const {
        PV_DES_VENTA,
        PF_MONTO_VENTA,
        PB_DESCUENTO,
        PF_MONTO_DESCUENTO,
        PI_CAN_VENDIDA,
        PI_COD_VEHICULO,
      } = value;

      const sql = "CALL INS_VENTA(?, ?, ?, ?, ?, ?)";
      const venta = await query(sql, [
        PV_DES_VENTA,
        PF_MONTO_VENTA,
        PB_DESCUENTO,
        PF_MONTO_DESCUENTO,
        PI_CAN_VENDIDA,
        PI_COD_VEHICULO,
      ]);

      res.status(201).json({
        venta,
      });
    } catch (error) {
      res.status(500).json({
        code: res.statusCode,
        message: error.message,
      });
    }
  }

  /**
   * Actualizar una venta
   * @static
   * @memberof VentasController
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   */
  static async updateVenta(req, res) {
    const body = req.body;
    try {
      const { error, value } = UpdateVentasShema.validate(body);
      if (error) {
        return JoiError(error, res);
      }

      // extraer valores del objeto validado
      const {
        PI_COD_VENTA,
        PV_DES_VENTA,
        PF_MONTO_VENTA,
        PB_DESCUENTO,
        PF_MONTO_DESCUENTO,
        PI_CAN_VENDIDA,
        PI_COD_VEHICULO,
      } = value;

      const sql = "CALL UPD_VENTA(?, ?, ?, ?, ?, ?, ?)";
      const venta = await query(sql, [
        PI_COD_VENTA,
        PV_DES_VENTA,
        PF_MONTO_VENTA,
        PB_DESCUENTO,
        PF_MONTO_DESCUENTO,
        PI_CAN_VENDIDA,
        PI_COD_VEHICULO,
      ]);

      res.status(200).json({
        venta,
      });
    } catch (error) {
      res.status(500).json({
        code: res.statusCode,
        message: error.message,
      });
    }
  }
}

export default VentasController;
