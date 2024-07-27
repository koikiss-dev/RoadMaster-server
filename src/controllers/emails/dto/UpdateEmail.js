import Joi from "joi";

export const UpdateEmailShema = Joi.object().keys({
  PI_COD_EMAIL: Joi.number().required(),
  PV_VAL_EMAIL: Joi.string().email().required(),
});
