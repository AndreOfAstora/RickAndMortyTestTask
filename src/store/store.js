import { combineReducers, createStore } from "redux";
import characterListReducer from "./characterListReducer";



let reducers = combineReducers({
    characterList: characterListReducer
});

let store = createStore(reducers);

window.store = store;


export default store;