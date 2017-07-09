import { StackNavigator } from 'react-navigation';
import Splash from '../components/SplashScreen/Splash';
import HomeScreen from '../HomeScreen';
import MyDrawer from './MyDrawer';

const TopStack = StackNavigator({
    Splash: {
        screen: Splash,
        navigationOptions: {
            header: {
                visible: false
            }
        }
    },

  Home: {
      screen: HomeScreen,
      navigationOptions: {
          header: {
              visible: false
          }
      }
  },
  MyDrawer: {
      screen: MyDrawer,
      navigationOptions: {
          header: {
              visible: false
          }
      }
  }

});

export default TopStack;
