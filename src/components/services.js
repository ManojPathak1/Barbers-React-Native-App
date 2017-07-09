import React, {Component} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import HeaderImage from './headerImage';
import ListView from './listView';
import {connect} from 'react-redux';

class Services extends Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return (
            <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
                <View style={{flex: 1}}>
                <HeaderImage storeObj={this.props.storeObj.storeObj} />
                <ListView servicesList={this.props.storeObj.storeObj.servicesList} />
            </View>
        </ScrollView>
        );
    }
}

function mapStateToProps(state)
{
    return {
        storeObj: state.storeObj,
        forNavigation: state.forNavigation
    }
}

const styles = StyleSheet.create({
});

export default connect(mapStateToProps)(Services);
