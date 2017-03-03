import React from "react"
import { render } from "react-dom"
import { Router, Route, IndexRoute } from "react-router"
  
// import components
import Main from "./components/Presentational/Main"
import Home from "./components/Containers/Home"
import Technology from "./components/Containers/Technology"
import Sport from "./components/Containers/Sport"
import Business from "./components/Containers/Business"
import Entertainment from "./components/Containers/Entertainment"
import Gaming from "./components/Containers/Gaming"
import Music from "./components/Containers/Music"

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