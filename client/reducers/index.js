import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"

import categoryFilter from "./categoryFilterReducer"
import sources from "./sourcesReducer"
import sourceArticles from "./articlesReducer"


export default combineReducers({
    sources,
    sourceArticles,
    categoryFilter,
    routing: routerReducer 
});