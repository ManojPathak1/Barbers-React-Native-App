import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import _Hamburger from './_Hamburger';
import IconI from 'react-native-vector-icons/Ionicons';
import IconEI from 'react-native-vector-icons/EvilIcons';
import IconO from 'react-native-vector-icons/Octicons';

export default class MyCustomNavBar extends Component
{
  constructor(props)
  {
    super(props);
  }
  getView()
  {
      return (
        <View style={styles.container}>
        <View style={styles.ham}>
        <_Hamburger navigation={this.props.navigation}/>
        </View>
        <View style={styles.titleWrapper}>
        <Text style={styles.title}>HOME</Text>
        </View>
        <View style={styles.actionWrapper}>
            <TouchableHighlight style={{padding: 10, marginRight: 20}} onPress={()=>{this.props.navigation.navigate('Search')}}>
                <IconO name="settings" size={30} color="white" />
            </TouchableHighlight>
        <TouchableHighlight style={{padding: 10, marginRight: 10}} onPress={()=>{this.props.navigation.navigate('Search')}}>
            <IconEI name="search" size={30} color="white" />
        </TouchableHighlight>
        </View>
        </View>
      );
  }
  render()
  {
    return (
      this.getView()
  );
  }
}

const styles= StyleSheet.create({
  container: {
    height: 54,
    backgroundColor: '#0d2f66',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  ham: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  },
  titleWrapper: {
    flex: 4
  },
  title: {
    alignSelf: 'center',
    fontSize: 25,
    color: 'white'
  },
  actionWrapper: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});
