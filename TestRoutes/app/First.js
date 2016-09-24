import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

class First extends Component {

  onButtonPress(){
    this.props.navigator.push({
      id: 'Second'
    });
  }
  // onPress={this.onButtonPress.bind(this)} style={styles.button}
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.largeText}> I made my first view, and it even has a button!</Text>
        <TouchableHighlight style={styles.button}>
         <Text style={styles.buttonText}> ill do something </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dddfd4'
  },
  largeText: {
    flex: 1,
    fontSize: 52,
    fontFamily: 'HelveticaNeue-CondensedBold',
    paddingTop: 40,
    paddingRight: 20,
    paddingLeft: 20,
    color: '#173e43'

  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#3fb0ac'
  },
  buttonText: {
    fontFamily: 'HelveticaNeue-CondensedBold',
    color: '#fae596'
  }
});

module.exports = First;
