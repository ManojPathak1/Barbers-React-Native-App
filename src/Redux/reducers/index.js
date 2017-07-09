import {combineReducers} from 'redux';
import StoresReducer from './storesReducer';
import StoreObjReducer from './storeObjReducer';
import NavigationReducer from './navigationReducer';
import ResetReducer from './resetReducer';
import UserObjReducer from './userObjReducer';
import ProfessionalsReducer from './professionalsReducer';
import ProfileReducer from './profileReducer';
import AppointmentReducer from './AppointmentReducer';
import AppointmentArrayReducer from './AppointmentArrayReducer';

const allReducers = combineReducers({
    stores: StoresReducer,
    storeObj: StoreObjReducer,
    forNavigation: NavigationReducer,
    resetValue: ResetReducer,
    userObj: UserObjReducer,
    professionals: ProfessionalsReducer,
    profile: ProfileReducer,
    appointment: AppointmentReducer,
    appointmentsArray: AppointmentArrayReducer
});

export default allReducers;
