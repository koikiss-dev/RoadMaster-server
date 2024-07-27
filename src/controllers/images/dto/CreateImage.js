import Joi from "joi";

export const CreateImageShema = Joi.object().keys({
  PV_IMG_URL: Joi.string().required(),
  PE_TIPO_IMAGEN: Joi.string().valid("BANNER", "CONTENIDO").required(),
});
