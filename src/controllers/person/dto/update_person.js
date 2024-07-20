import Joi from "joi";

export const updatePersonShema = Joi.object().keys({
  PI_COD_PERSONA: Joi.number().required(),
  PV_DNI: Joi.string().min(13).max(15).default(null),
  PV_NOM_PRIMER_NOMBRE: Joi.string().default(null),
  PV_NOM_PRIMER_APELLIDO: Joi.string().default(null),
  PI_COD_TELEFONO: Joi.number().default(null),
  PI_COD_EMAIL: Joi.number().default(null),
  PI_COD_DIRECCION: Joi.number().default(null),
  PD_FEC_NACIMIENTO: Joi.date().default(null),
  PB_VAL_ESTADO_CIVIL: Joi.string()
    .valid("SOLTERO", "CASADO", "VIUDO", "DIVORCIADO")
    .default("SOLTERO"),
  PB_SEX_PERSONA: Joi.string().valid("M", "H").default("M"),
});
