import { FETCHING_SOURCES,FETCH_SOURCES_FULFILLED,FETCH_SOURCES_REJECTED } from "../actionTypes"

const sources = (state=[], action) => {
    switch(action.type){
        case FETCHING_SOURCES: {
            
        }
        case FETCH_SOURCES_FULFILLED: {
            return action.payload
        }
    }
    return state;
}

// for processing sources
const processSources = (state={
  fetching: false, 
  fetched: false, 
  error: null}, action) => {

  switch(action.type){
    case FETCHING_SOURCES: {
       return {...state, fetching: action.payload};
    }
    case FETCH_SOURCES_REJECTED: {
        return {...state, fetching: false, error: action.payload};
    }
    case FETCH_SOURCES_FULFILLED: {
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
        sources: sources(
            state.sources, 
            action
        ),
        processSources: processSources(
            state.processSources,
            action
        )
    }
}


export default reducer;