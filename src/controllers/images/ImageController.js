import { CreateImageShema } from "./dto/CreateImage.js";
import { UpdateImageShema } from "./dto/UpdateImage.js";
import { query } from "../../utils/query.js";
import { JoiError } from "../../utils/JoiError.js";
import ControllerBaseModel from "../ControllerAbstract.js";

/**
 * @class ImagesController
 * @extends ControllerBaseModel
 */
class ImagesController extends ControllerBaseModel {
  /**
   * Get all images
   * @static
   * @memberof ImagesController
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @returns {Promise<Array>}
   */
  static async getRegisters(req, res) {
    try {
      const limit = req.query.limit || undefined;
      const sql = limit ? "CALL SEL_RANGO_IMAGENES(?)" : "CALL SEL_IMAGENES";
      const results = await query(sql, limit);

      res.status(200).json(results);
    } catch (error) {
      res.status(500).json({
        code: res.statusCode,
        message: "Error al obtener las imagenes",
      });
    }
  }

  /**
   * Get one image by id
   * @static
   * @memberof ImagesController
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @returns {Promise<Array>}
   */
  static async getRegister(req, res) {
    try {
      const id = req.query.id;
      const results = await query("CALL SEL_IMAGEN(?)", [id]);

      return res.json(results);
    } catch (error) {
      return res.status(500).json({
        code: res.statusCode,
        message: "Error al obtener los datos de la imagen",
      });
    }
  }

  /**
   * Create a new image
   * @static
   * @memberof ImagesController
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @returns {Promise<Array>}
   */
  static async createRegister(req, res) {
    const body = req.body;
    try {
      const { error, value } = CreateImageShema.validate(body);
      if (error) {
        return JoiError(error, res);
      }

      // extract values from the validated object
      const { PV_IMG_URL, PE_TIPO_IMAGEN } = value;

      const sqlPerson = "CALL INS_IMAGEN(?, ?)";

      const results = await query(sqlPerson, [PV_IMG_URL, PE_TIPO_IMAGEN]);
      res.status(201).json(results);
    } catch (error) {
      res.status(500).json({
        code: res.statusCode,
        message: error.message,
      });
    }
  }

  /**
   * Update an image
   * @static
   * @memberof ImagesController
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @returns {Promise<Array>}
   */
  static async updateRegister(req, res) {
    const body = req.body;
    try {
      const { error, value } = UpdateImageShema.validate(body);
      if (error) {
        return JoiError(error, res);
      }

      // extract values from the validated object
      const { PI_COD_IMAGEN, PV_IMG_URL, PE_TIPO_IMAGEN } = value;

      const sql = "CALL UPD_IMAGEN(?, ?, ?)";
      const results = await query(sql, [
        PI_COD_IMAGEN,
        PV_IMG_URL,
        PE_TIPO_IMAGEN,
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

export default ImagesController;
