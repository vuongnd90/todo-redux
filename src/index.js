import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
// import thunk from 'redux-thunk';
import rootSaga from './sagas'

import createSagaMiddleware from 'redux-saga'

import App from './components/App';
import reducers from './reducers';

import './index.css';

import registerServiceWorker from './registerServiceWorker';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>        
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();
