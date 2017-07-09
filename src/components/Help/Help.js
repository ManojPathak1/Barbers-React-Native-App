import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight, ScrollView} from 'react-native';
import IconI from 'react-native-vector-icons/Ionicons';

var jsonObj = [{title: 'REACT NATIVE', about: [
    {key: 1, question: 'What is React Native?', detail: 'React makes it painless to create interactive'+
        'UIs. Design simple views for each state'+
    'in your application, and React will efficiently update and render just the right'+
    'components when your data changes.'+
    'Declarative views make your code more predictable and easier to debug.'+
    'Build encapsulated components that manage their own state, then compose them to make'+
    'complex UIs. Since component logic is written in JavaScript instead of templates,'+
    'you can easily pass rich data through your app and keep state out of the DOM.'},
    {key: 2, question: 'What is React Native?', detail: 'React makes it painless to create interactive'+
        'UIs. Design simple views for each state'+
    'in your application, and React will efficiently update and render just the right'+
    'components when your data changes.'+
    'Declarative views make your code more predictable and easier to debug.'+
    'Build encapsulated components that manage their own state, then compose them to make'+
    'complex UIs. Since component logic is written in JavaScript instead of templates,'+
    'you can easily pass rich data through your app and keep state out of the DOM.'},
    {key: 3, question: 'What is the difference between React Native, Android and IOS? How it is going to bring change?', detail: 'React makes it painless to create interactive'+
        'UIs. Design simple views for each state'+
    'in your application, and React will efficiently update and render just the right'+
    'components when your data changes.'+
    'Declarative views make your code more predictable and easier to debug.'+
    'Build encapsulated components that manage their own state, then compose them to make'+
    'complex UIs. Since component logic is written in JavaScript instead of templates,'+
    'you can easily pass rich data through your app and keep state out of the DOM.'}
]}, {title: 'REACT NATIVE', about: [
    {key: 4, question: 'What is React Native?', detail: 'React makes it painless to create interactive'+
        'UIs. Design simple views for each state'+
    'in your application, and React will efficiently update and render just the right'+
    'components when your data changes.'+
    'Declarative views make your code more predictable and easier to debug.'+
    'Build encapsulated components that manage their own state, then compose them to make'+
    'complex UIs. Since component logic is written in JavaScript instead of templates,'+
    'you can easily pass rich data through your app and keep state out of the DOM.'},
    {key: 5, question: 'What is React Native?', detail: 'React makes it painless to create interactive'+
        'UIs. Design simple views for each state'+
    'in your application, and React will efficiently update and render just the right'+
    'components when your data changes.'+
    'Declarative views make your code more predictable and easier to debug.'+
    'Build encapsulated components that manage their own state, then compose them to make'+
    'complex UIs. Since component logic is written in JavaScript instead of templates,'+
    'you can easily pass rich data through your app and keep state out of the DOM.'},
    {key: 6, question: 'What is the difference between React Native, Android and IOS? How it is going to bring change?', detail: 'React makes it painless to create interactive'+
        'UIs. Design simple views for each state'+
    'in your application, and React will efficiently update and render just the right'+
    'components when your data changes.'+
    'Declarative views make your code more predictable and easier to debug.'+
    'Build encapsulated components that manage their own state, then compose them to make'+
    'complex UIs. Since component logic is written in JavaScript instead of templates,'+
    'you can easily pass rich data through your app and keep state out of the DOM.'}
]}, {title: 'REACT NATIVE', about: [
    {key: 7, question: 'What is React Native?', detail: 'React makes it painless to create interactive'+
        'UIs. Design simple views for each state'+
    'in your application, and React will efficiently update and render just the right'+
    'components when your data changes.'+
    'Declarative views make your code more predictable and easier to debug.'+
    'Build encapsulated components that manage their own state, then compose them to make'+
    'complex UIs. Since component logic is written in JavaScript instead of templates,'+
    'you can easily pass rich data through your app and keep state out of the DOM.'},
    {key: 8, question: 'What is React Native?', detail: 'React makes it painless to create interactive'+
        'UIs. Design simple views for each state'+
    'in your application, and React will efficiently update and render just the right'+
    'components when your data changes.'+
    'Declarative views make your code more predictable and easier to debug.'+
    'Build encapsulated components that manage their own state, then compose them to make'+
    'complex UIs. Since component logic is written in JavaScript instead of templates,'+
    'you can easily pass rich data through your app and keep state out of the DOM.'},
    {key: 9, question: 'What is the difference between React Native, Android and IOS? How it is going to bring change?', detail: 'React makes it painless to create interactive'+
        'UIs. Design simple views for each state'+
    'in your application, and React will efficiently update and render just the right'+
    'components when your data changes.'+
    'Declarative views make your code more predictable and easier to debug.'+
    'Build encapsulated components that manage their own state, then compose them to make'+
    'complex UIs. Since component logic is written in JavaScript instead of templates,'+
    'you can easily pass rich data through your app and keep state out of the DOM.'}
]}];
class Help extends Component
{
    constructor(props) {
        super(props);
        this.state = {key: 0};
    }
       getHelpView(obj) {
        return obj.map((singleObj)=>{
            return (
                <TouchableHighlight
                    underlayColor="white"
                    onPress={()=>{this.setState({key: singleObj.key})}}
                    key={singleObj.key}
                    style={{marginLeft: 10, marginRight: 10, marginTop: 10, borderRadius: 3, backgroundColor: 'white', elevation: 2}}>
                    <View>
                        <Text style={{margin: 10, color: 'black', fontSize: 15, fontWeight: 'bold'}}>{singleObj.question}</Text>
                        {this.getDetail(singleObj)}
                    </View>
                </TouchableHighlight>
            );
        });
    }
    getDetail(obj) {
        var show = this.state.key==obj.key;
        if(show) {
            return (
                <View style={{alignItems: 'center', marginLeft: 15, marginRight: 15}}>
                    <Text>{obj.detail}</Text>
                    <TouchableHighlight underlayColor="transparent" style={{paddingLeft: 10, paddingRight: 10, paddingTop: 8, paddingBottom: 8, borderRadius: 20}} onPress={()=>{this.setState({key: 0})}}>
                        <IconI name="ios-arrow-up" size={15} color="gray" />
                    </TouchableHighlight>
                </View>
            );
        }
        else {
            return (
                <View></View>
            );
        }
    }
    getView() {
        return jsonObj.map((obj)=>{
            return (
                <View style={{marginBottom: 20}}>
                <Text style={{fontWeight: 'bold', fontSize: 14, color: 'black', marginLeft: 20}}>{obj.title}</Text>
                {this.getHelpView(obj.about)}
            </View>
            );
        });
    }
    render()
    {
        return (
            <View style={styles.container}>
                <View style={styles.toolbar}>
                    <TouchableHighlight style={{padding: 15}} onPress={()=>{this.props.navigation.navigate('DrawerOpen')}}>
                        <IconI name="ios-menu-outline" size={30} color="white" />
                    </TouchableHighlight>
                    <View style={{marginLeft: 50}}>
                        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>HELP</Text>
                    </View>
                </View>
                <ScrollView style={{flex: 1, borderWidth: 1}}>
                    <View style={{marginTop: 30, flex: 1, paddingBottom: 30}}>
                        {this.getView()}
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 0.1
    },
    toolbar: {
        height: 55,
        elevation: 1,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#0d2f66',
        backgroundColor: '#0d2f66',
        flexDirection: 'row'
    },
});

export default Help;
