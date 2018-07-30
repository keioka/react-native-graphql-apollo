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
  TouchableHighlight
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { withRouter } from "react-router-native";

import styles from "./Header.style";

class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.fontHeader}>AMA</Text>
      </View>
    );
  }
}

export default withRouter(Header);
