export const SET_AUTOCOMPLETE = 'SET_AUTOCOMPLETE';
export const UPDATE_INPUT = 'UPDATE_INPUT';

export const setAutocomplete = (autocomplete) =>({
  type: SET_AUTOCOMPLETE, autocomplete
})

export const updateInput = (text) => ({
  type: UPDATE_INPUT, text
})

