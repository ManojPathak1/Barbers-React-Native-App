import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight, Image, Button, ScrollView} from 'react-native';
import IconI from 'react-native-vector-icons/Ionicons';

class Notification extends Component
{
    // Here api hit.
    getNotificationList()
    {
        return [1,2,3,4,5,6,7,8,9,10,11,12].map((key)=>{
            return (
                <View style={{borderBottomWidth: 0.2, borderColor: 'green', flexDirection: 'row'}} key={key}>
                    <Image style={{width: 80, height: 80, borderRadius: 40, margin: 10}} source={{uri: 'http://i.imgur.com/NGz1YlF.png'}} />
                    <View style={{marginTop: 10, flex: 1}}>
                        <Text style={{fontSize: 15, fontWeight: 'bold'}}>Jonathan Doe has been changed appointment.</Text>
                        <View style={{flexDirection: 'row', justifyContent: 'flex-end', margin: 10}}>
                            <Button title="REJECT" onPress={()=>{}} disabled={true} />
                            <View style={{marginLeft: 20}}>
                                <Button title="EDIT" onPress={()=>{}} color="green" />
                            </View>
                        </View>
                    </View>
                </View>
            );
        });
    }
    render()
    {
        return (
            <View style={styles.container}>
                {/* Toolbar */}
                <View style={styles.toolbar}>
                    <TouchableHighlight style={{padding: 15}} onPress={()=>{this.props.navigation.navigate('DrawerOpen')}}>
                        <IconI name="ios-menu-outline" size={30} color="white" />
                    </TouchableHighlight>
                    <View style={{marginLeft: 50}}>
                        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>NOTIFICATION</Text>
                    </View>
                </View>

                {/* Rest of the view. */}
                <View style={{flex: 1}}>
                    <ScrollView>
                    {this.getNotificationList()}
                </ScrollView>
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

export default Notification;
