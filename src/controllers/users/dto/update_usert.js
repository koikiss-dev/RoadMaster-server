import Joi from "joi";

export const updateUserShema = Joi.object().keys({
    PI_COD_USUARIO: Joi.number().required(),
    PV_NOM_USUARIO: Joi.string().required(),
    PV_EMAIL_USUARIO: Joi.string().required(),
    PV_PWR_USUARIO: Joi.string().regex(/^[a-zA-Z0-9]+$/).required(),
    PV_DIR_MAC: Joi.string().regex(/^[a-zA-Z0-9]+$/).required(),
    PV_DIR_IP: Joi.number().required(),
    PI_COD_PERSONA: Joi.number().required()
});