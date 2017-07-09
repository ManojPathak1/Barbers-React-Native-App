import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import IconI from 'react-native-vector-icons/Ionicons';

class Favourites extends Component
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
                        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>FAVOURITES</Text>
                    </View>
                </View>
                <View style={{flex: 1}}>

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

export default Favourites;
