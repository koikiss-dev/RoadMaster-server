import Joi from "joi";

export const updateTelefonoShema = Joi.object().keys({
  PI_COD_TELEFONO: Joi.number().required().required(),
  PI_NUM_TELEFONO: Joi.number().default(null)
});
