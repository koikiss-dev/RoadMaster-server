import Joi from "joi";

export const UpdateModelShema = Joi.onjet().keys({
    PI_COD_MODELO: Joi.number().required(),
    PV_NOM_MODELO: Joi.STRING().required()
});