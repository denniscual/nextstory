import { FETCHING_ARTICLES,FETCH_ARTICLES_FULFILLED,FETCH_ARTICLES_REJECTED } from "../actionTypes"

const articles = (state={}, action) => {
    switch(action.type){
        case FETCH_ARTICLES_FULFILLED: {
            // console.log("action payload", action.payload)
            return action.payload;
        }
        default: {
            return state
        }
    }
}

const processArticles = (state={
  fetching: false, 
  fetched: false, 
  error: null}, action) => {

  switch(action.type){
    case FETCHING_ARTICLES: {
       return {...state, fetching: action.payload};
    }
    case FETCH_ARTICLES_REJECTED: {
        return {...state, fetching: false, error: action.payload};
    }
    case FETCH_ARTICLES_FULFILLED: {
      return {          
          ...state,
          fetching: false, 
          fetched: true        
        }
    }
    default: {
      return state;
    }
  }
}

const reducer = (state={}, action) => {
    return {
        articles: articles(
            state.articles,
            action
        ),
        processArticles: processArticles(
            state.processArticles,
            action
        )
    }   
}

export default reducer;