import { Router } from "express";

import produtoRouter from "../resources/produto/produto.router";
import compraRouterfrom "../resources/compra/compra.router";
import linguagemRouter from "../resources/linguagem/linguagem.router"
import usuarioRouter from "..//resources/usuario/usuario.router";
import authRouter from "..//resources/usuario/usuario.router";
const router = Router();


router.use("/auth", 
//swagger.tags = ["Auth"]
authRouter);
router.use("/produto", 
//swagger.tags = ["Produto"]
produtoRouter);
router.use("/compra",
//swagger.tags = ["Compra"]
 produtoRouter);
router.use("/linguagem", 
//swagger.tags = ["Linguagem"]
linguagemRouter);
router.use("/usuario",
//swagger.tags = ["Usuario"]
 usuarioRouter);



export default router;
