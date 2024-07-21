import Joi from "joi";

export const createPersonShema = Joi.object().keys({
  PV_DNI: Joi.string().min(13).max(15).required(),
  PV_NOM_PRIMER_NOMBRE: Joi.string().required(),
  PV_NOM_PRIMER_APELLIDO: Joi.string().required(),
  PI_COD_TELEFONO: Joi.number().required(),
  PI_COD_EMAIL: Joi.number().required(),
  PI_COD_DIRECCION: Joi.number().required(),
  PD_FEC_NACIMIENTO: Joi.date().required(),
  PB_VAL_ESTADO_CIVIL: Joi.string()
    .valid("SOLTERO", "CASADO", "VIUDO", "DIVORCIADO")
    .default("SOLTERO")
    .required(),
  PB_SEX_PERSONA: Joi.string().valid("H", "M").default("M").required(),
});
