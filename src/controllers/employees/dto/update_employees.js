import Joi from "joi";

export const updateEmployeeShema = Joi.object().keys({
  PI_COD_EMPLEADO: Joi.number().required(),
  PB_VAL_ROL: Joi.string().valid("GERENTE", "DEPENDIENTE").default(null),
  PI_COD_PERSONA: Joi.number().default(null),
});
