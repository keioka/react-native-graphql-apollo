import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  StatusBar,
  ScrollView,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { withRouter } from 'react-router-native';

import FeedContainer from '../../containers/FeedContainer';
import NavFooter from '../../components/NavFooter';
import styles from './Feed.style';

class Feed extends Component {
  componentDidMount() {
    StatusBar.setHidden(false);
  }

  render() {
    const { feeds, isLoading } = this.props;
    return (
      <ScrollView style={styles.background}>
        {isLoading && <Text>
isLoading
</Text>}
        {feeds &&
          feeds.map(feed => (
            <View>
              <Text>{feed.name}</Text>
              <Image source={feed.imageUrl} style={{ width: 68, height: 58 }} />
            </View>
          ))}
      </ScrollView>
    );
  }
}

export default withRouter(FeedContainer(Feed));
