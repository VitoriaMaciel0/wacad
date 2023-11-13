import { Request, Response } from "express";
import { createUsuario, findUsuarioByEmail, getUsuarios} from "./usuario.service";
import { TiposUsuarios } from "../tipoUsuario/tipoUsuario.constants";

async function index(req: Request, res: Response) {
    const tipo = req.query.tipo as TiposUsuarios |undefined;
    try {
        const usuario = await getUsuarios(tipo);
        res.status(200).json(usuarios);
    } catch(error){
        console.log(error);
        res.status(500).json(error);
    }
    
}
async function create(req: Request, res: Response) {
    try {
        if(await findUsuarioByEmail(req.body.email)) 
        return res.status(409).json({ msg: "Usuario já cadastrado"});
    const usuario = await createUsuario(req.body);
    res.status(201).json(usuario);
    } catch (error) {
        res.status(500).json(error);
    }
}
async function read(req: Request, res: Response) {   
    const id = req.params.id;
    try {
        const usuario = await findUsuarioById(id);
        if (!usuario) 
        return res 
        .status(400)
        .json({ msg: "Não existe usuario com o id informado" });
    res.status(200).json(usuario);
    } catch(error){
        console.log(error);
        res.status(500).json(error);
    }
}
async function update(req: Request, res: Response) {
    
}
async function remove(req: Request, res: Response) {}

export default { index, create, read, update, remove}
