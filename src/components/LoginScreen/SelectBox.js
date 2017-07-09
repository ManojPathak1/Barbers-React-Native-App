import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight, Modal} from 'react-native';

class SelectBox extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            modalVisible: false,
            value: 'CHOOSE USER TYPE'
        }
    }
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }
    _handleServiceSelection(service)
    {
        this.props.getUserType(service);
        this.setState({value: service});
        this.setModalVisible(false);
    }
    getTypeList()
    {
        return (
            <View>
            <TouchableHighlight onPress={()=>{this._handleServiceSelection('Professional')}}>
                    <Text style={styles.content}>Professional</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={()=>{this._handleServiceSelection('Store Owner')}}>
                    <Text style={styles.content}>Store Owner</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={()=>{this._handleServiceSelection('End-User')}}>
                    <Text style={styles.content}>End-User</Text>
            </TouchableHighlight>
            </View>
        );
    }
    render()
    {
        return (
        <View>
        <TouchableHighlight
            style={{width: 240, height: 40, borderWidth: 1, alignItems: 'center', borderColor: 'white', borderRadius: 5, marginTop: 15}} onPress={() => {
          this.setModalVisible(true)
        }}>
          <Text style={styles.titleTime}>{this.state.value}</Text>
        </TouchableHighlight>
        <Modal
        style={styles.container}
          animationType={"fade"} // Animation type
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {this.setModalVisible(false)}}
          >
        <View style={styles.container}>
            <View style={styles.body}>
                    <View>
                        {this.getTypeList()}
                    </View>
            </View>
        </View>
        </Modal>
    </View>);
    }
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        elevation: 2,
        flex: 1,
        marginLeft: 100,
        marginRight: 100,
        marginTop: 230,
        marginBottom: 220,
        backgroundColor: '#F5F7F9'
    },
    titleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: '#313BFF'
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white'
    },
    body: {
        flex: 10,
        borderRadius: 10
    },
    content: {
        fontSize: 19,
        fontWeight: 'bold',
        color: '#D43A1E',
        marginTop: 8,
        alignSelf: 'center'
    },
    list: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomWidth: 0.3,
        borderColor: 'gray'
    },
    titleTime: {
        fontSize: 17,
        fontWeight: 'bold',
        margin: 5,
        color: 'white'
    }
});

export default SelectBox;
