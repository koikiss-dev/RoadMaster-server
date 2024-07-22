import Joi from "joi";

export const UpdateDireccionesShema = Joi.object().keys({
    
    PI_COD_DIRECCION: Joi.int().required(),
    PV_DES_DIRECCION: Joi.string().required(),

});