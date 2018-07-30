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
import TabNavigator from "react-native-tab-navigator";
import { Ionicons } from "@expo/vector-icons";

import { withRouter } from "react-router-native";

import styles from "./NavFooter.style";

const routes = [
  {
    key: 0,
    path: "/main",
    title: "Feed",
    icon: "ios-home-outline"
  },
  {
    key: 1,
    path: "/main/profile",
    title: "Profile",
    icon: "ios-contact-outline"
  },
  {
    key: 2,
    path: "/main/selectQuestion",
    title: "New Answer",
    icon: "md-add-circle"
  },
  {
    key: 3,
    path: "/main/search",
    title: "Find",
    icon: "ios-search-outline"
  },
  {
    key: 4,
    path: "/main/notification",
    title: "Feed",
    icon: "ios-notifications-outline"
  }
];

class NavFooter extends Component {
  state = {
    index: 0
  };

  handleNavigation = ({ key, path }) => {
    const { history } = this.props;
    this.setState(
      () => ({
        index: key
      }),
      () => {
        history.push(path);
      }
    );
  };

  render() {
    return (
      <TabNavigator tabBarStyle={styles.tabBarStyle}>
        {routes.map(route => (
          <TabNavigator.Item
            selected={this.state.index === route.key}
            renderIcon={() => (
              <Ionicons name={route.icon} size={32} color="#424242" />
            )}
            renderSelectedIcon={() => (
              <Ionicons name={route.icon} size={32} color="#078BFB" />
            )}
            titleStyle={styles.fontTabTitle}
            title=""
            onPress={() => this.handleNavigation(route)}
          >
            <View />
          </TabNavigator.Item>
        ))}
      </TabNavigator>
    );
  }
}

export default withRouter(NavFooter);
