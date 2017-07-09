import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, ScrollView, NetInfo, Alert} from 'react-native';
import { TabNavigator } from 'react-navigation';
import Stores from './stores';
import MyCustomNavBar from './MyCustomNavBar';
import Professionals from './components/ProfessionalsTab/Professionals';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconE from 'react-native-vector-icons/Entypo';

class MyHomeScreen extends Component {
  static navigationOptions = {
    tabBar: {
        label: 'STORES',
      icon: ({ tintColor }) => (
        <IconMCI name="store" size={25} color="white" />
      ),
    },
  }

    constructor(props)
    {
        super(props);
    }

    netInfo()
    {
        NetInfo.fetch().done((reach) => {
            if(reach=="NONE")
            {
                this.setState({isNetAvailable: false});
            }
            else
            {
                this.setState({isNetAvailable: true});
            }
        });
      }

      getView()
      {
          return (
                  <View style={{borderWidth: 1, backgroundColor: 'white'}}>
                      <Stores navigation={this.props.navigation} />
                  </View>
          );
      }

      render()
      {
          return (
              <View>{this.getView()}</View>
          );
      }
}

class ProfessionalTab extends Component {
  static navigationOptions = {
    tabBar: {
      label: 'Professionals',
      icon: ({ tintColor }) => (
        <IconE name="user" size={25} color="white" />
      ),
    },
  }

  render() {
    return (
        <ScrollView>
            <View style={{flex: 1, borderWidth: 1}}>
                <Professionals />
            </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});

const MyTabLayout = TabNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: ProfessionalTab,
  },
}, {
  tabBarOptions: {
    activeTintColor: 'white',
    labelStyle: {
        fontSize: 8,
    fontWeight: 'bold',
  },
  showIcon: true,
  indicatorStyle: {
      backgroundColor: 'white',
      height: 2,
  },
  style: {
    backgroundColor: '#0d2f66',
  }
}});

export default MyTabLayout;
