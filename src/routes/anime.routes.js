import { Router } from 'express'

import { getAllAnimes } from '../controllers/anime.controller.js';

const router = Router();

router.get('/animes', getAllAnimes);

export default router;