import { StackNavigator } from 'react-navigation';

import MyToolbar from '../MyToolbar';
import Detail from '../Detail';
import BookAppointment from '../components/bookAppointment';
import SelectServices from '../components/SelectServices/SelectServices';

import Search from '../components/Search/Search';

import Login from '../components/LoginScreen/Login';
import Register from '../components/LoginScreen/Register';
import OTP from '../components/LoginScreen/OTP';
import ForgotPasswordScreen from '../components/LoginScreen/ForgotPasswordScreen';

import MyProfile from '../components/Profile/MyProfile';
import CompleteProfile from '../components/Profile/CompleteProfile';

import Appointments from '../components/Appointments/Appointments';
import AppointmentDetail from '../components/Appointments/AppointmentDetail';

import Favourites from '../components/Favourites/Favourites';

import Feedback from '../components/Feedback/Feedback';

import Notification from '../components/Notification/Notification';

import Settings from '../components/Settings/Settings.js';

import Help from '../components/Help/Help';

const MainStack = StackNavigator({

  MyToolbar: {
      screen: MyToolbar,
      navigationOptions: {
          header: {
              visible: false
          }
      }
  },
  Detail: {
      screen: Detail,
      navigationOptions: {
          header: {
              visible: false
          }
      }
  },
  BookAppointment: {
      screen: BookAppointment,
      navigationOptions: {
          header: {
              visible: false
          }
      }
  },
  SelectServices: {screen: SelectServices},


  Search: {screen: Search},

// Login Screen
  Login: {
      screen: Login,
      navigationOptions: {
          header: {
              visible: false
          }
      }
   },
  Register: {
      screen: Register,
      navigationOptions: {
          title: 'REGISTER',
        header: {
            tintColor: 'white',
            style: {
                backgroundColor: '#0d2f66'
            }
        }
      }
  },
  OTP: {
      screen: OTP,
      navigationOptions: {
        title: 'OTP VERIFICATION',
        header: {
            tintColor: 'white',
            style: {
                backgroundColor: '#0d2f66'
            }
        }
    }
  },
  ForgotPassword: {
      screen:  ForgotPasswordScreen,
      navigationOptions: {
          header: {
              visible: false
          }
      }
  },

  MyProfile: {
       screen: MyProfile,
       navigationOptions: {
           header: {
               visible: false
           }
       }
    },
  CompleteProfile: {
      screen: CompleteProfile,
      navigationOptions: {
          header: {
              visible: false
          }
      }
  },


  Appointments: {
      screen: Appointments,
      navigationOptions: {
          header: {
              visible: false
          }
      }
   },
  AppointmentDetail: {
      screen: AppointmentDetail,
      navigationOptions: {
          header: {
              visible: false
          }
      }
  },

  Favourites: {
      screen: Favourites,
      navigationOptions: {
          header: {
              visible: false
          }
      }
  },

  Feedback: {
      screen: Feedback,
      navigationOptions: {
          header: {
              visible: false
          }
      }
   },

  Notification: {
      screen: Notification,
      navigationOptions: {
          header: {
              visible: false
          }
      }
  },

  Settings: {
      screen: Settings,
      navigationOptions: {
          header: {
              visible: false
          }
      }
  },

  Help: {
      screen: Help,
      navigationOptions: {
          header: {
              visible: false
          }
      }
  },
});

export default MainStack;
