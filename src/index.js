import React from 'react';
import './index.css';
import store from "./redux/reduxStore";
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


export let renderNewTree = (props) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={props}>
                    <App/>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderNewTree(store);

