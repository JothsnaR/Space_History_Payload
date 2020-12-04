import { FETCH_HISTORY } from '../actions/historyAction';

export const historyReducer = (state = [], action) => {
    switch(action.type) {
        case FETCH_HISTORY:
            return action.payload.data;
        default:
            return state;
    }
}