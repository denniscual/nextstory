import { applyMiddleware, createStore, compose } from "redux"
import { syncHistoryWithStore } from "react-router-redux"
import { browserHistory } from "react-router"

import logger from "redux-logger"
import thunk from "redux-thunk"

import rootReducer from "./reducers/index"


const middlewares = applyMiddleware(thunk, logger());


// enabling the redux devtool
const storeEnhancer = compose(
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
);

const store = createStore(rootReducer, middlewares);

export const history = syncHistoryWithStore(browserHistory, store);

// hot reload
if(module.hot){
    module.hot.accept("./reducers", () => {
        const nextRootRuducer = require("./reducers/index").default;
        store.replaceReducer(nextRootRuducer);
    });
}

export default store;