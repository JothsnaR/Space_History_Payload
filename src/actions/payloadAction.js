import axios from 'axios';

export const FETCH_PAYLOAD = 'fetch_payloadData';

export const fetchPayloadData = () => {
    return async dispatch => {
        const result = await axios.get('https://api.spacexdata.com/v3/payloads');
    
        dispatch({
            type: FETCH_PAYLOAD,
            payload: result
        })
    }
}