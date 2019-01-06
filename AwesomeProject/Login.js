'use strict';
import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableHighlight } from 'react-native';

export default class Login extends Component {
    render() {
      return (
          <View style={styles.container}>
            <Image style={styles.logo}
            source={{uri: 'logo'}}/>
            <Text style={styles.header}>
                Book Vote
            </Text>
            <TextInput style={styles.input}
              placeholder="Username"/>
            <TextInput style={styles.input}
              placeholder="Password"
              secureTextEntry="true"/>
            <TouchableHighlight style={styles.button}>
              <Text style={styles.buttonText}>
                Login
              </Text>
            </TouchableHighlight>
          </View>
      );
    }
  }

var styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f9f7f4',
      paddingTop: 60,
      padding: 10,
      alignItems: 'center',
    },
    logo: {
      width: 77,
      height: 66,
    },
    header: {
      fontSize: 30,
      marginTop: 10,
    },
    input: {
      height: 50,
      alignSelf: 'stretch',
      marginTop: 10,
      padding: 4,
      fontSize: 18,
      borderWidth: 1,
      borderColor: '#706f6f',
      borderRadius: 10,
    },
    button: {
      height: 50,
      width: 200,
      borderRadius: 10,
      backgroundColor: '#f1b730',
      alignSelf: 'center',
      marginTop: 10,
      justifyContent: 'center',
    },
    buttonText: {
      fontSize: 22,
      alignSelf: 'center',

    }
});
module.exports = Login;