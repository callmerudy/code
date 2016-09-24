/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

var First = require('./app/First');
var Second = require('./app/Second');
var State = require('./app/State');

class TestRoutes extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{
          id: 'First'
        }}
        renderScene={
          this.navigatorRenderScene
        }
      />
    );
  }
  navigatorRenderScene(route,navigator){
    _navigator = navigator;
    switch (route.id) {
      case 'First':
        return(<First navigator={navigator} title="First" />);
      case 'Second':
        return(<Second navigator={navigator} title="Second" />);
      case 'State':
        return(<State navigator={navigator} title="State" />);
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dddfd4',
  },
  largeText: {
    fontSize: 52,
    fontFamily: "HelveticaNeue-CondensedBold",
    paddingLeft: 20,
    paddingRight: 20,
    color: "#173e43"
  },
  awesomeText: {
    fontFamily: "Georgia",
    fontStyle: "italic",
    color: '#3fb0ac'
  }
});

AppRegistry.registerComponent('TestRoutes', () => TestRoutes);
