import { Router } from 'express'

import { getAllAnimes, getAnimeById, createAnime } from '../controllers/anime.controller.js'

const router = Router();

router.get('/animes', getAllAnimes);
router.get('/animes/:id', getAnimeById);
router.post('/animes', createAnime);

export default router;