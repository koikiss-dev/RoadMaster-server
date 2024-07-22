import Joi from "joi";

export const UpdateVentasShema = Joi.object().keys({
    PI_COD_VENTA: Joi.int().required(),
    PV_DES_VENTA: Joi.string().required(),
    PF_MONTO_VENTA: Joi.float().required(),
    PB_DESCUENTO: Joi.tyniyint().required(),
    PF_MONTO_DESCUENTO: Joi.float().required(),
    PI_CAN_VENDIDA: Joi.int().required(),
    PI_COD_VEHICULO: Joi.int().required(),
});