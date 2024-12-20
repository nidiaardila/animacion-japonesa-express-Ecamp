import { Router } from 'express'

import { getAllAnimes, getAnimeById } from '../controllers/anime.controller.js'

const router = Router();

router.get('/animes', getAllAnimes);
router.get('/animes/:id', getAnimeById);

export default router;