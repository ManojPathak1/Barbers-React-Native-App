import React, {Component} from 'react';
import {TouchableHighlight, View, Text} from 'react-native';

export default class DateElement extends Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return (
            <View style={[{margin: 5, elevation: 1, borderRadius: 10, backgroundColor: 'white'}, this.props._style]}>
                <Text style={{color: 'black', marginLeft: 10, fontSize: 15, fontWeight: 'bold'}}>{this.props.obj.day}</Text>
                     <View style={{flexDirection: 'row'}}>
                         <Text style={{color: 'red', marginLeft: 10, fontSize: 30, fontWeight: 'bold'}}>{this.props.obj.date}</Text>
                         <Text style={{color: 'black', marginLeft: 5, fontSize: 15, fontWeight: 'bold', marginTop: 15}}>{this.props.obj.month}</Text>
              </View>
              </View>
        );
    }
}
