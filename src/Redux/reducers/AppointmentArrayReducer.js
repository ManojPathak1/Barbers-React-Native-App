const initialState = {
    appointments: []
}

export default function(state=initialState, action)
{
        switch(action.type)
        {
            case 'DONE_APPOINTMENT': {
                return {...state, appointments: [...state.appointments, action.payload]};
                break;
            }

}
return state;
}
