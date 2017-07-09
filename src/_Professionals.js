import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight, Image} from 'react-native';

  export default class Professional extends Component
  {
    constructor(props)
    {
      super(props);
    }
    getList()
    {
      return this.props.professionalsList.map((obj)=>{
        return (
            <View style={{margin: 5, justifyContent: 'center', alignItems: 'center'}} key={obj.id}>
                <View style={{borderWidth: 2, borderColor: '#f4427d', borderRadius: 50}}>
                  {obj.image==null?<Image
                          style={styles.image}
                          source={{uri: 'http://i.imgur.com/NGz1YlF.png'}}
                        />: <Image
                            style={styles.image}
                            source={{uri: obj.image}}
                          />}
                </View>
              <Text style={{fontWeight: 'bold', color: '#7f0e7d'}}>{obj.user_name}</Text>
          </View>);
      });
    }
    render()
    {
      return (
        <View style={{flexWrap: 'wrap', borderRadius: 10, flex: 1}}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black', marginLeft: 10, marginRight: 10}}>PROFESSIONALS</Text>
        <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
          {this.getList()}
        </View>
        </View>
      );
    }
  }

const styles= StyleSheet.create({
  pro: {
    width: 95,
    height: 95,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 50,
    alignSelf: 'center',
    margin: 3
  }
});
