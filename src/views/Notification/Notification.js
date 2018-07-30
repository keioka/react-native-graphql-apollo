import React, { Component } from 'react';
import {
  TouchableOpacity, Text, View, KeyboardAvoidingView, Image, TextInput, StyleSheet, FlatList, StatusBar, Dimensions, ScrollView,
} from 'react-native';
import { Video } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

import {
  withRouter,
} from 'react-router-native';

import styles from './Notification.style';

class Notification extends Component {
  componentDidMount() {
    StatusBar.setHidden(false);
  }

  render() {
    const { history } = this.props;
    const { width, height } = Dimensions.get('window');
    return (
      <ScrollView style={styles.background} />
    );
  }
}

ProfileWithAnimatable = Animatable.createAnimatableComponent(Notification);
export default withRouter(ProfileWithAnimatable);
