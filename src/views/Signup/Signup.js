import React, { Component } from 'react';
import { AppRegistry, Text, View, Image, TextInput } from 'react-native';
import {
  withRouter,
} from 'react-router-native';
import Button from 'apsl-react-native-button';
import PhoneInput from 'react-native-phone-input';
import Animation from 'lottie-react-native';

import styles from './Signup.style';
import animation from './check.animation.json';
class Signup extends Component {

  state = {
    page: 0,
  }

  handleSubmitPhoneNumber = () => {
    this.setState({
      page: 1,
    })
  }

  handleBack = () => {
    this.setState({
      page: 0,
    })
  }

  handleSubmitSecretCode = () => {
    this.setState({
      page: 2,
    })
  }

  handleCompleteSignup = () => {
    const { history } = this.props;
    console.log(this.props)
    history.push('/main');
  }

  renderPhoneNumberForm() {
    return (
      <View style={styles.form}>
        <View>
          <PhoneInput
            ref='phone'
            style={styles.input}
          />
          <Button
            title="Submit"
            color="#fff"
            style={styles.btnSubmit}
            onPress={this.handleSubmitPhoneNumber}
          />
        </View>
      </View>
    )
  }

  renderSuccess() {
    return (
      <View style={styles.form}>
        <View>
          <Animation
            style={{
              width: 80,
              height: 80
            }}
            loop={true}
            source={animation}
          />
          <Button
            title="Submit"
            color="#fff"
            style={styles.btnSubmit}
            onPress={this.handleCompleteSignup}
          />
        </View>
      </View>
    )
  }

  renderSecretCodeForm() {
    return (
      <View style={styles.form}>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
          />
          <Button
            title="Submit"
            color="#fff"
            style={styles.btnSubmit}
            onPress={this.handleSubmitSecretCode}
          />
          <Button
            title="Submit"
            color="#fff"
            style={styles.btnSubmit}
            onPress={this.handleBack}
          />
        </View>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.background}>
        <Text style={styles.title}>Signup</Text>
        <View style={styles.form}>
          {this.state.page === 0 && this.renderPhoneNumberForm()}
          {this.state.page === 1 && this.renderSecretCodeForm()}
          {this.state.page === 2 && this.renderSuccess()}
        </View>
      </View>
    )
  }
}

export default withRouter(Signup);
