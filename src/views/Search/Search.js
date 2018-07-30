import React, { Component } from 'react';
import {
  TouchableOpacity, Text, View, Image, TextInput, FlatList, StatusBar, ScrollView, LayoutAnimation,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {
  withRouter,
} from 'react-router-native';

import NavFooter from '../../components/NavFooter';
import styles from './Search.style';

class Search extends Component {
  state = {
    data: [{
      id: 1,
      name: 'kei',
      imageUrl: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiypdmahqjcAhXhjlQKHdV5BugQjRx6BAgBEAU&url=https%3A%2F%2Fstock.adobe.com%2Fimages&psig=AOvVaw0bMCL_u_IpWfH82vkW8a7X&ust=1531982639643613',
      videoUrl: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiypdmahqjcAhXhjlQKHdV5BugQjRx6BAgBEAU&url=https%3A%2F%2Fstock.adobe.com%2Fimages&psig=AOvVaw0bMCL_u_IpWfH82vkW8a7X&ust=1531982639643613',
    }, {
      id: 2,
      name: 'keio',
      imageUrl: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiypdmahqjcAhXhjlQKHdV5BugQjRx6BAgBEAU&url=https%3A%2F%2Fstock.adobe.com%2Fimages&psig=AOvVaw0bMCL_u_IpWfH82vkW8a7X&ust=1531982639643613',
      videoUrl: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiypdmahqjcAhXhjlQKHdV5BugQjRx6BAgBEAU&url=https%3A%2F%2Fstock.adobe.com%2Fimages&psig=AOvVaw0bMCL_u_IpWfH82vkW8a7X&ust=1531982639643613',
    }, {
      id: 3,
      name: 'keiok',
      imageUrl: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiypdmahqjcAhXhjlQKHdV5BugQjRx6BAgBEAU&url=https%3A%2F%2Fstock.adobe.com%2Fimages&psig=AOvVaw0bMCL_u_IpWfH82vkW8a7X&ust=1531982639643613',
      videoUrl: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiypdmahqjcAhXhjlQKHdV5BugQjRx6BAgBEAU&url=https%3A%2F%2Fstock.adobe.com%2Fimages&psig=AOvVaw0bMCL_u_IpWfH82vkW8a7X&ust=1531982639643613',
    }, {
      id: 4,
      name: 'keioka',
      imageUrl: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiypdmahqjcAhXhjlQKHdV5BugQjRx6BAgBEAU&url=https%3A%2F%2Fstock.adobe.com%2Fimages&psig=AOvVaw0bMCL_u_IpWfH82vkW8a7X&ust=1531982639643613',
      videoUrl: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiypdmahqjcAhXhjlQKHdV5BugQjRx6BAgBEAU&url=https%3A%2F%2Fstock.adobe.com%2Fimages&psig=AOvVaw0bMCL_u_IpWfH82vkW8a7X&ust=1531982639643613',
    }],
  }

  componentDidMount() {
    StatusBar.setHidden(false);
  }

  handleNavigationToFullScreen = (url) => {
    const { history } = this.props;
    history.push('/video/1');
  }

  renderItem = ({ item }) => (
    <TouchableOpacity key={item.id} onPress={() => this.handleNavigationToFullScreen(item.videoUrl)}>
      <View style={styles.answer}>
        <Image source={{ uri: item.imageUrl }} />
      </View>
    </TouchableOpacity>
  )

  render() {
    return (
      <ScrollView style={styles.background}>
        <View style={styles.header}>
          <Text style={styles.fontTitle}>
Find Qestions
          </Text>
        </View>
        <View style={styles.content}>
          <View style={styles.question}>
            <Text style={styles.fontSectionTitle}>
What is your favorite food?
            </Text>
            <View style={styles.answerList}>
              <FlatList
                data={this.state.data}
                renderItem={this.renderItem}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
          <View style={styles.question}>
            <Text style={styles.fontSectionTitle}>
What is your favorite actor in 2018 October?
            </Text>
            <View style={styles.answerList}>
              <FlatList
                data={this.state.data}
                renderItem={this.renderItem}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
          <View style={styles.question}>
            <Text style={styles.fontSectionTitle}>
What is your favorite food?
            </Text>
            <View style={styles.answerList}>
              <FlatList
                data={this.state.data}
                renderItem={this.renderItem}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
          <View style={styles.question}>
            <Text style={styles.fontSectionTitle}>
What is your favorite food?
            </Text>
            <View style={styles.answerList}>
              <FlatList
                data={this.state.data}
                renderItem={this.renderItem}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default withRouter(Search);
