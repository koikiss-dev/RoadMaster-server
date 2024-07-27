import Joi from "joi";

export const UpdateRegisterShema = Joi.object().keys({
  PI_COD_REGISTRO: Joi.number().required(),
  PV_NOM_REGISTRO: Joi.string(),
  PV_URL_REGISTRO: Joi.string(),
  PI_COD_USUARIO: Joi.number(),
});
