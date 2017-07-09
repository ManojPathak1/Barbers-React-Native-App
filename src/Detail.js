import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import MyTabLayout from './MyTabLayout';
import {connect} from 'react-redux';
import DetailsTab from './components/Detail/DetailsTab';
import IconI from 'react-native-vector-icons/Ionicons';

class Detail extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
          <View style={styles.toolbar}>
              <TouchableHighlight style={{padding: 15}} onPress={()=>{this.props.navigation.goBack()}}>
                  <IconI name="md-arrow-back" size={30} color="white" />
              </TouchableHighlight>
              <View style={{marginLeft: 50}}>
                  <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>DETAILS</Text>
              </View>
          </View>
          <DetailsTab />
      </View>
    )
  }
}

function mapStateToProps(state)
{
    return {
        storeObj: state.storeObj
    }
}

const styles = StyleSheet.create({
    toolbar: {
        height: 55,
        alignItems: 'center',
        backgroundColor: '#0d2f66',
        flexDirection: 'row'
    },
});

export default connect(mapStateToProps)(Detail);
