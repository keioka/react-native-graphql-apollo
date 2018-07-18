import React, { Component } from 'react';
import { TouchableOpacity, Text, View, Image, TextInput, FlatList } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {
  withRouter,
} from 'react-router-native';

import styles from './Main.style';

class Main extends Component {

  state = {
    data: [{
      id: 1,
      name: 'kei',
      imageUrl: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiypdmahqjcAhXhjlQKHdV5BugQjRx6BAgBEAU&url=https%3A%2F%2Fstock.adobe.com%2Fimages&psig=AOvVaw0bMCL_u_IpWfH82vkW8a7X&ust=1531982639643613',
      videoUrl: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiypdmahqjcAhXhjlQKHdV5BugQjRx6BAgBEAU&url=https%3A%2F%2Fstock.adobe.com%2Fimages&psig=AOvVaw0bMCL_u_IpWfH82vkW8a7X&ust=1531982639643613'
    }, {
      id: 2,
      name: 'keio',
      imageUrl: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiypdmahqjcAhXhjlQKHdV5BugQjRx6BAgBEAU&url=https%3A%2F%2Fstock.adobe.com%2Fimages&psig=AOvVaw0bMCL_u_IpWfH82vkW8a7X&ust=1531982639643613',
      videoUrl: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiypdmahqjcAhXhjlQKHdV5BugQjRx6BAgBEAU&url=https%3A%2F%2Fstock.adobe.com%2Fimages&psig=AOvVaw0bMCL_u_IpWfH82vkW8a7X&ust=1531982639643613'
    }, {
      id: 3,
      name: 'keiok',
      imageUrl: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiypdmahqjcAhXhjlQKHdV5BugQjRx6BAgBEAU&url=https%3A%2F%2Fstock.adobe.com%2Fimages&psig=AOvVaw0bMCL_u_IpWfH82vkW8a7X&ust=1531982639643613',
      videoUrl: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiypdmahqjcAhXhjlQKHdV5BugQjRx6BAgBEAU&url=https%3A%2F%2Fstock.adobe.com%2Fimages&psig=AOvVaw0bMCL_u_IpWfH82vkW8a7X&ust=1531982639643613'
    }, {
      id: 4,
      name: 'keioka',
      imageUrl: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiypdmahqjcAhXhjlQKHdV5BugQjRx6BAgBEAU&url=https%3A%2F%2Fstock.adobe.com%2Fimages&psig=AOvVaw0bMCL_u_IpWfH82vkW8a7X&ust=1531982639643613',
      videoUrl: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiypdmahqjcAhXhjlQKHdV5BugQjRx6BAgBEAU&url=https%3A%2F%2Fstock.adobe.com%2Fimages&psig=AOvVaw0bMCL_u_IpWfH82vkW8a7X&ust=1531982639643613'
    }]
  }

  handleNavigationToFullScreen = (url) => {
    const { history } = this.props;
    history.push(`/video/1`);
  }

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => this.handleNavigationToFullScreen(item.videoUrl)}>
        <View style={styles.answer}>
          <Image source={{ uri: item.imageUrl}} />
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.background}>
        <View style={styles.header}>
          <Text style={styles.title}>Find Q</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.question}>
            <Text>What is your favorite?</Text>
            <View style={styles.answerList}>
              <Text>hi</Text>
              <FlatList
                data={this.state.data}
                renderItem={this.renderItem}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default withRouter(Main);
