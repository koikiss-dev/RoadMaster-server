import Joi from "joi";

export const CreateModelShema = Joi.onjet().keys({
    PV_NOM_MODELO: Joi.STRING().required()
});