import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Alert
} from 'react-native';
import {connect} from 'react-redux';
import MyTabLayout from './MyTabLayout';
import MyCustomNavBar from './MyCustomNavBar';
import Detail from './Detail';
import BookAppointment from './components/bookAppointment';
import { StackNavigator } from 'react-navigation';
import DrawerView from './components/drawer/drawerView';
import {addNavigation} from './Redux/actions/index';
import {bindActionCreators} from 'redux';
import SInfo from 'react-native-sensitive-info';
import {receiveProfile} from './Redux/actions/index';
import {logIn} from './Redux/actions/index';

class MyToolbar extends Component {
      constructor(props)
      {
        super(props);
      }
      componentWillMount()
      {
          // Check for the shared preference.
          SInfo.getAllItems({
              sharedPreferencesName: 'mySharedPrefs',
              keychainService: 'myKeychain'}).then((values) => {
                  // Algorithm for shared preference.
                  if(!(JSON.stringify(values)=="{}" || values.ProfileInfo=='NONE'))
                  {
                      this.props.receiveProfile(JSON.parse(values.ProfileInfo));
                      this.props.logIn(JSON.parse(values.ProfileInfo));
                  }
              });
              this.props.addNavigation(this.props.navigation);
    }
    render() {
        return (
            <View style={styles.container}>
                <MyCustomNavBar navigation={this.props.navigation} />
                <MyTabLayout />
            </View>
        );
  }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        addNavigation: addNavigation,
        receiveProfile: receiveProfile,
        logIn: logIn,
    }, dispatch);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  toolbar: {
    flex: 1,
    backgroundColor: '#243b60',
    flexDirection: 'row',
    alignItems: 'center'
  },
  body: {
    flex: 12
  },
  text: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'sans-serif-light',
  },
  label: {
    flex: 2,
    alignItems: 'center'
  },
  ham: {
    width: 50
  },
  settings: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

export default connect(null, mapDispatchToProps)(MyToolbar);
