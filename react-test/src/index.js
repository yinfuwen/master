import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import './index.css';

///////////////////////////////////////////////////////////////
// import Login from "./test2";
// ReactDOM.render(
//     <div>
//         {/*<Login />*/}
//         <App />
//     </div>, 
//     document.getElementById("root")
// );
//////////////////////////////////////////////////////////////
/*ReactDOM.render(
    <App />, 
    document.getElementById('root')
    );*/
////////////////////////////////////////////////////////////////

// import {Router,Route,hashHistory,IndexRoute,Redirect,IndexRedirect,Link,IndexLink} from "react-router";
import routerCfg from "./Router";
ReactDOM.render(
    <div>{routerCfg}</div>,
    document.getElementById("root")
)
/////////////////////////////////////////////////////////////////
registerServiceWorker();
