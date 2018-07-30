import React, { Component } from 'react';
import {
  TouchableOpacity, Text, View, Image, TextInput, FlatList, StatusBar, ScrollView,
} from 'react-native';
import { Switch, Route, Redirect } from 'react-router-native';

import Carousel from 'react-native-snap-carousel';
import {
  withRouter,
} from 'react-router-native';

import NavFooter from '../../components/NavFooter';
import Header from '../../components/Header';

import Feed from '../Feed';
import Profile from '../Profile';
import Search from '../Search';
import SelectQuestion from '../SelectQuestion';
import Notification from '../Notification';

import styles from './Main.style';

class Main extends Component {
  componentDidMount() {
    StatusBar.setHidden(false);
  }

  render() {
    return (
      <View style={styles.background}>
        <Header />
        <Switch>
          <Route exact path="/main" component={Feed} />
          <Route exact path="/main/profile" component={Profile} />
          <Route exact path="/main/search" component={Search} />
          <Route exact path="/main/selectQuestion" component={SelectQuestion} />
          <Route exact path="/main/notification" component={Notification} />
        </Switch>
        <NavFooter />
      </View>
    );
  }
}

export default withRouter(Main);
