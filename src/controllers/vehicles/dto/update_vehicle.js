import Joi from "joi";

export const updateVehicleShema = Joi.object().keys({
  PI_COD_VEHICULO: Joi.number().required().required(),
  PV_NOM_VEHICULO: Joi.string().default(null),
  PV_DES_VEHICULO: Joi.string().default(null),
  PI_COD_IMAGEN: Joi.number().default(null),
  PV_URL_IMAGE: Joi.string().default(null),
  PE_TIPO_IMAGEN: Joi.string()
    .valid("BANNER", "CONTENIDO")
    .uppercase()
    .default("BANNER"),
  PI_COD_SUCURSAL: Joi.number().default(null),
  PI_COD_MARCA: Joi.number().default(null),
  PI_COD_MODELO: Joi.number().default(null),
  PF_NUM_PRECIO: Joi.number().default(null),
  PD_FEC_LANZAMIENTO: Joi.date().default(null),
  PV_TIP_VEHICULO: Joi.string().default(null),
  PE_TIP_MOTOR: Joi.string().default(null),
  PE_TIP_TRANSMISION: Joi.string().default(null),
  PE_TIP_TRACCION: Joi.string().default(null),
  PF_NUM_CONSUMO_COMBUSTIBLE_KM: Joi.number().default(null),
  PF_NUM_CAPACIDAD_TANQUE: Joi.number().default(null),
  PI_NUM_LONGITUD: Joi.number().default(null),
  PI_NUM_ANCHO: Joi.number().default(null),
  PI_NUM_ALTURA: Joi.number().default(null),
  PI_NUM_PESO: Joi.number().default(null),
  PI_NUM_CAPACIDAD_CARGA_KG: Joi.number().default(null),
  PI_NUM_ASIENTOS: Joi.number().default(null),
  PI_NUM_AIRBAGS: Joi.number().default(null),
  PB_VAL_FRENOS: Joi.string()
    .valid("SI", "NO")
    .length(2)
    .uppercase()
    .default(null),
  PB_VAL_VENDIDO: Joi.string()
    .valid("SI", "NO")
    .length(2)
    .uppercase()
    .default(null),
});
