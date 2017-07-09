var Moment = require('moment');
var obj = Moment();
var date = obj.format('DD');
var day = obj.format('ddd');
var month = obj.format('MMM');
var year = obj.format('YY');
var dateObj = {id: 0, date: date, day: day, month: month, year: year};

const initialState = {
    noOfSeats: 1,
    date: dateObj,
    professional: null,
    time: null,
    service: null
}

export default function(state=initialState, action)
{
        switch(action.type)
        {
            case 'SEATS_BOOK': {
                return {...state, noOfSeats: action.payload};
                break;
            }
            case 'DATE_SELECTED': {
                return {...state, date: action.payload};
                break;
            }
            case 'PROFESSIONAL_SELECTED': {
                return {...state, professional: action.payload};
                break;
            }
            case 'TIME_SELECTED': {
                return {...state, time: action.payload};
                break;
            }
            case 'SERVICE_SELECTED': {
                return {...state, service: action.payload};
                break;
            }
        }
        return state;
}
