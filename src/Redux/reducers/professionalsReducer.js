const initialState = {
    professionals: [],
    isFetched: null
}

export default function(state=initialState, action)
{
        switch(action.type)
        {
            case 'GET_PROFESSIONALS': {
                return {...state, professionals: action.payload, isFetched: true};
                break;
            }
        }
        return state;
}
