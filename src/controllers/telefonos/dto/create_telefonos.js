import Joi from "joi";

export const createTelefonoShema = Joi.object().keys({
  PI_NUM_TELEFONO: Joi.number().required(),

});
