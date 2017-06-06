import React from "react";
import {Router,Route,hashHistory,IndexRedirect} from "react-router"

import Home from "./components/Home";
import User from "./components/User";
import Nav from "./components/Nav";
import About from "./components/About";

const routerCfg=(
        <Router history={hashHistory}>
            <Route path="/" component={Nav}>
                {/*<IndexRoute component={Home}/>*/}
                {/*<Redirect from="home/:id" to="/home"></Redirect>*/}
                <IndexRedirect to="/home"></IndexRedirect>
                <Route path="/home" component={Home}></Route>
                <Route path="/user" component={User}></Route>
                <Route path="/about" component={About}></Route>
            </Route>
        </Router>
    )

export default routerCfg;