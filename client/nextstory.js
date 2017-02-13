import React from "react"
import { render } from "react-dom"
import { Router, Route, IndexRoute } from "react-router"

// import css
import css from "./styles/style.styl"

// import components
import App from "./components/App"
import PhotoGrid from "./components/PhotoGrid"
import Single from "./components/Single"

// import stores
import { Provider } from "react-redux"
import store, { history } from "./store"

const appRouter = (
    <Provider store={store}> 
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={PhotoGrid}/>
                <Route path="/view/:postId" component={Single} />
            </Route>
        </Router>
    </Provider>
);

render(appRouter,
    document.getElementById("root")
);