import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './store/reducer';

const logger = (store) => {
    return next => {
        return action => {
            console.log('[Middleware] = ', action);
            const result = next(action);
            console.log('[Middleware] next state', store.getState());
            return result;
        };
    }
};

const store = createStore(reducer, applyMiddleware(logger, thunk));

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
