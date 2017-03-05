import React from "react"
import { render } from "react-dom"
import { Router, Route, IndexRoute } from "react-router"
  
// import components
import Main from "./components/Presentational/Main"
import Home from "./components/Presentational/Pages/Home"
import Technology from "./components/Presentational/Pages/Technology"
import Sport from "./components/Presentational/Pages/Sport"
import Business from "./components/Presentational/Pages/Business"
import Entertainment from "./components/Presentational/Pages/Entertainment"
import Gaming from "./components/Presentational/Pages/Gaming"
import Music from "./components/Presentational/Pages/Music"

// import stores
import { Provider } from "react-redux"
import store, { history } from "./store"

const appRouter = (
    <Provider store={store}> 
        <Router history={history}>
            <Route path="/" component={Main}>
                <IndexRoute component={Home}/>
                <Route path="/category/technology" component={Technology}/>
                <Route path="/category/sport" component={Sport}/>
                <Route path="/category/business" component={Business}/>
                <Route path="/category/entertainment" component={Entertainment}/>
                <Route path="/category/gaming" component={Gaming}/>
                <Route path="/category/music" component={Music}/>
            </Route>          
        </Router>
    </Provider>
);

render(appRouter,
    document.getElementById("root")
);