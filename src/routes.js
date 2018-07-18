import React from 'react';
import { NativeRouter, Switch, Route } from 'react-router-native';

import Signup from './views/Signup';
import Login from './views/Login';
import Main from './views/Main';
import VideoFullScreen from './views/VideoFullScreen';

export default () => (
  <NativeRouter>
    <Switch>
      <Route exact path="/" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/main" component={Main} />
      <Route exact path="/video/:videoIds" component={VideoFullScreen} />
    </Switch>
  </NativeRouter>
);
