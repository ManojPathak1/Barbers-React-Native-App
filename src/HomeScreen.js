import React, {Component} from 'react';
import {View, Text, StyleSheet, NetInfo, Alert, Image, Button, TouchableHighlight} from 'react-native';
import MyToolbar from './MyToolbar';
import MyDrawer from './Routers/MyDrawer';
import {addNavigation} from './Redux/actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {NavigationActions} from 'react-navigation';

class HomeScreen extends Component
{
    constructor(props)
    {
        super(props);
        this.state={isNetAvailable: null};
    }
    componentWillMount()
    {
        NetInfo.fetch().done((reach) => {
            if(reach=="NONE")
            {
                this.setState({isNetAvailable: false});
            }
            else
            {
                this.setState({isNetAvailable: true});
            }
        });
    }
    netInfo()
    {
        NetInfo.fetch().done((reach) => {
            if(reach=="NONE")
            {
                this.setState({isNetAvailable: false});
            }
            else
            {
                this.setState({isNetAvailable: true});
            }
        });
    }
    getView()
    {
        if(this.state.isNetAvailable==true)
          {
              /* const resetAction = NavigationActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({ routeName: 'MyDrawer'})
                ]
            });
              this.props.navigation.dispatch(resetAction); */
              return <MyDrawer />;
          }
          else if(this.state.isNetAvailable==false)
          {
              return (
                  <View style={{flex: 1}}>
                      <View style={{backgroundColor: '#0d2f66'}}>
                          <Text style={{fontSize: 25, color: 'white', margin: 7}}>book my seat</Text>
                      </View>
                      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                          <View style={{alignItems: 'center'}}>
                              <Text style={{fontSize: 23, color: 'black'}}>Check your connection</Text>
                              <Text style={{fontSize: 23, color: 'black'}}>and try again</Text>
                              <TouchableHighlight onPress={()=>{this.netInfo()}} underlayColor='transparent' style={{backgroundColor: '#dbd9d9', marginTop: 15, borderRadius: 3, elevation: 5}}>
                                  <Text style={{fontSize: 23, color: 'black', padding: 5}}>RETRY</Text>
                              </TouchableHighlight>
                          </View>
                      </View>
                  </View>
              );
          }
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

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        addNavigation: addNavigation
    }, dispatch);
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default connect(null, mapDispatchToProps)(HomeScreen);
