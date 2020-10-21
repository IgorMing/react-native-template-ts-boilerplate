import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import reactotron from '../reactotron.config';

export default createStore(rootReducer, compose(applyMiddleware(thunkMiddleware), reactotron.createEnhancer()));
