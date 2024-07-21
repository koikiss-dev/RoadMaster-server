import Joi from "joi";

export const updateUserShema = Joi.object().keys({
  PI_COD_USUARIO: Joi.number().required(),
  PV_NOM_USUARIO: Joi.string(),
  PV_EMAIL_USUARIO: Joi.string().email(),
  PV_PWR_USUARIO: Joi.string().regex(/^[a-zA-Z0-9]+$/),
  PV_DIR_MAC: Joi.string().regex(/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/),
  PV_DIR_IP: Joi.string().ip(),
  PI_COD_PERSONA: Joi.number(),
});
