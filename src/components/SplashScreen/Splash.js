import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableHighlight} from 'react-native';
import {NavigationActions} from 'react-navigation';
import LoadingIndicator from '../home/loadingIndicator';

class Splash extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {isLoading: true, colorIndex: 0};
    }
    componentDidMount()
    {
        setTimeout(()=>{
            this.setState({isLoading: false})
        }, 3000);
    }
    check()
    {
        if(!this.state.isLoading)
        {
            const resetAction = NavigationActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Home'})
              ]
          });
            this.props.navigation.dispatch(resetAction);
        }
    }
    getBackgroundColor()
    {
        switch(this.state.colorIndex)
        {
            case 0:  return '#0d2f66';
            case 1: return '#F44336';
            case 2: return '#4CAF50';
            case 3: return '#795548';
            case 4: return '#3498db';
            case 5: return '#673AB7';
            case 6: return '#f1c40f';
            case 7: return '#95a5a6';
            case 8: return '#f39c12';
            case 9: return '#c0392b';
            case 10: return '#e74c3c';
            case 11: return '#F44330';
            case 12: return '#4CAF51';
            case 13: return '#795542';
            case 14: return '#3498d3';
            case 15: return '#673AB4';
            case 16: return '#f1c405';
            case 17: return '#95a5a6';
            case 18: return '#f39c17';
            case 19: return '#c03928';
            case 20: return '#e74c39';
        }
    }
    changeColorIndex()
    {
        this.setState({colorIndex: this.state.colorIndex+1});
        console.log(this.state.colorIndex);
    }
    render()
    {
        this.check();
        return (
            <TouchableHighlight
                style={[styles.container, {backgroundColor: this.getBackgroundColor()}]}
                underlayColor='transparent' onPress={()=>{this.changeColorIndex()}}>
                <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                    <Text style={{fontSize: 30, fontWeight: '500', color: 'white'}}>book my seat</Text>
                    <LoadingIndicator />
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default Splash;
