import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import thunk from 'redux-thunk'

import './styles/index.scss'

import {
  applyMiddleware,
  compose,
  combineReducers,
  createStore
} from 'redux'

import { Provider } from 'react-redux'

import boardsReducer from './reducers/boardsReducer'
import boardReducer from './reducers/boardReducer'

require('dotenv').config();

const allReducers = combineReducers({
  boards: boardsReducer,
  currentBoard: boardReducer,
})

const allStoreEnhancers = compose(
  applyMiddleware(thunk),
  (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) || compose()
)

const store = createStore(allReducers, allStoreEnhancers)

store.dispatch({ type: 'TEST'})

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
