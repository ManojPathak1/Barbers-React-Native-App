import React, {Component} from 'react';
import {View, Text, StyleSheet, Slider, ScrollView, Button, TouchableHighlight} from 'react-native';
import DateView from './dateView';
import _Slider from './bookAppointment/slider';
import ProfessionalList from './bookAppointment/professionalsList';
import IconI from 'react-native-vector-icons/Ionicons';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {doneAppointment} from '../Redux/actions/AppointmentAction';

class BookAppointment extends Component
{
    constructor(props)
    {
        super(props);
    }
    getPrice()
    {
        var price = 0;
        this.props.appointmentsArray.appointments.map((appointment)=>{
            price = price + appointment.noOfSeats*appointment.service.price;
        });
        return price;
    }
    render()
    {
        const { params } = this.props.navigation.state;
        const storeObj = params.storeObj;
        return (
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <View style={{height: 55, alignItems: 'center', flexDirection: 'row', elevation: 2, borderWidth: 1, borderColor: '#0d2f66', backgroundColor: 'white', backgroundColor: '#0d2f66'}}>
                    <TouchableHighlight style={{ padding: 15}} onPress={()=>{this.props.navigation.goBack()}}>
                        <IconI name="md-arrow-back" size={30} color="white" />
                    </TouchableHighlight>
                    <View style={{marginLeft: 10}}>
                        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>BOOK APPOINTMENT</Text>
                    </View>
                </View>
                <_Slider onSlidingComplete={this._onSlidingComplete} />
                <View style={{flexDirection: 'row', flex: 6}}>
                    <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: '#f4f7f7'}}>
                            <DateView onDateSelected={this._onDateSelected} />
                    </ScrollView>
                    <View style={{flex: 30}}>
                    <View style={{backgroundColor: '#e8e8e8', flex: 0.5}}>
                    </View>
                    <View style={{ flex: 10}}>
                        <ScrollView>
                            <ProfessionalList
                                storeObj={storeObj}
                                navigation={this.props.navigation}
                            />
                        </ScrollView>
                    </View>
                    </View>
                </View>
                <View style={{borderTopWidth: 0.2, borderColor: 'gray', flex: 0.70, justifyContent: 'center', backgroundColor: 'white'}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black', marginLeft: 10}}>Total Amount</Text>
                        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black', marginLeft: 10}}>${this.getPrice()}</Text>
                        <Button onPress={()=>{}} title="PAY" />
                    </View>
                </View>
            </View>
        );
    }
}

function mapStateToProps(state)
{
    return {
        appointmentsArray: state.appointmentsArray
    }
}

const styles = StyleSheet.create({
    list: {
        flexDirection: 'row',
        height: 70,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#fcf9fa',
        marginTop: 5,
        borderRadius: 4
    }
});

export default connect(mapStateToProps)(BookAppointment);
