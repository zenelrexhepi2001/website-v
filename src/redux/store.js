import {createStore,applyMiddleware} from "redux";
import logger from 'redux-logger';
import rootreducer from './root-reducer';

const midleware = [logger];

const store = createStore(rootreducer,applyMiddleware(...midleware));


export default  store;

