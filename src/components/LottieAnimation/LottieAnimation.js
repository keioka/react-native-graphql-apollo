import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { DangerZone } from 'expo';
import styles from './LottieAnimation.style';

const { Lottie } = DangerZone;

class LottieAnimation extends Component {
  componentDidMount() {
    this.playAnimation();
  }

  playAnimation = () => {
    this.animation.reset();
    this.animation.play();
  };

  render() {
    return (
      <View style={styles.animationContainer}>
        <Lottie
          ref={(animation) => {
            this.animation = animation;
          }}
          style={this.props.style}
          source={this.props.source}
        />
      </View>
    );
  }
}

export default LottieAnimation;
