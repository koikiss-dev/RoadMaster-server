import { createBrandShema } from "./dto/create_brand.js";
import {query} from "../../utils/query.js";
import { updateBrandShema } from "./dto/update_brand.js";
import { JoiError } from "../../utils/JoiError.js";
import ControllerBaseMode1 from "../ControllerAbstract.js";



class brandController extends ControllerBaseMode1 {




static async getRegisters (req, res){
    try{
        const limit = req.query.limit || undefined;
        const sql = limit ? "CALL SEL_RANGO_MARCAS(?)" : "CALL SEL_MARCAS";
        const results = await query (sql, limit);


        res.status(200).json({
            results,
        });

    }catch (error) {
        res.status(500).json ({
            code: res.statusCode,
            message: "Error al Obtener las Marcas",
        });
    }
}


static async getRegister(req, res) {
    try {
      const id = req.query.id;
      const results = await query("CALL SEL_MARCA(?)", [id]);

      return res.json({
        results,

      });
    } catch (error) {
      return res.status(500).json({
        code: res.statusCode,
        message: "Error al obtener la Marca",
      });
    }
  }


  static async createRegister(req, res) {
    const body = req.body;
    try {
      const { error, value } = createBrandShema.validate(body);
      if (error) {
        return JoiError(error, res);
      }

      // extract values from the validated object
      const {
       
        PV_NOM_MARCA

      } = value;

      const sqlModel =
        "CALL INS_MARCA(?, ?)";

      const resultsBrand = await query(sqlBrand, [
 
        PI_COD_MARCA,
        PV_NOM_MARCA,
      ]);
      res.status(201).json({
        code: res.statusCode,
        message: "Marca creada exitosamente",
        resultsBrand,
      });
    } catch (error) {
      res.status(500).json({
        code: res.statusCode,
        message: error.message,
      });
    }
  }


  static async updateRegister (req, res) {
    const body = req.body;
    try {
      const { error, value } = updateBrandShema.validate(body);
      if (error) {
        return JoiError(error, res);
      }

      // extract values from the validated object
      const {
        PI_COD_MARCA,
        PV_NOM_MARCA,
      } = value;
      
      const sql =
        "CALL UPD_MARCA(?, ?)";
      const results = await query(sql, [
        PI_COD_MARCA,
        PV_NOM_MARCA,
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

export default BrandController;