
import Joi from "joi";

export const updatePersonShema = Joi.object().keys({
    PI_COD_PERSONA:         Joi.number().required(),
    PV_DNI:                 Joi.string().default(null),
    PV_NOM_PRIMER_NOMBRE:   Joi.string().default(null),
    PV_NOM_PRIMER_APELLIDO: Joi.string().default(null),
    PI_COD_TELEFONO:        Joi.number().default(null),
    PI_COD_EMAIL:           Joi.number().default(null),
    PI_COD_DIRECCION:       Joi.number().default(null),
    PD_FEC_NACIMIENTO:      Joi.date().default(null),
    PD_FEC_INGRESO:         Joi.date().default(null),  
    PD_FEC_ACTUALIZACION:   Joi.date().default(null),
    PB_VAL_ESTADO_CIVIL:    Joi.string().default('NULL','NULL','NULL','NULL'),
    PB_SEX_PERSONA:         Joi.string().default('NULL','NULL'),
 

});












