import { FETCH_PAYLOAD } from '../actions/payloadAction';

export const payloadReducer = (state = [], action) => {
    switch(action.type) {
        case FETCH_PAYLOAD:
            return action.payload.data;
        default:
            return state;
    }
}