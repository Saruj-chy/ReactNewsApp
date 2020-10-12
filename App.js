import React, { Component } from 'react';
import Product from './src/screens/Product/Product';
import TabScreen from './src/screens/TabScreen';

import { Image, View } from 'react-native';
import { profile_logo } from './src/image/attend.png'

export default class App extends Component {
  render() {
    return (
      <TabScreen />
    );
  }
}