
import axios from "axios";

// TODO: 

// 1) figure out a way to reuse axios calls without potentially loosing context.

const baseURL = 'https://rickandmortyapi.com/api';


const characters = axios.create({
  baseURL: baseURL
})



export const charactersAPI = {
  getCharacters(pageIndex = 1) {
    return characters.get(
      '/character/?page=' + parseInt(pageIndex)
    ).then(response => response.data.results)
  },

  getCharactersWithInfo(pageIndex = 1) {
    return characters.get(
      '/character/?page=' + parseInt(pageIndex)
    ).then(response => response.data)
  },

  getCharactersByKeyword(keyword = '', pageIndex = 1) {
    return characters.get(
      '/character/?name=' + keyword + '&page=' + parseInt(pageIndex)
    ).then(response => response.data.results)
  },

  getCharactersByKeywordWithInfo(keyword = '', pageIndex = 1) {
    return characters.get(
      '/character/?name=' + keyword + '&page=' + parseInt(pageIndex)
    ).then(response => response.data)
  }
  
}

export const characterProfileAPI = {
  getCharacterProfile(id) {
    return characters.get(
      `/character/${id}`
    ).then(response => response.data)
  }
}

// window.getCharactersByKeyword = charactersAPI.getCharactersByKeyword;

// window.getCharacters = charactersAPI.getCharacters;

// window.getCharactersByKeywordWithInfo = charactersAPI.getCharactersByKeywordWithInfo;

// window.getCharactersWithInfo = charactersAPI.getCharactersWithInfo;

// window.getCharacterProfile = characterProfileAPI.getCharacterProfile;



