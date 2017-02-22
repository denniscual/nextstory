import React from "react"
import { render } from "react-dom"
import { Router, Route, IndexRoute } from "react-router"
  
// import components
import App from "./components/App"
import Home from "./components/Pages/Home"
import Technology from "./components/Pages/Technology"
import Sport from "./components/Pages/Sport"
import Business from "./components/Pages/Business"
import Entertainment from "./components/Pages/Entertainment"
import Gaming from "./components/Pages/Gaming"
import Music from "./components/Pages/Music"

// import stores
import { Provider } from "react-redux"
import store, { history } from "./store"

const appRouter = (
    <Provider store={store}> 
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="technology" component={Technology}/>
                <Route path="sport" component={Sport}/>
                <Route path="business" component={Business}/>
                <Route path="entertainment" component={Entertainment}/>
                <Route path="gaming" component={Gaming}/>
                <Route path="music" component={Music}/>
            </Route>          
        </Router>
    </Provider>
);

render(appRouter,
    document.getElementById("root")
);