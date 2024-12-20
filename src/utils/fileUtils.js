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