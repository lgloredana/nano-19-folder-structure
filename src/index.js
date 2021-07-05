import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import reducer from './reducers'
import middleware from './middleware'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import {composeWithDevTools} from "redux-devtools-extension";

const composeEnhancers = composeWithDevTools({
    name: "My nanodegree project",
    trace: true,
    traceLimit: 23
});

const store = createStore(reducer, composeEnhancers(middleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)