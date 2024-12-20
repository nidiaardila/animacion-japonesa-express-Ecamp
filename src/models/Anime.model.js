import { getAllData, getAnimeById } from '../utils/fileUtils.js';

export class Anime {
    #id;
    #nombre;
    #genero;
    #anio;
    #autor;

    constructor(id, nombre, genero, anio, autor) {
        this.#id = id;
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
}


