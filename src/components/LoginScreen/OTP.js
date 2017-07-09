import React, {Component} from 'react';
import {View, Text, TextInput, Button, ToastAndroid} from 'react-native';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationActions} from 'react-navigation';
import LoadingIndicator from '../home/loadingIndicator';

const myInterval = null;
class OTP extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            otpFields : {
                firstField: null,
                secondField: null,
                thirdField: null,
                fourthField: null
            },
            format: "02:03",
            isLoading: false
        }
    }
    componentDidMount() {
        this.callTheTimer();
    }
    callTheTimer() {
        var timer=123, minutes, seconds;

        myInterval = setInterval(()=> {
            minutes = Math.floor(timer/60);
            minutes = minutes>=10?minutes: (minutes==0?"00": "0"+minutes);
            seconds = timer%60;
            seconds = seconds>=10?seconds: (seconds==0?"00": "0"+seconds);
            this.setState({format: (minutes+":"+seconds).toString() });
            timer--;
        }, 1000);
    }
    _goToHomeScreen()
    {
        this.props.navigation.navigate('Home');
    }
    _onChangeTextInput=(n, val)=> {
        switch(n) {
            case 1 : {
                if(val.length>0)
                    this.refs.Input2.focus();
                    this.setState({otpFields: {...this.state.otpFields, firstField: val}}, this.registrationSuccessfulOrNot);
                break;
            };
            case 2 : {
                if(val.length>0)
                this.refs.Input3.focus();
                this.setState({otpFields: {...this.state.otpFields, secondField: val}}, this.registrationSuccessfulOrNot);
                this.registrationSuccessfulOrNot();
                break;
            };
            case 3 : {
                if(val.length>0)
                this.refs.Input4.focus();
                this.setState({otpFields: {...this.state.otpFields, thirdField: val}}, this.registrationSuccessfulOrNot);
                break;
            };
            case 4 : {
                if(val.length>0)
                this.refs.Input4.blur();
                this.setState({otpFields: {...this.state.otpFields, fourthField: val}}, this.registrationSuccessfulOrNot);
                console.log(this.state.otpFields);
                break;
            };
        }
    }
    checkForOTP=()=> {
        var object = this.state.otpFields;
        console.log(object);
        var otpNumber = "1215";
        var otpParts = otpNumber.toString().split("");
        var i=0;
        var isOTPCorrect = true;
        for (var property in object) {
                if(object[property]!=otpParts[i])
                {
                    isOTPCorrect=false;
                }
                i++;
        }
        return isOTPCorrect;
    }
    _clearInterval=()=> {
        if(this.state.format==="00:00") {
            clearInterval(myInterval);
        }
    }
    registrationSuccessfulOrNot=()=> {
        if(this.checkForOTP()) {
            this.setState({isLoading: true});
            setTimeout(()=>{
                this.setState({isLoading: false});
                // Going to the home screen, and closing all the stacks.
               const resetAction = NavigationActions.reset({
                 index: 0,
                 actions: [
                   NavigationActions.navigate({ routeName: 'MyToolbar'})
                 ]
                });
                this.props.navigation.dispatch(resetAction);
                ToastAndroid.show('You have successfully registered !', ToastAndroid.LONG, ToastAndroid.CENTER);
            }, 2000);
            clearInterval(myInterval);
        }
    }
    render()
    {
        this._clearInterval();
        return (
            <View style={{flex: 1, alignSelf: 'center', alignItems: 'center', width: 250}}>
                <Text style={{marginTop: 30, color: 'black', fontWeight: 'bold', alignSelf: 'center', fontSize: 17}}>Enter OTP Code that send to</Text>
                <Text style={{color: 'black', fontWeight: 'bold', alignSelf: 'center', fontSize: 17}}>your registered Mobile Number</Text>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: 20, width:150}}>
                    <TextInput
                    style={{fontSize: 25, color: 'gray', fontWeight: 'bold', width: 25, alignSelf: 'center'}}
                    placeholderTextColor="white"
                    maxLength={1}
                    keyboardType='numeric'
                    autoFocus={true}
                    selectTextOnFocus={true}
                    onChangeText={(text) => {this._onChangeTextInput(1, text)}}
                    />
                    <TextInput
                    style={{fontSize: 25, color: 'gray', fontWeight: 'bold', width: 25}}
                    ref='Input2'
                    placeholderTextColor="white"
                    maxLength={1}
                    selectTextOnFocus={true}
                    keyboardType='numeric'
                    onChangeText={(text) => {this._onChangeTextInput(2, text)}}
                    />
                    <TextInput
                    style={{fontSize: 25, color: 'gray', fontWeight: 'bold', width: 25}}
                    ref='Input3'
                    placeholderTextColor="white"
                    maxLength={1}
                    selectTextOnFocus={true}
                    keyboardType='numeric'
                    onChangeText={(text) => {this._onChangeTextInput(3, text)}}
                    />
                    <TextInput
                    style={{fontSize: 25, color: 'gray', fontWeight: 'bold', width: 25}}
                    ref='Input4'
                    placeholderTextColor="white"
                    maxLength={1}
                    selectTextOnFocus={true}
                    keyboardType='numeric'
                    onChangeText={(text) => {this._onChangeTextInput(4, text)}}
                    />
                </View>
                <View>
                    <Text>Enter 4-digit code</Text>
                </View>
                <LoadingIndicator size={50} color={"pink"} animating={this.state.isLoading} />
                <View style={{alignItems: 'center', borderWidth: 1, flexDirection: 'row', width: 300, justifyContent: 'space-between'}}>
                    <View style={{flexDirection: 'row', borderWidth: 1, alignItems: 'center'}}>
                        <IconMCI name="message-processing" size={20} color="gray" />
                        <Text style={{marginLeft: 5}}>Resend SMS</Text>
                    </View>
                    <Text>{this.state.format}</Text>
                </View>
            </View>
        );
    }
}

export default OTP;
