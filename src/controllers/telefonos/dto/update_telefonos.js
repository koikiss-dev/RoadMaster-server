import Joi from "joi";

export const updateTelefonoShema = Joi.object().keys({
  PI_COD_TELEFONO: Joi.number().required(),
  PI_NUM_TELEFONO: Joi.string().length(8).default(null),
});
