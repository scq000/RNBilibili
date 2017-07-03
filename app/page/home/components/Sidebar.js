import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
// import { Container } from 'native-base';

export default class Sidebar extends Component {
  render() {
    return (
      <View style={style.sidebar}>
        <Text>
                hello , a
            </Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  sidebar: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
