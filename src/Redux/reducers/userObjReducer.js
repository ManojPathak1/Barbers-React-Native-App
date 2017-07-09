const initialState = {
    isLoggedIn: false,
    userObj: null
}

export default function(state=initialState, action)
{
        switch(action.type)
        {
            case 'LOG_IN': {
                return {...state, isLoggedIn: true, userObj: action.payload};
                break;
            }
            case 'LOGOUT': {
                return {...state, isLoggedIn: false, userObj: null};
                break;
            }
        }
        return state;
}
