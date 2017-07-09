import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TextInput, Button, TouchableHighlight, ToastAndroid} from 'react-native';
import {login} from '../../Redux/api/API';
import LoadingIndicator from '../home/loadingIndicator';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {logIn} from '../../Redux/actions/index';
import {getProfile} from '../../Redux/api/API';
import {receiveProfile} from '../../Redux/actions/index';
import {NavigationActions} from 'react-navigation';
import SInfo from 'react-native-sensitive-info';
import Icon from 'react-native-vector-icons/Ionicons';

class Login extends Component
{
   constructor(props)
   {
       super(props);
       this.state = {email: '', password: '', isLoading: false, message: ""};
   }
   _handleLoginClick()
   {
       this.setState({isLoading: true});
       login({email: this.state.email, password: this.state.password})
           .then((res)=>{
                this.setState({isLoading: false});
               if(res.isLoggedIn)
               {
                   this.props.logIn(res.userData[0]);
                   getProfile(res.userData[0])
                       .then((response)=>{
                           this.props.receiveProfile(response);
                           // Shared Preference
                           SInfo.setItem('ProfileInfo', JSON.stringify(response), {
                            sharedPreferencesName: 'mySharedPrefs',
                            keychainService: 'myKeychain'});
                            });
                            // Going to the home screen, and closing all the stacks.
                           const resetAction = NavigationActions.reset({
                             index: 0,
                             actions: [
                               NavigationActions.navigate({ routeName: 'MyToolbar'})
                             ]
                            });
                            this.props.navigation.dispatch(resetAction);
                            ToastAndroid.show('You have successfully logged in !',
                            ToastAndroid.LONG, ToastAndroid.CENTER);
               }
               else
               {
                   this.setState({message: res.message});
               }
           })
   }
    render()
    {
        return (
                <Image
                source={{uri: 'https://s-media-cache-ak0.pinimg.com/736x/3b/8e/28/3b8e28e0412be21dee7d4e9b4cb9ca6a.jpg'}}
                resizeMode='stretch'
                style={{flex: 1}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableHighlight style={{padding: 7, paddingLeft: 10, paddingRight: 10}} onPress={()=>{this.props.navigation.navigate('DrawerOpen')}} underlayColor='transparent'>
                        <Icon name="ios-menu-outline" size={30} color="white" />
                    </TouchableHighlight>
                    <Text style={{fontSize: 20, color: 'white', marginLeft: 50}}>LOGIN</Text>
                </View>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    {/* Go to the next input field */}
                    <TextInput
                    style={{width: 250, fontSize: 20, color: 'white', fontWeight: 'bold'}}
                    placeholder="email/mobile number"
                    placeholderTextColor="white"
                    onSubmitEditing={(event)=>{ this.refs.PasswordInput.focus() }}
                    onChangeText={(text) => this.setState({email: text})}
                    />
                    <TextInput
                        style={{width: 250, marginTop: 15, fontSize: 20, color: 'white', fontWeight: 'bold'}}
                        ref='PasswordInput'
                        placeholder="Password"
                        placeholderTextColor="white"
                        secureTextEntry={true}
                        onChangeText={(text) => this.setState({password: text})}
                        />
                        {
                            this.state.isLoading?<LoadingIndicator size={30} />:(<TouchableHighlight
                            onPress={()=>{this._handleLoginClick()}}
                            style={{ marginTop: 20, backgroundColor: '#1dad54', borderRadius: 3, width: 250, height: 40, justifyContent: 'center'}}>
                                <View>
                                    <Text style={{alignSelf: 'center', fontSize: 20, fontWeight: 'bold', color: 'white'}}>LOGIN</Text>
                                </View>
                            </TouchableHighlight>)
                        }
                        <Text style={{fontSize: 15, color: 'red', fontWeight: 'bold'}}>{this.state.message}</Text>
                    <TouchableHighlight
                        underlayColor='transparent'
                        style={{marginTop: 10, padding: 5}}
                        onPress={()=>{this.props.navigation.navigate('ForgotPassword')}}>
                        <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white'}}>Forgot Password?</Text>
                    </TouchableHighlight>
                    <View style={{flexDirection: 'row', marginTop: 100, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{fontSize: 15, color: 'white'}}>Don't have an Account? </Text>
                        <TouchableHighlight
                            onPress={()=>{this.props.navigation.navigate('Register')}}
                            style={{padding: 10}}
                            underlayColor='transparent'>
                        <Text  style={{fontWeight: 'bold', fontSize: 18, color: '#960954'}}>SignUp</Text>
                        </TouchableHighlight>
                    </View>
                </View>
                </Image>
        );
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        logIn: logIn,
        receiveProfile: receiveProfile
    }, dispatch);
}

const styles = StyleSheet.create({
    container: {

    }
});

export default connect(null, mapDispatchToProps)(Login);
