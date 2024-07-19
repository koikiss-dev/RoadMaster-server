
import Joi from "joi";

export const createEmployeeShema = Joi.object().keys({

    PB_VAL_ROL: Joi.string().valid('GERENTE', 'DEPENDIENTE').required(),
    PI_COD_PERSONA: Joi.number().required(),

});





