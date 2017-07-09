const initialState = {
    storeObj: null
}

export default function(state=initialState, action)
{
        switch(action.type)
        {
            case 'ON_CARD_CLICK': {
                return {...state, storeObj: action.payload};
                break;
            }
        }
        return state;
}
