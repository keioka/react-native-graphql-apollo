import React, { Component } from 'react';
import { NativeRouter, Switch, Route } from 'react-router-native';
import { Font } from 'expo';

import Signup from './views/Signup';
import Login from './views/Login';
import Main from './views/Main';
import VideoFullScreen from './views/VideoFullScreen';
import NewAnswer from './views/NewAnswer';

export default class Routes extends Component {
  state = { fontLoaded: false }

  async componentDidMount() {
    await Font.loadAsync({
      'poppins-extrabold': require('./assets/fonts/Poppins-ExtraBold.ttf'),
      'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
      'poppins-semibold': require('./assets/fonts/Poppins-SemiBold.ttf'),
      'poppins-black': require('./assets/fonts/Poppins-Black.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    if (!this.state.fontLoaded) {
      return null;
    }
    return (
      <NativeRouter>
        <Switch>
          <Route exact path="/" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/answers/:questionId/new" component={NewAnswer} />
          <Route path="/main" component={Main} />
          <Route exact path="/video/:videoIds" component={VideoFullScreen} />
        </Switch>
      </NativeRouter>
    );
  }
}
