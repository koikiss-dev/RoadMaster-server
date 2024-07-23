import Joi from "joi";

export const UpdateVentasShema = Joi.object().keys({
  PI_COD_VENTA: Joi.number().required(),
  PV_DES_VENTA: Joi.string().default(null),
  PF_MONTO_VENTA: Joi.number().precision(2).default(null),
  PB_DESCUENTO: Joi.string().valid("SI", "NO").default("NO"),
  MONTO_DESCUENTO: Joi.number().default(null),
  PI_CAN_VENDIDA: Joi.number().default(null),
  PI_COD_VEHICULO: Joi.number().default(null),
});
