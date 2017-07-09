import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Button, TouchableHighlight} from 'react-native';
import IconI from 'react-native-vector-icons/Ionicons';

class Feedback extends Component
{
    render()
    {
        return (
            <View style={styles.container}>
                <View style={styles.toolbar}>
                    <TouchableHighlight style={{padding: 15}} onPress={()=>{this.props.navigation.navigate('DrawerOpen')}}>
                        <IconI name="ios-menu-outline" size={30} color="white" />
                    </TouchableHighlight>
                    <View style={{marginLeft: 50}}>
                        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>FEEDBACK</Text>
                    </View>
                </View>
                <View style={{alignItems: 'center', justifyContent: 'center', margin: 20}}>
                <Text style={styles.message}>We always look forward to hearing from our</Text>
                <Text style={styles.message}>users! Send us your feedback, and we'll be</Text>
                <Text style={styles.message}>sure to get back to you as soon as possible.</Text>
                <TextInput
                    editable = {true}
                    maxLength = {140}
                    multiline={true}
                    style={{width: 300, borderRadius: 20, alignItems: 'center', justifyContent: 'center', marginTop: 50, height: 200, padding: 20, fontSize: 20, color: '#51966b', fontWeight: 'bold', borderWidth: 0.2}}
                    placeholder="What on your mind?"
                    placeholderTextColor="gray"
                    underlineColorAndroid='transparent'
                    />
                    <View style={{marginTop: 100}}>
                    <Button title="Submit" onPress={()=>{}} />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 0.1
    },
    message: {
        fontSize: 16,
        fontWeight: 'bold'
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

export default Feedback;
