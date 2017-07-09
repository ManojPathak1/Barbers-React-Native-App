import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, TouchableHighlight, Image} from 'react-native';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconE from 'react-native-vector-icons/Entypo';
import IconI from 'react-native-vector-icons/Ionicons';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {receiveProfile} from '../../Redux/actions/index';
import {getProfile} from '../../Redux/api/API';
import LoadingIndicator from '../home/loadingIndicator';

class MyProfile extends Component
{
    constructor(props)
    {
        super(props);
        this._goToCompleteProfile = this._goToCompleteProfile.bind(this);
    }
    _goToCompleteProfile()
    {
        this.props.navigationOptions.navigate('CompleteProfile');
    }
    getView=()=>{
            const userObj = this.props.userObj.userObj[0];
            const profile = this.props.profile.profile;
            return (
                <View style={{flex: 1}}>
                    <View style={{justifyContent: 'center', flex: 1.7}}>
                        {/* Correct way to use the image */}

                        {
                            (profile.image==null)?(
                                <View style={{flex: 1, backgroundColor: 'gray'}}>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                        <TouchableHighlight style={{padding:10, marginLeft: 5}} onPress={()=>{this.props.navigation.navigate('DrawerOpen')}}>
                                            <IconI name="ios-menu-outline" size={30} color="white" />
                                        </TouchableHighlight>
                                        <Text style={{fontSize: 20, color: 'white'}}>MY PROFILE</Text>
                                        <TouchableHighlight style={{padding:10, marginRight: 5}} onPress={()=>{this.props.navigation.navigate('CompleteProfile', {profile: profile})}}>
                                            <IconE name="edit" size={25} color="white" />
                                        </TouchableHighlight>
                                    </View>
                                    <View style={{alignItems: 'center', justifyContent: 'center', padding: 10}}>
                                        <IconFA name="user" size={100} color="white" />
                                        <Text style={styles.mobile}>{profile.email}</Text>
                                        <Text style={styles.mobile}>{profile.mobile}</Text>
                                    </View>
                                </View>
                            ):(
                                <Image style={{flex: 1}} resizeMode="stretch" source={{uri: profile.image}}>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                        <TouchableHighlight style={{padding:10, marginLeft: 5}} onPress={()=>{this.props.navigation.navigate('DrawerOpen')}}>
                                            <IconI name="ios-menu-outline" size={30} color="white" />
                                        </TouchableHighlight>
                                        <Text style={{fontSize: 20, color: 'white'}}>MY PROFILE</Text>
                                        <TouchableHighlight style={{padding:10, marginRight: 5}} onPress={()=>{this.props.navigation.navigate('CompleteProfile', {profile: profile})}}>
                                            <IconE name="edit" size={25} color="white" />
                                        </TouchableHighlight>
                                    </View>
                                    <View style={{alignItems: 'center', justifyContent: 'center', padding: 10}}>
                                        <Image source={{uri: profile.image}} style={{width: 130, height: 130, borderRadius: 70, borderColor: 'white', borderWidth: 0.1}} />
                                        <Text style={styles.mobile}>{profile.email}</Text>
                                        <Text style={styles.mobile}>{profile.mobile}</Text>
                                    </View>
                                </Image>
                            )
                        }

                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.emailLabel}>EMAIL ADDRESS</Text>
                        <Text style={styles.email}>{profile.email}</Text>
                    </View>
                    </View>
            );
    }
    render()
    {
        return (
            <View style={styles.container}>
                {this.getView()}
            </View>
        );
    }
}

function mapStateToProps(state)
{
    return {
        userObj: state.userObj,
        profile: state.profile
    }
}
function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        receiveProfile: receiveProfile,
    }, dispatch);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    picContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#dbdbdb'
    },
    infoContainer: {
        flex: 2,
    },
    mobile: {
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    },
    emailLabel: {
        marginLeft: 20,
        marginTop: 15,
        fontWeight: 'bold',
        fontSize: 15
    },
    email: {
        marginLeft: 20,
        marginTop: 10,
        fontWeight: 'bold',
        color: '#990101'
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);
