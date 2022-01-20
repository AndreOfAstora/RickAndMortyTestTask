
import axios from "axios";



const baseURL = 'https://rickandmortyapi.com/api';


const characters = axios.create({
    baseURL: baseURL
})



export const charactersAPI = {
  getCharacters(pageIndex = 1) {
    return this.getCharactersWithInfo(pageIndex)
      .then(data => data.results)
  },

  getCharactersWithInfo(pageIndex = 1) {
    return characters.get(
      '/character/?page=' + parseInt(pageIndex)
    ).then(response => response.data)
  }
}



