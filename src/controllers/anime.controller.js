import { NotFoundError } from "../error/typesError.js";
import { Anime } from "../models/Anime.model.js"


export const getAllAnimes = async(req, res) => {
    console.log('Función iniciada controller');
    try {
        const data = await Anime.getAll();
        if(!data) throw new NotFoundError('No existen los datos', `No se encontraron datos solicitados en la ruta`)

        res.status(200).json({
            message: 'Animes Encontrados!',
            status: 200,
            data
        })
    } catch (error) {
        console.log('catch');
        res.status(500).json({
          message: "Error al obtener los Animes ",
          status: 500,
          error,
        });
    }
}

export const getAnimeById = async(req, res) => {
    
    try {
        const { id } = req.params;
        console.log('hello estoy en controller byId');

        const data = await Anime.getById(id);
        if(!data) throw new NotFoundError('No se encontró el Anime', `No se encontró el anime con el id ${id}`);
        
        res.status(200).json({
            message: 'Anime Encontrado!',
            status: 200,
            data
        })
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener el Anime ",
            status: 500,
            error,
        });
    }
}

export const createAnime = async(req, res, next) => {
   try {
    const data = req.body
    const anime = await Anime.create(data);

    res.status(201).json({
        message: 'Anime creado con exito!',
        status: 201,
        data: anime
    })
   } catch (error) {
    next(error)
   }
}

export const updateAnime = async(req, res, next) => {
    try {
        const { id } = req.params;
        const dataAnime = req.body;

        const oldAnime = await Anime.update(id, dataAnime);

        res.status(200).json({
            message: 'Anime actualizado con exito!',
            status: 200,
            oldAnime: oldAnime,
            newAnime: dataAnime
        })
    } catch (error) {
        res.status(500).json({
          message: "Error al actualizar el anime! ",
          status: 500,
          error,
        });
   }
}

export const deleteAnime = async(req, res) => {
    try {
        const { id } = req.params;

        const animeDelete = await Anime.delete(id);


        res.status(200).json({
            message: `Anime con id ${id} Borrado con éxito`,
            status: 200,
            dataDeleted: animeDelete
        })
    } catch (error) {
        res.status(500).json({
          message: "Error al Eliminar el Anime",
          status: 500,
          error,
        });
    }
}