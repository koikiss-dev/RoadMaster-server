import Joi from "joi";

export const CreateEmailShema = Joi.object().keys({
  PV_VAL_EMAIL: Joi.string().email().required(),
});
