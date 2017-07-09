import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet, Image, Button, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Professionals from './_Professionals';
import HeaderImage from './components/headerImage';
import {connect} from 'react-redux';

class Description extends Component
{
  render()
  {
    return (
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <View style={{flex: 1}}>
        <HeaderImage navigation={this.props.forNavigation.navigation} storeObj={this.props.storeObj.storeObj} />
        <Text style={styles.title}>{this.props.storeObj.storeObj.name}</Text>
        <Text style={styles.desc}>{this.props.storeObj.storeObj.address}</Text>
        <View style={{backgroundColor: 'white'}}>
          <Text style={styles.title}>DESCRIPTION</Text>
          <Text style={styles.desc}>{this.props.storeObj.storeObj.description}</Text>
        </View>
      <View style={{flexDirection: 'row', marginTop: 10, marginBottom: 10, borderWidth: 1}}>
        <Professionals professionalsList={this.props.storeObj.storeObj.professionalsList} />
      </View>
      </View>
      </ScrollView>
    );
  }
}

function mapStateToProps(state)
{
    return {
        storeObj: state.storeObj,
        forNavigation: state.forNavigation
    }
}

const styles = StyleSheet.create({
   title: {
     fontSize: 18,
     fontWeight: 'bold',
     color: 'black',
     marginLeft: 10,
     marginTop: 10,
   },
   desc: {
     fontSize: 15,
     marginLeft: 10,
     marginTop: 5,
     marginBottom: 10
   }
});

export default connect(mapStateToProps)(Description);
