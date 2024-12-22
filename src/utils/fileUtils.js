import { NotFoundError, YeisonError } from "../error/typesError.js";
import { createFile, readFile } from "../services/fileServices.js"


export const createDataFile = async (data, dataPath) => {
    try {
        const datafile = await readFile(dataPath);
        let dataJson = null
    
        !datafile || datafile.length === 0 ? (dataJson = [data]) : dataJson = [ ...datafile, data ]
    
        await createFile(dataJson, dataPath)
        
    } catch (error) {
        throw new YeisonError(`Error al gestionar la creación del archivo con la data`, error)
    }
}

export const getAllData = async(pathData) => {
    try {
        const data = await readFile(pathData)
        return data
    } catch (error) {
        throw new NotFoundError('No pudimos acceder a los datos', error)
    }
}

export const getAnimeById = async (id, pathData) => {
    console.log('hello estoy en utils byId');
    
    try{
        const data = await readFile(pathData)
        const animeFound = data.find(animeFound => animeFound.id === id.toString());
        console.log('ID recibido:', id);
        return animeFound
    } catch (error) {
        throw new NotFoundError('No se encontró el Anime', `No se encontró el anime con el id ${id}`);
    }
}

export const updateAnime = async (id, newAnime, pathData) => {
    try{
        const anime = await readFile(pathData);
        const animeIndex = anime.findIndex(animeFound => animeFound.id === id);

        if(animeIndex === -1) {
            console.error("No se encontro el Anime")
            throw new Error("No se encontró el Anime con el ID proporcionado");

        }

        //Cortesía: Devolver el dato anterior para comparar
        const oldAnime = {...anime[animeIndex]}

        anime[animeIndex] = {id, ...newAnime};
        await createFile(anime, pathData)

        //Cortesía: devolver el viejo anime
        return oldAnime;    
    }catch(error){
        throw new YeisonError('Error al actualizar el anime', error)
    }
}

export const deleteAnime = async(id, pathData) => {
    try {
        const anime = await readFile(pathData);
        const animeIndex = anime.findIndex(animeFound => animeFound.id === id);

        if(animeIndex === -1) {
            console.error("No se encontro el Anime")
            throw new Error("No se encontró el Anime con el ID proporcionado");
        }

        const animeDelete = anime[animeIndex]
        anime.splice(animeIndex, 1);
       
        await createFile(anime, pathData)

        return animeDelete;
    } catch (error) {
        throw new YeisonError('Error al eliminar el anime', error)
    }
}