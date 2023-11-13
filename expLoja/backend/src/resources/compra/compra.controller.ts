import { Request, Response } from "express";
import { registrarCompra } from "./compra.service";

function addProdutoCarrinho(req: Request, res:Response){
 const { id } = req.params;
 if (!req.session.carrinhoCompras) req.session.carrinhoCompras = [];
 req.session.carrinhoCompras.push(id);
 return res.status(201).json({ msg: "Item adicionado ao carrinho de compra"})
}
async function finalizarCompra(req:Request, res: Response) {
    if (!req.session.uid) 
    return res.status(400).json({ msg: "usuario não logado"});
    if (!req.session.carrinhoCompras) 
    return res.status(400).json({ msg: "carrinho vazio"});
try{
    await registrarCompra(req.session.carrinhoCompras, req.session.uid);
    return res.status(201).json({ msg: "Compra finalizada"})
    }catch(error){
        res.status(500).json(error);
    }
}

export default {addProdutoCarrinho, finalizarCompra};