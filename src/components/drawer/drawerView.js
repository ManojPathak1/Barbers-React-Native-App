import React, {Component} from 'react';
import {View, StyleSheet, Image, Text, TouchableHighlight, ToastAndroid} from 'react-native';
import IconE from 'react-native-vector-icons/Entypo';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {reset, logOut} from '../../Redux/actions/index';
import {NavigationActions} from 'react-navigation';
import SInfo from 'react-native-sensitive-info';

class DrawerView extends Component
{
    goToHomePage()
    {
        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'MyToolbar'})
          ]
      });
        this.props.navigation.dispatch(resetAction);
    }
    getLoginBox()
    {
        if(!this.props.userObj.isLoggedIn)
        {
            // If user is not logged in.
            return (
                <View style={styles.loginBox}>
                <TouchableHighlight onPress={()=>{this.props.navigation.navigate('Login')}}>
                    <IconFA name="user" size={80} color="white" />
                    </TouchableHighlight>
                    <Text style={styles.loginTextTitle}>LogIn Here</Text>
                </View>
            );
        }
        else
        {
            // If user is logged in.
            const userObj = this.props.userObj.userObj;
            const profile = this.props.profile.profile;
            return (
                <View style={styles.loginBox}>
                <TouchableHighlight onPress={()=>{this.props.navigation.navigate('MyProfile', {userObj: userObj})}}>
                    { profile==null?(<IconFA name="user" size={80} color="white" />): (profile.image==null?(<IconFA name="user" size={80} color="white" />): (<Image source={{uri: this.props.profile.profile.image}} style={{width: 80, height: 80, borderRadius: 50}} />))}
                    </TouchableHighlight>
                    <Text style={styles.loginTextTitle}>{userObj.email}</Text>
                </View>
            );
        }
    }
    _handleLogOut()
    {
        if(this.props.userObj.isLoggedIn)
        {
            // Going to the home screen, and closing all the stacks.
           const resetAction = NavigationActions.reset({
             index: 0,
             actions: [
               NavigationActions.navigate({ routeName: 'MyToolbar'})
             ]
            });
            this.props.navigation.dispatch(resetAction);
            setTimeout(()=>{
                this.props.logOut();
                ToastAndroid.show('You have successfully logged out !', ToastAndroid.LONG, ToastAndroid.CENTER);
            }, 1000);

            // Resetting the shared preference.
            SInfo.setItem('ProfileInfo', 'NONE', {
             sharedPreferencesName: 'mySharedPrefs',
             keychainService: 'myKeychain'});
        }
        else
        {
            this.props.navigation.navigate('DrawerClose');
        }
    }
    // Handling the navigation click.
    _handleNavigations(route)
    {
        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: route})
          ]
         });
         this.props.navigation.dispatch(resetAction);
    }
    render()
    {
        return (
            <View style={styles.container}>
                {this.getLoginBox()}
                <View style={styles.options}>
                    <View style={styles.icons}>
                        <TouchableHighlight style={styles.icon} onPress={()=>{this.goToHomePage()}} overlayColor='transparent'>
                            <View style={{flexDirection: 'row'}}>
                                <IconE name="home" size={25} color="white" />
                                <Text style={styles.option}>Home</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.icon} onPress={()=>{this._handleNavigations('Appointments')}} overlayColor='transparent'>
                            <View style={{flexDirection: 'row'}}>
                            <IconE name="calendar" size={25} color="white" />
                            <Text style={styles.option}>Appointment</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.icon} onPress={()=>{this._handleNavigations('OTP')}} overlayColor='transparent'>
                            <View style={{flexDirection: 'row'}}>
                            <IconE name="star" size={25} color="white" />
                            <Text style={styles.option}>Favourites</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.icon} onPress={()=>{this._handleNavigations('Feedback')}} overlayColor='transparent'>
                            <View style={{flexDirection: 'row'}}>
                            <IconMI name="feedback" size={25} color="white" />
                            <Text style={styles.option}>Feedback</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.icon} onPress={()=>{this._handleNavigations('Notification')}} overlayColor='transparent'>
                            <View style={{flexDirection: 'row'}}>
                            <IconMI name="notifications" size={25} color="white" />
                            <Text style={styles.option}>Notification</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.icon} onPress={()=>{this._handleNavigations('Settings')}} overlayColor='transparent'>
                            <View style={{flexDirection: 'row'}}>
                            <IconMI name="settings" size={25} color="white" />
                            <Text style={styles.option}>Settings</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.icon} onPress={()=>{this._handleNavigations('Help')}} overlayColor='transparent'>
                            <View style={{flexDirection: 'row'}}>
                            <IconE name="help" size={25} color="white" />
                            <Text style={styles.option}>Help</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.icon} onPress={()=>{this._handleLogOut()}} overlayColor='transparent'>
                            <View style={{flexDirection: 'row'}}>
                            <IconMCI name="logout" size={25} color="white" />
                            <Text style={styles.option}>Logout</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        );
    }
}

function mapStateToProps(state)
{
    return {
        userObj: state.userObj,
        profile: state.profile,
        forNavigation: state.forNavigation
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        reset: reset,
        logOut: logOut
    }, dispatch);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0d2f66',
        borderWidth: 2,
        borderColor: '#0d2f66'
    },
    loginBox: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        borderBottomWidth: 0.2,
        borderColor: 'white'
    },
    options: {
        flexDirection: 'row',
        flex: 3,
        marginTop: 5
    },
    profile: {
        width: 100,
        height: 100,
        borderRadius: 50,
        alignSelf: 'center'
    },
    loginTextTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#dee0e5'
    },
    icons: {
        flex: 1,
        marginLeft: 45
    },
    optionsTitle: {
        flex: 2
    },
    icon: {
        padding: 12
    },
    option: {
        fontSize: 20,
        color: "#dee0e5",
        marginLeft: 10,
        fontWeight: 'bold'
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(DrawerView);
