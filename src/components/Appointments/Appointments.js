import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight, ScrollView} from 'react-native';
import IconE from 'react-native-vector-icons/Entypo';
import IconI from 'react-native-vector-icons/Ionicons';

class Appointments extends Component
{
    getAllAppointments()
    {
        return [1,2,3,4,5,6,7,8,9,10,11,12].map((a)=>{
            return (
                <TouchableHighlight onPress={()=>{this.props.navigation.navigate('AppointmentDetail')}} key={a}>
                    <View style={styles.list}>
                        <Image source={{uri: 'https://s-media-cache-ak0.pinimg.com/736x/3b/8e/28/3b8e28e0412be21dee7d4e9b4cb9ca6a.jpg'}} style={styles.image} />
                        <View style={styles.info}>
                            <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 5, color: 'green'}}>Manoj Pathak</Text>
                            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 5}}>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <IconE name="calendar" size={25} color="gray" />
                                <Text style={{fontWeight: 'bold', marginLeft: 5}}>2017-03-16</Text>
                                </View>
                                <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 15}}>
                                <IconE name="clock" size={25} color="gray" />
                                <Text style={{fontWeight: 'bold', marginLeft: 5}}>17:27:39</Text>
                                </View>
                            </View>
                            <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>HAIR CUT</Text>
                        </View>
                        <View style={{flex: 0.3, alignItems: 'flex-end', marginRight: 10}}>
                            <IconI name="ios-arrow-forward" size={35} color="red" />
                        </View>
                    </View>
                    </TouchableHighlight>
            );
        });
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
                    <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>APPOINTMENTS</Text>
                </View>
            </View>
            <View style={{flex: 1}}>
                <ScrollView>
                    {this.getAllAppointments()}
                    <View style={{padding: 2}}>
                    </View>
                </ScrollView>
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
    list: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        marginLeft: 10,
        borderBottomWidth: 0.2
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 50
    },
    info: {
        justifyContent: 'center',
        marginLeft: 10,
        flex: 3
    }
});

export default Appointments;
