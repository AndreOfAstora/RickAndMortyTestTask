import { charactersAPI } from "../utils/api/api.js";

export const SET_AUTOCOMPLETE = 'SET_AUTOCOMPLETE';
export const UPDATE_INPUT = 'UPDATE_INPUT';

export const setAutocomplete = (autocomplete) => ({
  type: SET_AUTOCOMPLETE, autocomplete
})

export const updateInput = (inputText) => ({
  type: UPDATE_INPUT, inputText
})

export const getAutocompleteOptions = (keyword) => async (dispatch) => { 
  dispatch(updateInput(keyword));
  const response = await charactersAPI.getCharactersByKeywordWithInfo(keyword);

  dispatch(setAutocomplete(
    {
      count: response.info.count,
      keyword,
      list: response.results
    }
  ))
}

