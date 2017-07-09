import React, {Component} from 'react';
import {View, Image, TouchableHighlight, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import IconFA from 'react-native-vector-icons/FontAwesome';

class HeaderImage extends Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        const storeObj = this.props.storeObj;
        const navigation = this.props.forNavigation.navigation;
        const template = <View style={{alignSelf: 'flex-end', marginRight: 5, marginTop: 5}}>
            <IconFA name="star" size={25} color="gold" />
            <Text style={{color: 'gold'}}>4.0</Text>
        </View>;
        return (
            <View>
            <View>
                {
                    storeObj.image==""?<Image
                      style={styles.image}
                      resizeMode='stretch'
                      source={{uri: 'https://s-media-cache-ak0.pinimg.com/originals/bc/0a/6b/bc0a6bfd3855ebbe25b409df516287a9.jpg'}}
                    >
                        {template}
                    </Image>:
                    <Image
                      style={styles.image}
                      resizeMode='stretch'
                      source={{uri: storeObj.image}}
                    >
                        {template}
                    </Image>
                }
            </View>
                <View style={{alignItems: 'center'}}>
                    <TouchableHighlight onPress={()=>{navigation.navigate('BookAppointment', {storeObj: storeObj})}} style={styles.button}>
                      <Text style={styles.buttonText}>BOOK</Text>
                     </TouchableHighlight>
                </View>
              </View>
        );
    }
}

function mapStateToProps(state)
{
    return {
        forNavigation: state.forNavigation
    }
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        height: 180
    },
        buttonText: {
          fontSize: 15,
          color: 'white'
         },
      button : {
         height : 50,
         width: 90,
         justifyContent : 'center',
         alignItems : 'center',
         backgroundColor: 'green'
       },
});

export default connect(mapStateToProps)(HeaderImage);
