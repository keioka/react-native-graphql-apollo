import React, { Component } from 'react';
import { TouchableOpacity, Text, View, Image, TextInput, StyleSheet, FlatList } from 'react-native';
import Video from 'react-native-video';
import {
  withRouter,
} from 'react-router-native';

// import styles from './VideoFullScreen.style';

// Later on in your styles..
var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

class VideoFullScreen extends Component {

  render() {
    return (
      <View style={styles.background}>
        <Video source={{uri: "background"}}   // Can be a URL or a local file.
        ref={(ref) => {
          this.player = ref
        }}                                      // Store reference
        onBuffer={this.onBuffer}                // Callback when remote video is buffering
        onEnd={this.onEnd}                      // Callback when playback finishes
        onError={this.videoError}               // Callback when video cannot be loaded
        style={styles.backgroundVideo} />
      </View>
    )
  }
}

export default withRouter(VideoFullScreen);
