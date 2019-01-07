'use strict';
import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableHighlight, ActivityIndicator } from 'react-native';

export default class Login extends Component {
  constructor(props){
    super(props);
    // Don't do this!
    this.state = { showProgress: false };
  }
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo}
        source={{uri: 'logo'}}/>
        <Text style={styles.header}>
            Book Vote
        </Text>
        <TextInput style={styles.input}
          onChangeText={(text) => this.setState({username: text})}
          placeholder="Username"/>
        <TextInput style={styles.input}
          onChangeText={(text) => this.setState({password: text})}
          placeholder="Password"
          secureTextEntry='true'/>
        <TouchableHighlight 
          onPress={this.onLoginPressed.bind(this)}
          style={styles.button}>
          <Text style={styles.buttonText}>
            Login
          </Text>
        </TouchableHighlight>
        <ActivityIndicator
          animating = {this.state.showProgress}
          size = 'large'
          style = {styles.loader}/>
      </View>
    );
  }

  onLoginPressed(){
    console.log('Attempting to login with username: ' + this.state.username);
    this.setState({showProgress: true});
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

    },
    loader: {
      marginTop: 20,
    }
});
module.exports = Login;