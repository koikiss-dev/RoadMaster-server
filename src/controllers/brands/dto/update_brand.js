import Joi from "joi";

export const updateBrandSchema = Joi.object().keys({
  PI_COD_MARCA: Joi.number().required(),
  PV_NOM_MARCA: Joi.string().required(),
});
