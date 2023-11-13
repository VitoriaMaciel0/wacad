import  {Request, Response} from "express";
import {findUsuarioByEmail} from '../usuario/usuario.service';
import { createUsuario, autenticate } from "./auth.service";


async function signup(req:Request, res:Response) {
    try {
        if(await findUsuarioByEmail(req.body.email))
        return res
    .status(409)
    .json({msg :"Já existe um usuario com o email informado"});
    const usuario = await createUsuario(req.body);
    res.status(201).json(usuario);
    }catch (error){
        console.log(error);
        res.status(500).json(error);
    }
}

async function create(req: Request, res: Response) {
    try {
        if (await findUsuarioByEmail(req.body.email))
        return res.status(409).json({ msg: "Usuario ja cadastrado"})
    const usuario = await createUsuario(req.body);
    res.status(201).json(usuario);
    }catch (error){
        console.log(error);
        res.status(500).json(error);
    }
}

async function login(req:Request, res:Response) {
    /*
  #swagger.summary = "Faz o login de usuario"
  #swagger.parameters['body'] = {
    in: "body",
    schema: { $ref: '#/definitions/CreateLoginDto'}
  }
  */
    try {
        const usuario = await autenticate(req.body);
        if (!usuario) return res.status(401).json({ msg: "email ou senha incorreta"});
        req.session.uid = usuario.id;
        req.session.tipoUsuario = usuario.tipoUsuarioId;
        res.status(200).json(usuario);
    } catch(error){
        console.log(error);
        res.status(500).json(error);
    }
}
async function logout(req:Request, res:Response) {
    req.session.destroy((err) => {
        if (error) return res.status(500).json({ msg: "Erro efetuando logout"});
        res.status(200).json({ msg: "Usuario deslogado com sucesso"})
    });
}

export default {signup, login, logout, create }