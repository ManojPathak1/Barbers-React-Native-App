import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

class ForgotPasswordScreen extends Component
{
    constructor(props){
        super(props);
        this.state = {active: false};
    }
    render()
    {
        return (
            <View style={styles.container}>
                <TouchableOpacity activeOpacity={1} onPress={!this.state.active?null:()=>{}} style={{borderWidth: 1, borderRadius: 5, backgroundColor: 'red', width: 100, height: 100}}>
                    <Text>LogIn</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 2
    }
});

export default ForgotPasswordScreen;
