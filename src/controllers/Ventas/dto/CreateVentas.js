import Joi from "joi";

export const CreateVentasShema = Joi.object().keys({
  PV_DES_VENTA: Joi.string().required(),
  PF_MONTO_VENTA: Joi.number().precision(2).required(),
  PB_DESCUENTO: Joi.string().valid("SI", "NO").default("NO"),
  MONTO_DESCUENTO: Joi.number().default(0),
  PI_CAN_VENDIDA: Joi.number().required(),
  PI_COD_VEHICULO: Joi.number().required(),
});
