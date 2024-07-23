import Joi from "joi";

export const CreateDireccionesShema = Joi.object().keys({
  PV_DES_DIRECCION: Joi.string().required(),
});
