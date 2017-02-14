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

export default sources;