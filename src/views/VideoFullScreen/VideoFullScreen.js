import React, { Component } from 'react';
import {
  TouchableOpacity, Text, View, KeyboardAvoidingView, Image, TextInput, StyleSheet, FlatList, StatusBar, Dimensions, TouchableHighlight,
} from 'react-native';
import { Video } from 'expo';
import { Ionicons } from '@expo/vector-icons';

import { withRouter } from 'react-router-native';

import styles from './VideoFullScreen.style';

class VideoFullScreen extends Component {
  state = {
    mute: false,
    shouldPlay: true,
  }

  handlePlayAndPause = () => {
    this.setState(prevState => ({
      shouldPlay: !prevState.shouldPlay,
    }));
  }

  handleVolume = () => {
    this.setState(prevState => ({
      mute: !prevState.mute,
    }));
  }

  handleClose = () => {
    const { history } = this.props;
    history.goBack();
  }

  componentDidMount() {
    StatusBar.setHidden(true);
  }

  render() {
    const { history } = this.props;
    const { width, height } = Dimensions.get('window');
    return (
      <View style={styles.background}>
        <Video
          ref={ref => this.video = ref}
          source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }} // Can be a URL or a local file.
          rate={1.0}
          volume={1.0}
          muted={this.state.mute}
          resizeMode="cover"
          shouldPlay={this.state.shouldPlay}
          isLooping
          style={{
            width,
            height,
          }}
        />
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <View style={styles.userImage} />
            <Text style={styles.fontUsername}>
sa
            </Text>
          </View>
          <View style={styles.headerRight}>
            <TouchableHighlight onPress={this.handleClose}>
              <Ionicons name="md-close-circle" size={28} color="#fff" />
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.question}>
          <Text style={styles.questionTitle}>
What is your favorite food?
          </Text>
          <View style={styles.footerQuestionBySection}>
            <Text style={styles.footerQuestionByLabel}>
Question by
              {' '}
            </Text>
            <Text style={styles.footerQuestionByName}>
hdiashiho
            </Text>
          </View>
        </View>
        <KeyboardAvoidingView
          style={styles.footer}
          behavior="position"
        >
          <View style={styles.footerActionSection}>
            <TextInput
              style={styles.footerComment}
              placeholder="Type comment here..."
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export default withRouter(VideoFullScreen);
