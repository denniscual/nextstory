import { FETCH_SOURCES_FULFILLED } from "../actionTypes"

const categoryReducer = (state=[], action) => {
    switch(action.type){
        case FETCH_SOURCES_FULFILLED: {
            const newsSources = [...action.payload];
            console.log(newSources);
            const newsCatSources = newsSources.map(item => item.category);
            // convert into set so that we can filter only the unique values
            const uniqueSourcesCat = new Set(newsCatSources);
            // spread the element on this new variable.
            const finalCategory = [...uniqueSourcesCat]
            return finalCategory;
        }
    }
    return state;
}

export default categoryReducer;