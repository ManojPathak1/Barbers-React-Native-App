import React, {Component} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

export default class LoadingIndicator extends Component
{
    constructor(props)
    {
        super(props);
    }
    render() {
    return (
      <ActivityIndicator
        animating={this.props.animating}
        style={styles.centering}
        size={this.props.size}
        color={this.props.color?this.props.color: 'blue'}
      />
    );
}
}

const styles = StyleSheet.create({
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
  },
  });
