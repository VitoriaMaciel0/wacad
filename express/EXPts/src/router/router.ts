import express from "express";
import mainController from '../controllers/main';

const router = express.Router();

//main controller

router.get('/hb1', mainController.hb1);
router.get('/hb2',mainController.hb2);
router.get('/hb3', mainController.hb3);
router.get('/hb4', mainController.hb4);
router.get("/lorem/:paragrafos", mainController.lorem);
router.get("/about", mainController.sobre);
router.get("/pagina-com-imagem", mainController.img);
router.get("/ui", mainController.ui);

export default router;
