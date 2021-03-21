import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './red/state'

let dialogsData = [
    {id: '1', name: 'Andr'},
    {id: '2', name: 'Vova'},
    {id: '3', name: 'Kate'},
    {id: '4', name: 'Maxi'},
    {id: '5', name: 'Kate'},
]

let messagesData = [
    {id: '1', message: 'Hi'},
    {id: '2', message: 'hello'},
    {id: '3', message: 'hello'},
    {id: '4', message: 'how are u?'}
]

let postsData = [
    {id: '1', message: 'Hello', likeCount: '15'},
    {id: '2', message: 'First', likeCount: '11'},
]

ReactDOM.render(
  <React.StrictMode>
    <App dialogsD={dialogsData} messagesD={messagesData} postsD={postsData} state={state}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
