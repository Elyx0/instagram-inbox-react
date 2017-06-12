import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import inbox from './inboxReducer';

const rootReducer = combineReducers({ routing, inbox });

export default rootReducer;
