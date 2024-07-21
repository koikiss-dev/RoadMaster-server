import Joi from "joi";

export const createCriticShema = Joi.object().keys({
  PV_DETALLES: Joi.string().required(),
  PI_CAN_ESTRELLAS: Joi.number().min(1).max(5).required(),
  PI_COD_VEHICULO: Joi.number().required(),
});
