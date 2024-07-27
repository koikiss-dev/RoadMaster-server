import Joi from "joi";

export const CreateRegisterShema = Joi.object().keys({
  PV_NOM_REGISTRO: Joi.string().required(),
  PV_URL_REGISTRO: Joi.string().required(),
  PI_COD_USUARIO: Joi.number().required(),
});
