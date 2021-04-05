import React from 'react';
import './index.css';
import store from "./red/reduxStore";
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";


export let renderNewTree = (props) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={props.getState()}
                     dispatch={props.dispatch.bind(props)}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderNewTree(store);

store.subscribe(() => {
    renderNewTree(store);
});
