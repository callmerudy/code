import React, { Component } from 'react';
import { Provider } from 'react-redux';
import styles from './styles'
import {
  Text,
  View
} from 'react-native';

class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          for Profile
        </Text>
      </View>
    );
  }
}

export default Profile;
