import Joi from "joi";

export const createUserShema = Joi.object().keys({
    PV_NOM_USUARIO: Joi.string().required(),
    PV_EMAIL_USUARIO: Joi.string().required(),
    PV_PWR_USUARIO: Joi.string().regex(/^[a-zA-Z0-9]+$/).required(),
    PV_DIR_MAC: Joi.string().regex(/^[a-zA-Z0-9]+$/).required(),
    PV_DIR_IP: Joi.number().required()
});