import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight, Button, TouchableOpacity} from 'react-native';
import IconI from 'react-native-vector-icons/Ionicons';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {serviceSelected, timeSelected, doneAppointment} from '../../Redux/actions/AppointmentAction';
import {MKRadioButton} from 'react-native-material-kit';

class SelectServices extends Component
{
    static navigationOptions= {
       header: {
         visible: false,
       }
   }
    constructor(props)
    {
        super(props);
        this.state = {optionSelected: null};
        this.radioGroup = new MKRadioButton.Group();
    }
    _handleServiceSelection(service, time)
    {
        this.props.serviceSelected(service);
        this.props.timeSelected(time);
        this.setState({optionSelected: service.id});
    }
    getServicesList(services, time)
    {
        return services.map((service)=>{
            return (
                <TouchableOpacity key={service.id} onPress={()=>{this._handleServiceSelection(service, time)}} underlayColor="transparent">
                    <View style={styles.list}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            {
                                (this.state.optionSelected==service.id)?
                                (<IconMCI name="checkbox-marked-outline" size={30} color="#D43A1E" />):
                                (<IconMCI name="checkbox-blank-outline" size={30} color="#D43A1E" />)
                            }
                            <Text style={styles.content}>{service.service_name}</Text>
                        </View>
                        <Text style={styles.content}>${service.price}</Text>
                    </View>
                </TouchableOpacity>
        )});
    }
    _handleDonePress()
    {
        this.props.doneAppointment(this.props.appointment);
        this.props.navigation.goBack();
    }
    render()
    {
        const { params } = this.props.navigation.state;
        const storeObj = params.storeObj;
        const time = params.time;
        return (
            <View style={styles.container}>
                <View style={{height: 55, alignItems: 'center', backgroundColor: '#0d2f66', flexDirection: 'row', elevation: 2, borderWidth: 1, borderColor: '#0d2f66', backgroundColor: '#0d2f66'}}>
                    <TouchableHighlight style={{ marginLeft: 10, width: 30}} onPress={()=>{this.props.navigation.goBack()}}>
                        <IconI name="md-arrow-back" size={30} color="white" />
                    </TouchableHighlight>
                    <View style={{marginLeft: 10}}>
                        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>SELECT SERVICE</Text>
                    </View>
                    <View style={{marginLeft: 110}}>
                        <Button title="DONE" disabled={this.state.optionSelected==null} onPress={()=>{this._handleDonePress()}} />
                    </View>
                </View>
                <View style={{margin: 10, flex: 1, backgroundColor: 'white'}}>
                    {this.getServicesList(storeObj.servicesList, time)}
                </View>
            </View>
        );
    }
}

function mapStateToProps(state)
{
    return {
        appointment: state.appointment,
        forNavigation: state.forNavigation
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        serviceSelected: serviceSelected,
        timeSelected: timeSelected,
        doneAppointment: doneAppointment
    }, dispatch);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    list: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.2,
        borderColor: 'gray',
        justifyContent: 'space-between'
    },
    content: {
        fontSize: 19,
        fontWeight: 'bold',
        color: '#D43A1E',
        margin: 13,
        justifyContent: 'flex-end'
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectServices);
