import {  createStore,applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import FavoriteRed from "./Reducer";



const store = createStore(FavoriteRed , composeWithDevTools(applyMiddleware(thunk)))

export default store