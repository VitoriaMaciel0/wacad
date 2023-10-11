"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const main_1 = __importDefault(require("../controllers/main"));
const router = express_1.default.Router();
//main controller
router.get('/hb1', main_1.default.hb1);
router.get('/hb2', main_1.default.hb2);
router.get('/hb3', main_1.default.hb3);
router.get('/hb4', main_1.default.hb4);
router.get("/lorem/:paragrafos", main_1.default.lorem);
router.get("/about", main_1.default.sobre);
router.get("/pagina-com-imagem", main_1.default.img);
router.get("/ui", main_1.default.ui);
exports.default = router;
