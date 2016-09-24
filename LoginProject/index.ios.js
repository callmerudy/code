/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component,
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Register from './register';


class LoginProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Register />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('LoginProject', () => LoginProject);
