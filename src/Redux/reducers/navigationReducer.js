const initialState = {
    navigation: null
}

export default function(state=initialState, action)
{
        switch(action.type)
        {
            case 'SAVE_NAVIGATION': {
                return {...state, navigation: action.payload};
                break;
            }
        }
        return state;
}
