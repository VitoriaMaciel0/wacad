import { Request, Response, NextFunction} from "express";
import { TiposUsuarios } from "../resources/tipoUsuario/tipoUsuario.constants";

function isAdmin (req:Request, res:Response, next:NextFunction ){
  if(req.session.tipoUsuario && req.session.tipoUsuario === TiposUsuarios.ADMIN) 
   next();
  else res.status(403).json({ msg: "Usuario não autorizado"})
}

export default isAdmin;