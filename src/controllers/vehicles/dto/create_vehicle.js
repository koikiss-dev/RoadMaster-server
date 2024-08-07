import Joi from "joi";

export const createVehicleShema = Joi.object().keys({
  PV_NOM_VEHICULO: Joi.string().required(),
  PV_DES_VEHICULO: Joi.string().required(),
  PV_URL_IMAGE: Joi.string().default(null),
  PE_TIPO_IMAGEN: Joi.string()
    .valid("BANNER", "CONTENIDO")
    .uppercase()
    .default("BANNER"),
  PI_COD_SUCURSAL: Joi.number().required(),
  PI_COD_MARCA: Joi.number().required(),
  PI_COD_MODELO: Joi.number().required(),
  PF_NUM_PRECIO: Joi.number().required(),
  PD_FEC_LANZAMIENTO: Joi.date().required(),
  PV_TIP_VEHICULO: Joi.string().required(),
  PE_TIP_MOTOR: Joi.string().required(),
  PE_TIP_TRANSMISION: Joi.string().required(),
  PE_TIP_TRACCION: Joi.string().required(),
  PF_NUM_CONSUMO_COMBUSTIBLE_KM: Joi.number().required(),
  PF_NUM_CAPACIDAD_TANQUE: Joi.number().required(),
  PI_NUM_LONGITUD: Joi.number().required(),
  PI_NUM_ANCHO: Joi.number().required(),
  PI_NUM_ALTURA: Joi.number().required(),
  PI_NUM_PESO: Joi.number().required(),
  PI_NUM_CAPACIDAD_CARGA_KG: Joi.number().required(),
  PI_NUM_ASIENTOS: Joi.number().required(),
  PI_NUM_AIRBAGS: Joi.number().required(),
  PB_VAL_FRENOS: Joi.string()
    .valid("SI", "NO")
    .length(2)
    .uppercase()
    .required(),
  PB_VAL_VENDIDO: Joi.string()
    .valid("SI", "NO")
    .length(2)
    .uppercase()
    .required(),
});
