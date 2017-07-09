import React, {Component} from 'react';
import {View, Text, Image, TextInput, TouchableHighlight, Picker, Button} from 'react-native';
import SelectBox from './SelectBox';
import IconFA from 'react-native-vector-icons/FontAwesome';
import {register} from '../../Redux/api/API';
import LoadingIndicator from '../home/loadingIndicator';

export default class Register extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            mobile: "",
            email: "",
            password: "",
            cpassword: "",
            userType: "SELECT",
            message: '',
            isLoading: false,
            status: {
                mobileStatus: false,
                emailStatus: false,
                passwordStatus: false,
                cpasswordStatus: false,
            }
        };
    }
    _handleRegistrationClick=()=>
    {
        var user = {
            email: this.state.email,
            mobile: "+91"+this.state.mobile,
            password: this.state.password
        };
        this.setState({isLoading: true});
        register(user)
            .then((res)=>{
                this.setState({isLoading: false});
                if(res.isRegistered)
                {
                    this.props.navigation.navigate('OTP');
                }
                else
                {
                    this.setState({message: res.message});
                }
            })
    }
    _onChangeTextPhone=(phone)=>
    {
        this.setState({mobile: phone});
        var regexMobile = /^[0-9]{10}$/;
        // Updating the complex state.
        this.setState({status: {...this.state.status, mobileStatus: regexMobile.test(phone)}});
    }
    _onChangeTextEmail=(email)=>
    {
        this.setState({email: email});
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.setState({status: {...this.state.status, emailStatus: re.test(email)}});
    }
    _onChangeTextPassword=(pwd)=>
    {
        this.setState({password: pwd})
        var regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        this.setState({status: {...this.state.status, passwordStatus: regexPassword.test(pwd)}});
    }
    _onChangeTextConfirmPassword=(cpwd)=>
    {
        // This is how we update the simple object.
        this.setState({cpassword: cpwd})
        var regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if(this.state.password===cpwd && regexPassword.test(cpwd))
        {
            // This is how we update the complex state object.
            this.setState({status: {...this.state.status, cpasswordStatus: true}});
        }
        else
        {
            this.setState({status: {...this.state.status, cpasswordStatus: false}});
        }
    }
    _onValueChangeUserType=(userType)=>{
        this.setState({userType: userType});
        this.setState({userType: userType, status:{...this.state.status, userTypeStatus: true}});
    }
    disableSignUpButton()
    {
        var object = this.state.status;
        for (var property in object) {
                if(object[property]==false)
                {
                    return true;
                }
        }
        return false;
    }
    render()
    {
        return( <Image
                    source={{uri: 'https://s-media-cache-ak0.pinimg.com/736x/3b/8e/28/3b8e28e0412be21dee7d4e9b4cb9ca6a.jpg'}}
                    resizeMode='stretch'
                    style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

                    {/* Mobile */}
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>+91 </Text>
                        <TextInput
                            style={{width: 210, fontSize: 20, color: 'white', fontWeight: 'bold'}}
                            placeholder="mobile number"
                            placeholderTextColor="white"
                            onChangeText={(text)=>{this._onChangeTextPhone(text)}}
                            keyboardType="numeric"
                            maxLength={10}/>
                        <IconFA name="check" size={15} color={this.state.status.mobileStatus?"green": "transparent"} />
                    </View>

                    {/* Email */}
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TextInput
                        style={{width: 250, fontSize: 16, color: 'white', fontWeight: 'bold'}}
                        placeholder="example@domain.com"
                        placeholderTextColor="white"
                        keyboardType="email-address"
                        onChangeText={(text)=>{this._onChangeTextEmail(text)}}
                    />
                <IconFA name="check" size={15} color={this.state.status.emailStatus?"green": "transparent"} />
                </View>

                {/* Password */}
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <TextInput
                        style={{width: 250, marginTop: 15, fontSize: 20, color: 'white', fontWeight: 'bold'}}
                        placeholder="Password"
                        placeholderTextColor="white"
                        onChangeText={(text)=>{this._onChangeTextPassword(text)}}
                        secureTextEntry={true}
                        maxLength={15}
                    />
                <IconFA name="check" size={15} color={this.state.status.passwordStatus?"green": "transparent"} />
            </View>

            {/* Confirm Password */}
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <TextInput
                        style={{width: 250, marginTop: 15, fontSize: 20, color: 'white', fontWeight: 'bold'}}
                        placeholder="Confirm Password"
                        onChangeText={(text)=>{this._onChangeTextConfirmPassword(text)}}
                        placeholderTextColor="white"
                        secureTextEntry={true}
                    />
                <IconFA name="check" size={15} color={this.state.status.cpasswordStatus?"green": "transparent"} />
                </View>

                {/* User Type */}
                <View style={{marginRight: 10, borderWidth: 1, borderRadius: 5, borderColor: 'white', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
                    <Picker
                        style={{width: 240, color: 'white'}}
                        selectedValue={this.state.userType}
                        mode='dialog'
                        prompt='Hello'
                        onValueChange={(userType) => {this._onValueChangeUserType(userType)}}>
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                </View>

                {/* SignUp Button and Loading */}

                        {
                            this.state.isLoading?<LoadingIndicator size={30} />:
                            (<View style={{marginTop: 15, paddingLeft: 10, paddingRight: 10}}>
                                <Button title="Sign Up" style={{flex: 1}} disabled={this.disableSignUpButton()} accessibilityLabel="See an informative alert" onPress={()=>{this._handleRegistrationClick()}} />
                            </View>)
                        }

                    <Text style={{fontSize: 15, color: 'red', fontWeight: 'bold'}}>{this.state.message}</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{borderWidth: 0.2, flex: 1, marginLeft: 20, borderColor: 'white'}}></View>
                    <Text style={{fontSize: 15, color: 'white', fontWeight: 'bold', marginLeft: 10, marginRight: 10}}>OR</Text>
                    <View style={{borderWidth: 0.2, flex: 1, marginRight: 20, borderColor: 'white'}}></View>
                    </View>
                        <Text  style={{fontWeight: 'bold', fontSize: 18, color: 'white', marginTop: 10}}>SignUp with</Text>
                        <View style={{flexDirection: 'row', marginTop: 10, alignItems: 'center', justifyContent: 'space-around', width: 100}}>
                            <IconFA name="facebook-square" size={40} color="#3b5998" />
                            <IconFA name="google-plus-square" size={40} color="#d62d20" />
                        </View>
                </Image>
        );
    }
}
