import React, {Component} from 'react';
import {View, StyleSheet, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class _Hamburger extends Component
{
  constructor(props)
  {
    super(props);
  }
  render()
  {
    return (
        <TouchableHighlight style={styles.container} onPress={()=>{this._onPress()}} underlayColor='transparent'>
        <Icon name="ios-menu-outline" size={30} color="white" />
      </TouchableHighlight>
  );
  }
  _onPress()
  {
    this.props.navigation.navigate('DrawerOpen');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    marginLeft: 10
  }
});
