import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost} from "./red/state";


export let renderNewTree = (props) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={props} addPost={addPost}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

