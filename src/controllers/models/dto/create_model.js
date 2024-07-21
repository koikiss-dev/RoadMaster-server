import Joi from "joi";

export const CreateModelShema = Joi.object().keys({
  PV_NOM_MODELO: Joi.string().required(),
});
