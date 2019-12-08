import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
// import { createStore,compose,applyMiddleware } from 'redux'
// import myReducer from './reducers/index'
// import thunk from 'redux-thunk'
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
//     myReducer,
//     composeEnhancer(applyMiddleware(thunk)),
// )
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './storeConfig'
// console.log(persistor)
ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
           <App />
        </PersistGate>
    </Provider>
, document.getElementById('root'));
serviceWorker.unregister();
