import React, { Component } from 'react';
import {
  AppRegistry, Text, View, Image, TextInput,
} from 'react-native';
import {
  withRouter,
} from 'react-router-native';
import PhoneInput from 'react-native-phone-input';
import Animation from 'lottie-react-native';
import Button from '../../components/Button';
import LottieAnimation from '../../components/LottieAnimation';
import styles from './Signup.style';
import animation from './check.animation.json';

class Signup extends Component {
  state = {
    page: 0,
  }

  handleSubmitPhoneNumber = () => {
    this.setState({
      page: 1,
    });
  }

  handleBack = () => {
    this.setState({
      page: 0,
    });
  }

  handleSubmitSecretCode = () => {
    this.setState({
      page: 2,
    });
  }

  handleCompleteSignup = () => {
    const { history } = this.props;
    history.push('/main');
  }

  renderPhoneNumberForm() {
    return (
      <View style={styles.form}>
        <View>
          <PhoneInput
            ref="phone"
            style={styles.input}
          />
          <Button
            onPress={this.handleSubmitPhoneNumber}
            text="Submit"
          />
        </View>
      </View>
    );
  }

  renderSuccess() {
    this.animation;
    return (
      <View style={styles.form}>
        <View>
          <LottieAnimation
            source={animation}
            style={{ width: 300, height: 300 }}
          />
          <Button
            onPress={this.handleCompleteSignup}
            text="Go to Top"
          />
        </View>
      </View>
    );
  }

  renderSecretCodeForm() {
    return (
      <View style={styles.form}>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
          />
          <Button
            onPress={this.handleSubmitSecretCode}
            text="Submit"
          />
          <Button
            onPress={this.handleBack}
            text="Back"
          />
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.background}>
        <View style={styles.header}>
          <Text style={styles.fontTitle}>
Signup
          </Text>
        </View>
        <View style={styles.form}>
          {this.state.page === 0 && this.renderPhoneNumberForm()}
          {this.state.page === 1 && this.renderSecretCodeForm()}
          {this.state.page === 2 && this.renderSuccess()}
        </View>
      </View>
    );
  }
}

export default withRouter(Signup);
