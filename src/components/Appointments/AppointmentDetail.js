import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight, Image} from 'react-native';
import IconI from 'react-native-vector-icons/Ionicons';
import IconE from 'react-native-vector-icons/Entypo';

class AppointmentDetail extends Component
{
    render()
    {
        return (
            <View style={{flex: 1}}>
            <View style={{flex: 5, backgroundColor: '#1a3b70'}}>
                <View style={styles.toolbar}>
                <TouchableHighlight style={{ marginLeft: 10, width: 30}} onPress={()=>{this.props.navigation.goBack()}}>
                        <IconI name="md-arrow-back" size={30} color="white" />
                        </TouchableHighlight>
                        <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>APPOINTMENT DETAIL</Text>
                </View>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
                    <Image
                        source={{uri: 'https://s-media-cache-ak0.pinimg.com/736x/3b/8e/28/3b8e28e0412be21dee7d4e9b4cb9ca6a.jpg'}}
                        style={styles.image} />
                    <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>Manoj Pathak</Text>
                </View>
                </View>
                <View style={{flex: 10, margin: 10}}>
                    <Text style={styles.label}>APPOINTMENT DATE & TIME</Text>
                    <View style={{flexDirection: 'row', marginTop: 5}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <IconE name="calendar" size={25} color="gray" />
                        <Text style={styles.text}>2017-03-16</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 15}}>
                        <IconE name="clock" size={25} color="gray" />
                        <Text style={styles.text}>17:27:39</Text>
                        </View>
                    </View>
                    <View style={{marginTop: 15}}>
                        <Text style={styles.label}>PROFESSIONAL</Text>
                        <View style={{flexDirection: 'row', marginTop: 5, alignItems: 'center'}}>
                        <Image
                            source={{uri: 'https://s-media-cache-ak0.pinimg.com/736x/3b/8e/28/3b8e28e0412be21dee7d4e9b4cb9ca6a.jpg'}}
                            style={{width: 50, height: 50, borderRadius: 30}} />
                        <Text style={styles.text}>Jonathan Doe</Text>
                        </View>
                    </View>
                    <View style={{marginTop: 15}}>
                        <Text style={styles.label}>SERVICE</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.text}>HAIR CUT</Text>
                            <Text style={[styles.text, {color: '#990404', marginLeft: 10}]}>$150</Text>
                        </View>
                    </View>
                    <View style={{marginTop: 15}}>
                        <Text style={styles.label}>ADDRESS</Text>
                        <Text style={styles.text}>3/66, Banglo Road, Kamla Nagar, New Delhi-110023</Text>
                    </View>
                    <View style={{marginTop: 15}}>
                        <Text style={styles.label}>CONTACT NUMBER</Text>
                        <Text style={styles.text}>+91 9899596828</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    toolbar: {
        height: 55,
        flexDirection: 'row',
        backgroundColor: '#1a3b70',
        alignItems: 'center'
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 50
    },
    label: {
        fontWeight: 'bold'
    },
    text: {
        fontWeight: 'bold',
        marginLeft: 5,
        color: 'green'
    }
});

export default AppointmentDetail;
