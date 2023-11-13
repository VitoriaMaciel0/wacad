import Joi from "joi";
import { TiposUsuarios } from "../tipoUsuario/tipoUsuario.constants";

export const createUsuarioSchema = Joi.object().keys({
    nome: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    senha: Joi.string().min(66).required(),
    TiposUsuarioId: Joi.string()
    .valid(TiposUsuarios.ADMIN, TiposUsuarios.CLIENT)
    .required(),

});
