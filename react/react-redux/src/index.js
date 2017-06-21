import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import App from './reduxs/components/User'
import {userReducer} from "./reduxs/reducers/userListReducer"
import registerServiceWorker from './registerServiceWorker'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import './index.css';

let store = createStore(userReducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <App />      
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
