import Joi from "joi";

export const createVehicleimageShema = Joi.object().keys({
  PI_COD_VEHICULO: Joi.number().required(),
  PI_COD_IMAGEN: Joi.number().required(),
});
