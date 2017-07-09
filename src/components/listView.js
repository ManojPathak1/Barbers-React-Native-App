import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class ListView extends Component
{
    constructor(props)
    {
        super(props);
    }
    getList()
    {
        return this.props.servicesList.map((service)=>{
            return (<View style={styles.list} key={service.id}>
            <Text style={{color: '#379999', fontSize: 18, fontWeight: 'bold'}}>{service.service_name}</Text>
            <Text style={{color: '#f94078', fontSize: 18, fontWeight: 'bold'}}>${service.price}</Text>
            </View>);
        });
    }
    render()
    {
        return (
            <View style={{marginTop: 10}}>
                {this.getList()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    list: {
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 5,
        marginLeft: 20,
        marginRight: 20,
        borderBottomWidth: 5,
        borderBottomWidth: 1,
        borderColor: '#d7dddd'
    }
});
