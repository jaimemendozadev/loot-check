import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers/balance';

const createStoreWithMiddleware = applyMiddleware()(createStore);


ReactDOM.render(
<Provider store={createStoreWithMiddleware(rootReducer)}>
  <App />
</Provider>
, document.querySelector('#root'));