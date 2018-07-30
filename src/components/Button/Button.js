import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Button from 'apsl-react-native-button';
import styles from './Button.style';

const ButtonRound = props => (
  <Button
    style={styles.btnSubmit}
    {...props}
  >
    <Text style={styles.fontBtn}>
      {props.text}
    </Text>
  </Button>
);

export default ButtonRound;
