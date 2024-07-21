import Joi from "joi";

export const UpdateModelShema = Joi.object().keys({
  PI_COD_MODELO: Joi.number().required(),
  PV_NOM_MODELO: Joi.string().required(),
});
