import React, {Component} from 'react';
import {View, Text, Slider, StyleSheet} from 'react-native';
import {noOfSeats} from '../../Redux/actions/AppointmentAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class _Slider extends Component
{
    constructor(props)
    {
        super(props);
    }
    _onSlidingComplete=(value)=>
    {
        this.props.noOfSeats(value);
    }
    render()
    {
        return (
            <View style={styles.container}>
                <Text style={[styles.title, {marginLeft: 10}]}>SELECT SEATS</Text>
                <Slider
                    style={{marginTop: 10, marginLeft: 30, marginRight: 25}}
                    step={1} minimumValue={1} maximumValue={4}
                    onSlidingComplete={(value)=>{this.props.noOfSeats(value)}} />
                <View style={{flexDirection: 'row'}}>
                    <Text style={[{marginLeft: 45}, styles.title]}>1</Text>
                    <Text style={[{marginLeft: 80}, styles.title]}>2</Text>
                    <Text style={[{marginLeft: 80}, styles.title]}>3</Text>
                    <Text style={[{marginLeft: 80}, styles.title]}>4</Text>
                </View>
            </View>
        );
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        noOfSeats: noOfSeats
    }, dispatch);
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e8e8e8',
        flex: 1,
        paddingTop: 10
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold'
    }
});

export default connect(null, mapDispatchToProps)(_Slider);
