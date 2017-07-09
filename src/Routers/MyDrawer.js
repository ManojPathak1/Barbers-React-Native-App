import { DrawerNavigator } from 'react-navigation';
import DrawerView from '../components/drawer/drawerView';
import MainStack from './MainStack';

const MyDrawer = DrawerNavigator({
        MainStack: { screen: MainStack },
    },
    {
        initialRouteName: 'MainStack',
        drawerWidth: 250,
        contentComponent: DrawerView
    }
);

export default MyDrawer;
