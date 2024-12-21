import { v4 as uuidv4 } from 'uuid';

import { createDataFile, getAllData, getAnimeById, updateAnime } from '../utils/fileUtils.js';

export class Anime {
    #id;
    #nombre;
    #genero;
    #anio;
    #autor;

    constructor(nombre, genero, anio, autor) {
        this.#id = uuidv4();
        this.#nombre = nombre;
        this.#genero = genero;
        this.#anio = anio;
        this.#autor = autor;
    }

    get id() {
        return this.#id;
    }

    get nombre() {
        return this.#nombre;
    }

    get genero() {
        return this.#genero;
    }

    get anio() {
        return this.#anio;
    }

    get autor() {
        return this.#autor;
    }

    getAllProperties() {
        return {
            id: this.#id,
            nombre: this.#nombre,
            genero: this.#genero,
            anio: this.#anio,
            autor: this.#autor
        }
    }

    static async getAll() {
        console.log('hello estoy en models');
        try {
          const animes = await getAllData('anime.json')
          return animes
        } catch (error) {
          throw new InternalServerError('Error al obtener los datos de animes', error)
        }
      }

      static async getById(id) {
        
        try {
            console.log('hello estoy en models byId');
           
            const anime = await getAnimeById(id, 'anime.json')
            return anime
        } catch (error) {
            throw new NotFoundError('No se encontró el Anime', `No se encontró el anime con el id ${id}`);
        }
      }

      static async create(data) {
        try{
            const { nombre, genero, anio, autor } = data
            const anime = new Anime(nombre, genero, anio, autor)
            const animeObject = anime.getAllProperties()

            await createDataFile(animeObject, 'anime.json')
            return animeObject
        }catch{
            throw new InternalServerError('Error al crear el Anime', error)
        }
      }

      static async update(id, data) {
        try{
            const updatedAnime = await updateAnime(id, data, 'anime.json')
            return updatedAnime;
        }catch (error) {
            throw new InternalServerError('Error al actualizar el anime', error)
        }
      }
}


