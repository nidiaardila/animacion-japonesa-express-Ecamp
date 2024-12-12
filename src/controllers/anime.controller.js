
export const getAllAnimes = async (req, res) => {
    try {
        const data = await Anime.encontrarTodos();

        if(!data) throw new NotFoundError('No existen los datos', `No se encontraron datos solicitados en la ruta`)

        res.status(200).json({
            message: 'Animes Encontrados!',
            status: 200,
            data
        })
    } catch (error) {
        res.status(500).json({
          message: "Error al obtener los Animes",
          status: 500,
          error,
        });
    }
}