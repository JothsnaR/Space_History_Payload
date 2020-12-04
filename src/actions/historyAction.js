import axios from 'axios';

export const FETCH_HISTORY = 'fetch_history';

export const fetchHistoryData = () => {
    return async dispatch => {
        const result = await axios.get('https://api.spacexdata.com/v3/history');
    
        dispatch({
            type: FETCH_HISTORY,
            payload: result
        })
    }
}