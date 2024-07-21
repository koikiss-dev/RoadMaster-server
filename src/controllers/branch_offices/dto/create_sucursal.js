import Joi from "joi";

export const createSucursalcleShema = Joi.object().keys({
    PV_NOM_SUCURSAL: Joi.string().required(),
    PI_COD_EMPLEADO: Joi.number().default(null),
    PI_COD_UBICACION: Joi.number().default(null)
});