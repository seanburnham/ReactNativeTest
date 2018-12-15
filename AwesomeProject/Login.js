'use strict';
import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class Login extends Component {
    render() {
      return (
          <View style={styles.container}>
            <Image style={styles.logo}>
            </Image>
          </View>
      );
    }
  }

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    }
});
module.exports = Login;