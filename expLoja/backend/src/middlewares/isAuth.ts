import { NextFunction, Request, Response, } from "express";


function isAuth (req:Request, res:Response, next: NextFunction){
 if(req.session.uid) next();
 else res.status(401).json({ msg:"O usuario não esta logado"})
}

export default isAuth;