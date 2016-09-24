import React, { Component } from 'react';
import { Provider } from 'react-redux';
import styles from './styles'
import {
  Text,
  View
} from 'react-native';

class Post extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          for Post
        </Text>
      </View>
    );
  }
}

export default Post;
