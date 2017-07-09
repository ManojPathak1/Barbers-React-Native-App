import React, {Component} from 'react';
import {View, Text, TouchableHighlight, TextInput, KeyboardAvoidingView, Image, ScrollView} from 'react-native';
import IconI from 'react-native-vector-icons/Ionicons';

class Search extends Component
{
    static navigationOptions = {
        header: {
            visible: false
        }
    };
    constructor(props)
    {
        super(props);
        this.state = {searchText: ''}
    }
    onChangeText(text) {
        this.setState({searchText: text});
    }
    getSearchedStores() {
        return [1,2,3,4,5,6,7,8].map((key)=>{
            return (
                <View style={{backgroundColor: 'white', height: 90, marginTop: 8, marginLeft: 5, marginRight: 5, flexDirection: 'row', borderRadius: 2, elevation: 2}} key={key}>
                    <Image
                    style={{flex: 0.65, borderRadius: 2}}
                    resizeMode='stretch'
                    source={{uri: 'https://officesnapshots.com/wp-content/uploads/2013/01/gensler_facebook_1259-700x356.jpg'}}
                    />
                <View style={{justifyContent: 'space-around', flexWrap: 'wrap', flex: 1}}>
                    <Text style={{fontSize: 18, color: 'black', fontWeight: 'bold', marginLeft: 10}}>Facebook Office</Text>
                    <View style={{marginLeft: 10, marginRight: 10}}>
                    <Text>Silicon Valley, California, USA.</Text>
                    </View>
                </View>
                </View>
            );
        })
    }
    getView() {
        var isSearched = this.state.searchText.toString().length>0;
        if(isSearched) {
            return (
                this.getSearchedStores()
            );
        }
        else {
            return (
                <View style={{alignItems: 'center', marginTop: 120}}>
                    <Text style={{fontSize: 25, color: 'gray'}}>Search for stores,</Text>
                    <Text  style={{fontSize: 25, color: 'gray'}}>professionals & services</Text>
                </View>
            );
        }
    }
    render()
    {
        return (
            <View style={{flex: 1}}>
            <View style={{height: 55, alignItems: 'center', flexDirection: 'row', elevation: 7, borderWidth: 1, borderColor: 'white', backgroundColor: 'white'}}>
                <TouchableHighlight style={{ marginLeft: 10, width: 30}} onPress={()=>{this.props.navigation.goBack()}}>
                    <IconI name="md-arrow-back" size={25} color="gray" />
                </TouchableHighlight>
                <TextInput
                    style={{height: 45, borderColor: 'gray', width: 280, marginLeft: 10, borderRadius: 5, flex: 1, marginRight: 10, fontSize: 20}}
                    onChangeText={(text) => {this.onChangeText(text)}}
                    value={this.state.searchText}
                    placeholder="Start searching..."
                    underlineColorAndroid='transparent'
                    placeholderTextColor="#dee2e2"
                    autoFocus={true}
                  />
            </View>
            <ScrollView style={{flex: 1, backgroundColor: '#f4f7f7', marginTop: 5, marginBottom: 5}}>
                {this.getView()}
            </ScrollView>
            </View>
        );
    }
}

export default Search;
