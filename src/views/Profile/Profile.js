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

import styles from './Profile.style';

class Profile extends Component {
  componentDidMount() {
    StatusBar.setHidden(false);
  }

  render() {
    const { history } = this.props;
    const { width, height } = Dimensions.get('window');
    return (
      <ScrollView style={styles.background}>
        <Animatable.View style={styles.headerProfile} animation="slideInDown" duration={200} useNativeDriver>
          <View style={styles.img}>
            <Image source={{ uri: 'https://pbs.twimg.com/profile_images/946921679577522176/g4i3Rjfa_400x400.jpg' }} style={{ width: 64, height: 64, borderRadius: 64 }} />
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.fontUserName}>
Kei Oka
            </Text>
            <Text style={styles.fontCity}>
San Francsico
            </Text>
            <Text style={styles.fontInfo}>
Follower: 123 Following: 123
            </Text>

          </View>
        </Animatable.View>
      </ScrollView>
    );
  }
}

ProfileWithAnimatable = Animatable.createAnimatableComponent(Profile);
export default withRouter(ProfileWithAnimatable);
