import { combineReducers } from 'redux';
import { historyReducer } from './historyReducer';
import { payloadReducer } from './payloadReducer';

export default combineReducers({
    history: historyReducer,
    payloadData: payloadReducer
});