import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"

import comments from "./commentsReducer"
import posts from "./postsReducer"


export default combineReducers({
    comments,
    posts,
    routing: routerReducer
});