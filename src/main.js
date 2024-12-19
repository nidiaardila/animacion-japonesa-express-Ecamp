import express from 'express';

import animeRouter from '../src/routes/anime.routes.js';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/v1', animeRouter);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

export default app;