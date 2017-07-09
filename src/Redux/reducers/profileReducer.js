const initialState = {
    profile: null,
    isFetched: null
}

export default function(state=initialState, action)
{
        switch(action.type)
        {
            case 'RECEIVE_PROFILE': {
                return {...state, profile: action.payload, isFetched: true};
                break;
            }
            case 'LOGOUT': {
                return {...state, profile: null, isFetched: null};
                break;
            }
        }
        return state;
}
