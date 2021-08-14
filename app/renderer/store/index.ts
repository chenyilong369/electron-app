/*
 * @Description: redux仓库
 * @Autor: chenyilong369
 * @Date: 2021-08-14 23:38:03
 * @LastEditors: chenyilong369
 * @LastEditTime: 2021-08-15 00:45:46
 */

import logger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)));

export default store;
