import { CreateModelShema } from "./dto/create_model.js";
import {query} from "../../utils/query.js";
import { UpdateModelShema } from "./dto/update_model.js";
import { JoiError } from "../../utils/JoiError.js";
import ControllerBaseMode1 from "../ControllerAbstract.js";



class ModelController extends ControllerBaseMode1 {




static async getRegisters (req, res){
    try{
        const limit = req.query.limit || undefined;
        const sql = limit ? "CALL SEL_RANGO_MODELOS(?)" : "CALL SEL_MODELOS";
        const results = await query (sql, limit);


        res.status(200).json({
            results,
        });

    }catch (error) {
        res.status(500).json ({
            code: res.statusCode,
            message: "Error al Obtener los Vehiculos",
        });
    }
}


static async getRegister(req, res) {
    try {
      const id = req.query.id;
      const results = await query("CALL SEL_MODELO(?)", [id]);

      return res.json({
        results,

      });
    } catch (error) {
      return res.status(500).json({
        code: res.statusCode,
        message: "Error al obtener el Modelo",
      });
    }
  }


  static async createRegister(req, res) {
    const body = req.body;
    try {
      const { error, value } = CreateModelShema.validate(body);
      if (error) {
        return JoiError(error, res);
      }

      // extract values from the validated object
      const {
       
        PV_NOM_MODELO

      } = value;

      const sqlModel =
        "CALL INS_MODELO(?, ?)";

      const resultsModel = await query(sqlModel, [
 
        PI_COD_MODELO,
        PV_NOM_MODELO,
      ]);
      res.status(201).json({
        code: res.statusCode,
        message: "Modelo creado exitosamente",
        resultsModel,
      });
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
      const { error, value } = UpdateModelShema.validate(body);
      if (error) {
        return JoiError(error, res);
      }

      // extract values from the validated object
      const {
        PI_COD_MODELO,
        PV_NOM_MODELO,
      } = value;
      
      const sql =
        "CALL UPD_MODELO(?, ?)";
      const results = await query(sql, [
        PI_COD_MODELO,
        PV_NOM_MODELO,
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

export default ModelController;