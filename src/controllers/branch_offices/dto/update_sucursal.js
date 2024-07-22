import Joi from "joi";

export const updateSucursalShema = Joi.object().keys({
  PI_COD_SUCURSAL: Joi.number().required(),
  PV_NOM_SUCURSAL: Joi.string().default(null),
  PI_COD_GERENTE: Joi.number().default(null),
  PI_COD_UBICACION: Joi.number().default(null),
});
