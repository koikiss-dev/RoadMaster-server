import Joi from "joi";

export const updateCriticShema = Joi.object().keys({
  PI_COD_CRITICA: Joi.number().required(),
  PV_DETALLES: Joi.string(),
  PI_CAN_ESTRELLAS: Joi.number().min(1).max(5),
  PI_COD_VEHICULO: Joi.number(),
});
