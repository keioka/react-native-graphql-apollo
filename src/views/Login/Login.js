import React, { Component } from 'react';
import { AppRegistry, Text, View, Image, TextInput } from 'react-native';
import styles from './Login.style';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.background}>
        <TextInput style={styles.input}
          placeholder="Username"
        />
        <TextInput style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>
    )
  }
}
