
import Joi from "joi";

export const createPersonShema = Joi.object().keys({
    PI_COD_PERSONA:         Joi.number().required(),
    PV_DNI:                 Joi.string().required(),
    PV_NOM_PRIMER_NOMBRE:   Joi.string().required(),
    PV_NOM_PRIMER_APELLIDO: Joi.string().required(),
    PI_COD_TELEFONO:        Joi.number().required(),
    PI_COD_EMAIL:           Joi.number().required(),
    PI_COD_DIRECCION:       Joi.number().required(),
    PD_FEC_NACIMIENTO:      Joi.date().required(),
    PD_FEC_INGRESO:         Joi.date().required(),  
    PD_FEC_ACTUALIZACION:   Joi.date().required(),
    PB_VAL_ESTADO_CIVIL:    Joi.string().length(4).uppercase().required(),
    PB_SEX_PERSONA:         Joi.string().length(2).uppercase().required(),
   

});



