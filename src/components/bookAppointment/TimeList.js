import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight, Button} from 'react-native';

var timeList = ["10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30"];
class TimeList extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {timeSelected: []};
    }
    _onPressTime(time)
    {
        if(this.state.timeSelected.indexOf(time)>-1)
        {
            var array = this.state.timeSelected;
            var index = array.indexOf(time);
            array.splice(index, 1);
            this.setState({timeSelected: array});
        }
        else
        {
        this.setState({timeSelected: [...this.state.timeSelected, time]});
        this.props.navigation.navigate('SelectServices', {storeObj: this.props.storeObj, time: time});
        }
    }
    getColor(time)
    {
        return this.state.timeSelected.indexOf(time)>-1?['green', 'white']:['white', 'gray'];
    }
    render()
    {
        return (
            <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', borderColor: 'gray', backgroundColor: '#f2f4f7', borderBottomLeftRadius: 5, borderBottomRightRadius: 5}}>
              {
                  timeList.map((time)=>{
                      return <TouchableHighlight key={time}
                                onPress={()=>{this._onPressTime(time)}}
                                style={{backgroundColor: this.getColor(time)[0], margin: 5, elevation: 1, borderRadius: 3}}>
                                    <Text style={[styles.time, {color: this.getColor(time)[1]}]}>{time}</Text>
                            </TouchableHighlight>
                  })
              }
              {this.state.timeSelected.length==0?<Text></Text>:<Button title="Clear" onPress={()=>{this.setState({timeSelected: []})}}/>}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    time: {
        fontSize: 15,
        fontWeight: 'bold',
        margin: 5
    },
});

export default TimeList;
