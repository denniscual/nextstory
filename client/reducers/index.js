import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"

import category from "./categoryReducer"
import categoryFilter from "./categoryFilterReducer"
import sources from "./sourcesReducer"


export default combineReducers({
    sources,
    categoryFilter,
    routing: routerReducer 
});