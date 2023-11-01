import { Router } from "express";
import validate  from "../../middlewares/validate";
import { produtoSchema } from "./produto.schema"
import produtoController from "./produto.controller";

const router = Router();

router.get("/", produtoController.index);
router.post("/", validate(produtoSchema), produtoController.create);
router.get("/:id", produtoController.read);
router.put("/:id", produtoController.update);
router.delete("/:id", produtoController.remove);


export default router;
