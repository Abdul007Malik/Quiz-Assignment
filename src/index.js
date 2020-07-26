import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/store'
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const persistState = {};
const store = configureStore(persistState)

// Mock api calls
const axiosMock = new MockAdapter(axios, { delayResponse: 500 });

const questionsData = require('./questions.json');
// console.log(questionsData)

axiosMock.onGet('http://localhost:8000/questions').reply(200, questionsData);

axiosMock.onPost('http://localhost:8000/register').reply(200, {
  id: 1,
  name: ''
})
axiosMock.onAny().passThrough();



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
