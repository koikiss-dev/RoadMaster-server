import Joi from "joi";

export const UpdateImageShema = Joi.object().keys({
  PI_COD_IMAGEN: Joi.number().required(),
  PV_IMG_URL: Joi.string().required(),
  PE_TIPO_IMAGEN: Joi.string()
    .valid("BANNER", "CONTENIDO")
    .default("CONTENIDO")
    .required(),
});
