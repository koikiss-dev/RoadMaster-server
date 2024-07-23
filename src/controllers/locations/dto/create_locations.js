import Joi from "joi";

export const createLocationShema = Joi.object().keys({
  PV_UBICACION: Joi.string().required(),
});
