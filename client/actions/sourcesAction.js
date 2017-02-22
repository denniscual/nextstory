// actions
import axios from "axios";
import { FETCHING_SOURCES,FETCH_SOURCES_FULFILLED,FETCH_SOURCES_REJECTED } from "../actionTypes"

// define endpoints in here
const ARTICLES = "https://newsapi.org/v1/articles";
const SOURCES = "https://newsapi.org/v1/sources";

const fetchingSources = () => {
  return {
    type: FETCHING_SOURCES,
    payload: true
  }
}

const fetchSourcesRejected = (err) =>{
    return {
        type: FETCH_SOURCES_REJECTED, 
        payload: err
    }
}

function fetchSourcesSuccess(data){
  return {
    type: FETCH_SOURCES_FULFILLED,
    payload: data.sources
  }
}

export function fetchSources(category) {
  return function(dispatch) {
    dispatch(fetchingSources());
    return axios.get(`${SOURCES}?category=${category}`)
      .then((response) => {
        dispatch(fetchSourcesSuccess(response.data))
      })
      .catch((err) => {
        dispatch(fetchSourcesRejected(err))
      })
  }
}
