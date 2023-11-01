import { Router } from 'express';
import linguagemController from './linguagem.controller';
import validate from '../../middlewares/validate';
import linguagemSchema from './linguagem.schema';

const router = Router();
router.get('/change', linguagemController.changeLanguage);
export default router;