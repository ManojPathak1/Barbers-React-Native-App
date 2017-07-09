import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, TouchableHighlight, TextInput, Image} from 'react-native';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconE from 'react-native-vector-icons/Entypo';
import IconI from 'react-native-vector-icons/Ionicons';
var ImagePicker = require('react-native-image-picker');

class CompleteProfile extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {username: '', email: '', contact: '', image: null};
        var ImagePicker = require('react-native-image-picker');
    }
    _pickImage()
    {
        var options = {
          title: 'SELECT PROFILE PICTURE',
          storageOptions: {
            skipBackup: true,
            path: 'images'
          }
        };

        ImagePicker.showImagePicker(options, (response) => {
          console.log('Response = ', response);

          if (response.didCancel) {
            console.log('User cancelled image picker');
          }
          else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          }
          else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          }
          else {
            let source = { uri: 'data:image/jpeg;base64,' + response.data };
            this.setState({image: source});
          }
        });
    }
    getImage()
    {
        const {state} = this.props.navigation;
        const profile = state.params.profile;
        if(this.state.image==null)
        {
            if(profile.image==null)
            {
                return (
                    <View style={{flex: 1, backgroundColor: 'gray'}}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <TouchableHighlight style={{padding: 10, marginLeft: 5}} onPress={()=>{this.props.navigation.goBack()}}>
                                <IconI name="md-arrow-back" size={30} color="white" />
                            </TouchableHighlight>
                            <View style={{marginLeft: 10}}>
                                <Text style={{color: 'white', fontSize: 18}}>COMPLETE PROFILE</Text>
                            </View>
                            <View style={{marginRight: 10}}>
                                <Button title="SAVE" onPress={()=>{}} />
                            </View>
                        </View>
                    <TouchableHighlight style={{alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginTop: 30}} onPress={()=>{this._pickImage()}}>
                        <View>
                            <IconFA name="camera" size={100} color="white" />
                            <Text style={styles.mobile}>Upload Photo</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                );
            }
            else
            {
                return (
                    <Image style={{flex: 1}} resizeMode="cover" source={{uri: profile.image}} >
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <TouchableHighlight style={{padding: 10, marginLeft: 5}} onPress={()=>{this.props.navigation.goBack()}}>
                                <IconI name="md-arrow-back" size={30} color="white" />
                            </TouchableHighlight>
                            <View style={{marginLeft: 10}}>
                                <Text style={{color: 'white', fontSize: 18}}>COMPLETE PROFILE</Text>
                            </View>
                            <View style={{marginRight: 10}}>
                                <Button title="SAVE" onPress={()=>{}} />
                            </View>
                        </View>
                    <View style={{alignItems: 'center', justifyContent: 'space-around', marginTop: 10}}>
                        <TouchableHighlight onPress={()=>{this._pickImage()}}>
                            <View>
                        <Image source={{uri: profile.image}} style={{width: 150, height: 150, borderRadius: 100, borderColor: 'white', borderWidth: 0.1}} />
                        <IconE name="edit" size={20} color="white" style={{alignSelf: 'flex-end'}} />
                            </View>
                        </TouchableHighlight>
                        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white', marginTop: 10}}>{this.state.username}</Text>
                    </View>
                </Image>
                );
            }
        }
        // This else is for the image which is shown when user selects it at the same time.
        else
        {
            return (
                <Image style={{flex: 1}} resizeMode="cover" source={this.state.image} >
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <TouchableHighlight style={{padding: 10, marginLeft: 5}} onPress={()=>{this.props.navigation.goBack()}}>
                            <IconI name="md-arrow-back" size={30} color="white" />
                        </TouchableHighlight>
                        <View style={{marginLeft: 10}}>
                            <Text style={{color: 'white', fontSize: 18}}>COMPLETE PROFILE</Text>
                        </View>
                        <View style={{marginRight: 10}}>
                            <Button title="SAVE" onPress={()=>{}} />
                        </View>
                    </View>
                <View style={{alignItems: 'center', justifyContent: 'space-around', marginTop: 10}}>
                    <TouchableHighlight onPress={()=>{this._pickImage()}}>
                    <Image source={ this.state.image } style={{width: 130, height: 130, borderRadius: 100, borderColor: 'white', borderWidth: 0.1}} />
                    </TouchableHighlight>
                    <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white', marginTop: 10}}>{this.state.username}</Text>
                </View>
            </Image>
            );
        }
    }
    render()
    {
        const {state} = this.props.navigation;
        const profile = state.params.profile;
        return (
            <View style={styles.container}>

                <View style={styles.picContainer}>

                        {this.getImage()}
                </View>

                <View style={styles.infoContainer}>
                    <View style={{height: 40, backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{fontSize: 20, color: 'white'}}>GENERAL INFORMATION</Text>
                    </View>
                    <View style={{margin: 20}}>
                        <Text style={styles.label}>User Name</Text>
                            <TextInput
                            style={{fontSize: 20, fontWeight: 'bold'}}
                            placeholder="Enter Name"
                            placeholderTextColor="#D3D3D3"
                            value={this.state.username}
                            onChangeText={(text) => this.setState({username: text})}
                            />
                        <Text style={styles.label}>Email Address</Text>
                                <TextInput
                                style={{fontSize: 20, color: 'green', fontWeight: 'bold'}}
                                placeholder="email/mobile number"
                                placeholderTextColor="#D3D3D3"
                                value={profile.email}
                                onChangeText={(text) => this.setState({email: text})}
                                />
                            <Text style={styles.label}>CONTACT US</Text>
                                        <TextInput
                                        style={{fontSize: 20, color: 'green', fontWeight: 'bold'}}
                                        placeholder="email/mobile number"
                                        placeholderTextColor="#D3D3D3"
                                        value={profile.mobile}
                                        onChangeText={(text) => this.setState({contact: text})}
                                        />
                    </View>

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    picContainer: {
        flex: 1.5,
        justifyContent: 'center',
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
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10
    }
});

export default CompleteProfile;
