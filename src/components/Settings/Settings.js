import React, {Component} from 'react';
import {View, Text, StyleSheet, Switch, TouchableHighlight} from 'react-native';
import IconI from 'react-native-vector-icons/Ionicons';

class Settings extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {isSwitchOn: true};
    }
    render()
    {
        return (
            <View style={styles.container}>
                <View style={styles.toolbar}>
                    <TouchableHighlight style={{padding: 15}} onPress={()=>{this.props.navigation.navigate('DrawerOpen')}}>
                        <IconI name="ios-menu-outline" size={30} color="white" />
                    </TouchableHighlight>
                    <View style={{marginLeft: 50}}>
                        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>SETTINGS</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', margin: 10, justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>Notification</Text>
                    <Switch
                      onValueChange={(value) => this.setState({isSwitchOn: value})}
                      value={this.state.isSwitchOn} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    toolbar: {
        height: 55,
        elevation: 1,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#0d2f66',
        backgroundColor: '#0d2f66',
        flexDirection: 'row'
    },
});

export default Settings;
