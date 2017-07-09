import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, ScrollView, NetInfo, Alert} from 'react-native';
import { TabNavigator } from 'react-navigation';
import Description from '../../Description';
import Services from '../../components/services';

class DescriptionTab extends Component {
  static navigationOptions = {
    tabBar: {
      label: 'Description',
      icon: ({ tintColor }) => (
        <Text>Hello</Text>
      ),
    },
  }
  render() {
    return (
        <Description />
    );
  }
}

class ServicesTab extends Component {
  static navigationOptions = {
    tabBar: {
      label: 'Services',
      icon: ({ tintColor }) => (
        <Text>Hello</Text>
      ),
    },
  }

  render() {
    return (
     <Services />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});

const DetailsTab = TabNavigator({
  DescriptionTab: {
    screen: DescriptionTab,
  },
  ServicesTab: {
    screen: ServicesTab,
  },
}, {
    tabBarOptions: {
      activeTintColor: 'white',
      labelStyle: {
      fontSize: 15,
      fontWeight: 'bold',
    },
    indicatorStyle: {
        backgroundColor: 'white',
        height: 3,
    },
    style: {
      backgroundColor: '#0d2f66',
    }
  }});

export default DetailsTab;
