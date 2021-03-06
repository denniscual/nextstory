import { SET_VISIBILITY_FILTER } from "../actionTypes"

const categoryFilter = (state="SHOW_ALL", action) => {
    switch(action.type){
        case SET_VISIBILITY_FILTER: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}

export default categoryFilter;