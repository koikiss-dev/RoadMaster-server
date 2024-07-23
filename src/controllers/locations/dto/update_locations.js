import Joi from "joi";

export const updateLocationShema = Joi.object().keys({
  PI_COD_UBICACION: Joi.number().required(),
  PV_UBICACION: Joi.string().required(),
});
