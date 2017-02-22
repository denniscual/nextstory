// actions
import axios from "axios";
import { FETCHING_ARTICLES,FETCH_ARTICLES_FULFILLED,FETCH_ARTICLES_REJECTED } from "../actionTypes"

// define endpoints in here
const ARTICLES = "https://newsapi.org/v1/articles";

const fetchingArticles = () => {
  return {
    type: FETCHING_ARTICLES,
    payload: true
  }
}

const fetchArticlesRejected = (err) =>{
    return {
        type: FETCH_ARTICLES_REJECTED,
        payload: err
    }
}

const fetchArticlesSuccess = (data) => {
  return {
    type: FETCH_ARTICLES_FULFILLED,
    payload: [...data]
  }
}

export function fetchArticles(sources) {
  return (dispatch) => {
    // dispatching fetchingArticles
    dispatch(fetchingArticles());
    // creating axios promise array.
    let axiosPromise = [];
    // we will create an axiosPromise array.
    axiosPromise = [...sources].map((source) => {
        let sourceURL = `${ARTICLES}?source=${source.id}&apiKey=4570dd5e21d74ce5afe8659948fe11af`;
        return axios.get(sourceURL);
    });
    return axios.all(axiosPromise)
        .then((results) => {
            const sourceArticles = results.map((result) => {
                return {
                    sourceId: result.data.source,
                    articles: result.data.articles
                }
            });
            dispatch(fetchArticlesSuccess(sourceArticles));
        })
        .catch((err) => {
            dispatch(fetchArticlesRejected(err))
        })
  }
}

