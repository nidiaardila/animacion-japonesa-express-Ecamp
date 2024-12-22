import { Router } from 'express'

import { getAllAnimes, getAnimeById, createAnime, updateAnime, deleteAnime } from '../controllers/anime.controller.js'

const router = Router();

router.get('/animes', getAllAnimes);
router.get('/animes/:id', getAnimeById);
router.post('/animes', createAnime);
router.put('/animes/:id', updateAnime);
router.delete('/animes/:id', deleteAnime);

export default router;