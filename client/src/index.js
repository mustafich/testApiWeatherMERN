import React from 'react';
import ReactDOM from 'react-dom';
import "./libs/rest/reset.css"
import "./libs/bootstrap-grid/bootstrap-grid.css"
import App from './App';


import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./redux/reducers/rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {BrowserRouter} from "react-router-dom";



const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);


