import Joi from "joi";

export const createBrandShema = Joi.object().keys({
    
    PV_NOM_MARCA: Joi.string().required()

});