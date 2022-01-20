import {  applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import characterListReducer from "./characterListReducer";



let reducers = combineReducers({
    characterList: characterListReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;


export default store;