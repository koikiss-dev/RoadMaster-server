import Joi from "joi";

export const updateCriticShema = Joi.object().keys({
    PI_COD_CRITICA: Joi.number().required(),
    PV_DETALLES_CRITICA: Joi.string().required(),
    PI_CAN_ESTRELLAS: Joi.number().required(),
    PI_COD_VEHICULO: Joi.number().required()
});