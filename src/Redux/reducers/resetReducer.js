const initialState = {
    reset: null
}

export default function(state=initialState, action)
{
        switch(action.type)
        {
            case 'RESET': {
                return {...state, reset: action.payload};
                break;
            }
        }
        return state;
}
