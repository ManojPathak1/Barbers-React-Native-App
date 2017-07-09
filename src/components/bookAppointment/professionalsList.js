import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableHighlight} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import TimeList from './TimeList';
import {professionalSelected} from '../../Redux/actions/AppointmentAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import IconFA from 'react-native-vector-icons/FontAwesome';

var timeList = ["10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "01:00", "01:30"];
var professionalsArray = [];
class ProfessionalList extends Component
{
    constructor(props)
    {
        super(props);
    }
    getProfessionalsList=()=>
    {
        return this.props.storeObj.professionalsList;
    }
    _renderHeader=(professional)=> {
    return (
      <View style={{flexDirection: 'row', borderColor: 'gray', alignItems: 'center', backgroundColor: '#f2f4f7', borderTopWidth: 0.2, elevation: 10}} >
          {professional.image==null?<Image
              style={styles.image}
              source={{uri: 'http://i.imgur.com/NGz1YlF.png'}}
            />: <Image
                style={styles.image}
                source={{uri: professional.image}}
              />}
        <View>
            <Text style={{fontSize: 17, fontWeight: 'bold', margin: 5}}>{professional.user_name}</Text>
            <View style={{flexDirection: 'row', margin: 5}}>
                <IconFA name="star" size={17} color="gold" />
                <Text style={{color: 'gold', marginLeft: 5}}>4.0</Text>
            </View>
        </View>
      </View>
    );
  }
  _renderContent=(section)=> {
   return (
     <TimeList storeObj={this.props.storeObj} navigation={this.props.navigation} />
   );
 }
 _handleOnChange=(index)=>{
     this.props.professionalSelected(professionalsArray[index]);
 }
 render() {
 return (
   <Accordion
     sections={this.getProfessionalsList()}
     onChange={this._handleOnChange}
     renderHeader={this._renderHeader}
     renderContent={this._renderContent}
   />
 );
}
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        professionalSelected: professionalSelected
    }, dispatch);
}

const styles = StyleSheet.create({
    image: {
      height: 54,
      width: 54,
      borderRadius: 50,
      alignSelf: 'center',
      margin: 10
  },
  title: {
      fontSize: 17,
      fontWeight: 'bold',
      margin: 5,
      color: 'black'
  }
});

export default connect(null, mapDispatchToProps)(ProfessionalList);
