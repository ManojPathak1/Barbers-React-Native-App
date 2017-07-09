const initialState = {
    isLoading: false,
    stores: [],
    isFetched: false
}

export default function(state=initialState, action)
{
        switch(action.type)
        {
            case 'FETCH_STORES_START': {
                return {...state, isLoading: true, isFetched: false};
                break;
            }
            case 'RECEIVE_STORES': {
                return {...state, isLoading: false, stores: action.payload, isFetched: true};
                break;
            }
        }
        return state;
}
