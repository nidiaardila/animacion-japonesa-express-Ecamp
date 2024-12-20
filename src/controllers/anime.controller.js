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