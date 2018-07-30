import React, { Component } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  StyleSheet,
  FlatList,
  StatusBar,
  Dimensions,
  ScrollView
} from "react-native";
import { Video } from "expo";
import { Ionicons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

import { withRouter } from "react-router-native";

import styles from "./SelectQuestion.style";

class SelectQuestion extends Component {
  state = {
    isSelected: false
  };

  componentDidMount() {
    StatusBar.setHidden(false);
  }

  handleSelectQuestion = () => {
    const { history } = this.props;
    history.push("/answers/1/new");
  };

  render() {
    const { history } = this.props;
    const { width, height } = Dimensions.get("window");
    return (
      <View style={styles.background}>
        {this.state.isSelected ? (
          <View style={styles.content}>
            <View style={styles.header} />
            <View style={styles.card}>
              <Text style={styles.fontCardTitle}>
                What is your favorite food?
              </Text>
            </View>
          </View>
        ) : (
          <View style={styles.content}>
            <View style={styles.header} />
            <View style={styles.card}>
              <Text style={styles.fontCardTitle}>
                What is your favorite food?
              </Text>
            </View>
            <View style={styles.body}>
              <View style={styles.btnSelect}>
                <TouchableOpacity onPress={this.handleSelectQuestion}>
                  <Ionicons
                    name="ios-videocam-outline"
                    size={41}
                    color="#fff"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </View>
    );
  }
}

NewAnswerWithAnimatable = Animatable.createAnimatableComponent(SelectQuestion);
export default withRouter(NewAnswerWithAnimatable);
