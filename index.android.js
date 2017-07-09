import React, {Component} from 'react';
import { View } from 'react-native';
import {AppRegistry} from 'react-native';
import TopStack from './src/Routers/TopStack';
import {createStore, applyMiddleware} from 'redux';
import allReducers from './src/Redux/reducers';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(allReducers);

export default class HelloWorldApp extends Component {
  render()
  {
    return (
        <View style={{flex: 1}}>
            <Provider store={store}>
                <TopStack />
            </Provider>
        </View>
    );
  }
}

AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);
