import React, {Component} from 'react';
import {View, Text, Alert,Image, StyleSheet, Button, TouchableHighlight, ToastAndroid, LayoutAnimation} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {onCardClick} from './Redux/actions/index';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconE from 'react-native-vector-icons/Entypo';
import IconI from 'react-native-vector-icons/Ionicons';

class MyCard extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {inWishList: false, size: 45};
  }
  goToDetailPage()
  {
      this.props.onCardClick(this.props.storeObj);
      this.props.navigation.navigate('Detail', {storeObj: this.props.storeObj});
  }
  goToBookAppointmentPage()
  {
      this.props.onCardClick(this.props.storeObj);
      this.props.navigation.navigate('BookAppointment', {storeObj: this.props.storeObj})
  }
  wishlistTouchableAction() {
      if(!this.state.inWishList)
        ToastAndroid.show('Added to your wishlist!', ToastAndroid.SHORT, ToastAndroid.CENTER);
      this.setState({inWishList: !this.state.inWishList});
  }
  render()
  {
      const storeObj = this.props.storeObj;
    return (
      <View style={styles.container}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={{width: 30, height: 30, margin: 5, marginLeft: 10}}
                source={{uri: 'https://cdn2.iconfinder.com/data/icons/classic-development-circle/512/barber-512.png'}}
              />
              <Text style={styles.title}>{storeObj.name}</Text>
          </View>
      <TouchableHighlight onPress={()=>{this.goToDetailPage()}} style={{flex: 1, justifyContent: 'center', borderTopLeftRadius: 5, borderTopRightRadius: 5}}>
          {
              storeObj.image==""?<Image
                resizeMode='stretch'
                style={styles.image}
                source={{uri: 'http://www.polonicabeautyparlour.com/images/banner4.jpg'}}
              />
              :<Image
                style={styles.image}
                source={{uri: storeObj.image}}
              />
          }
                </TouchableHighlight>
                <View style={{flexDirection: 'row', marginLeft: 10, marginRight: 10, borderBottomWidth: 0.2, borderColor: 'gray', flex: 1, alignItems: 'center'}}>
                    <TouchableHighlight onPress={()=>{this.wishlistTouchableAction()}} underlayColor="transparent">
                        {this.state.inWishList?(<IconI name="ios-heart" size={this.state.size} color="#bc0b0b" />):(<IconI name="ios-heart-outline" size={this.state.size} color="black" />)}
                    </TouchableHighlight>
                    <View style={{alignItems: 'center', margin: 5, marginLeft: 10}}>
                        <IconFA name="star" size={25} color="gold" />
                        <Text style={{color: 'gold'}}>4.0</Text>
                    </View>
                    <View style={{alignItems: 'flex-end', flex: 1, justifyContent: 'center'}}>
                        <Button title='BOOK'onPress={()=>{this.goToBookAppointmentPage()}} />
                    </View>
                </View>
        <View style={styles.info}>
            <View>
                <Text style={{color: 'black'}}>{storeObj.address}</Text>
            </View>
        </View>
        <View style={{marginLeft: 10, flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
            <IconE name="location-pin" size={18} color="#7f0e7d" />
            <Text style={{fontSize: 16, color: '#7f0e7d', fontWeight: 'bold'}}>{storeObj.distance_KM} KM</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    borderColor: 'white'
  },
  image: {
      flex: 1,
      height: 200
  },
  title: {
    fontSize: 16,
    color: 'black',
    alignItems: 'flex-start',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontWeight: 'bold',
    marginLeft: 5
  },
  info: {
      flex: 1,
    flexDirection: 'row',
    marginTop: 5,
    marginLeft: 10
  }
});

function mapStateToProps(state)
{
    return {
        storeObjR: state.storeObj
    }
}
function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        onCardClick: onCardClick
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MyCard);
