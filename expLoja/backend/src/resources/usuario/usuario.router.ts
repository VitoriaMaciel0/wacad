import { Router } from "express";
import usuarioController from "./usuario.router";
import produtoController from "../produto/produto.router";
import linguagemController from "../linguagem/linguagem.router";
import validate from "../../middlewares/validate";
import { createUsuarioSchema } from "./usuario.schemas";

const router = Router();

router.get("/", usuarioController.index);
router.post("/", validate(createUsuarioSchema), usuarioController.create);
router.get("/:id", usuarioController.read);
router.put("/:id",validate(createUsuarioSchema), usuarioController.update);
router.delete("/:id", usuarioController.remove);

export default router;