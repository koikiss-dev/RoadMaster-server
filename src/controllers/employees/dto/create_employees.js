
import Joi from "joi";

export const createEmployeeShema = Joi.object().keys({
    PI_COD_EMPLEADO: Joi.number().required(),
    PB_VAL_ROL: Joi.string().length(2).uppercase().reuired(),
    PI_COD_PERSONA: Joi.number().required(),

});





