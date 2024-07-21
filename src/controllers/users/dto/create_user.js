import Joi from "joi";

export const createUserShema = Joi.object().keys({
  PV_NOM_USUARIO: Joi.string().required(),
  PV_EMAIL_USUARIO: Joi.string().email().required(),
  PV_PWR_USUARIO: Joi.string()
    .regex(/^[a-zA-Z0-9]+$/)
    .required(),
  PV_DIR_MAC: Joi.string()
    .regex(/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/)
    .required(),
  PV_DIR_IP: Joi.string().ip().required(),
  PI_COD_PERSONA: Joi.number().required(),
});
