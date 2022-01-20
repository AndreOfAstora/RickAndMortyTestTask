import {  applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import characterListReducer from "./characterListReducer";
import searchReducer from "./searchReducer";



let reducers = combineReducers({
    characterList: characterListReducer,
    search: searchReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;


export default store;