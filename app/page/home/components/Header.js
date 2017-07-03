/* @flow */

import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  Alert,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

import { Header, Button, Icon, Right, Left } from 'native-base';

const styles = StyleSheet.create({
  navmenu: {
    width: 28,
    height: 28,
    marginRight: 10,
  },
});

export default class BiliHeader extends Component {
  constructor(props) {
    super(props);
    this.search = 'paolino';
  }

  toMore() {
    console.log('hello');
  }

  renderMenuItems() {
    const menus = [
      {
        icon: 'https://facebook.github.io/react/img/logo_small.png',
        pressHandler: () => {
          Alert.alert('helo');
        },
      },
      {
        icon: 'https://facebook.github.io/react/img/logo_small.png',
        pressHandler: () => {
          console.log('this is b');
        },
      },
      {
        icon: 'https://facebook.github.io/react/img/logo_small.png',
        pressHandler: () => {
          console.log('this is c');
        },
      },
      {
        icon: 'https://facebook.github.io/react/img/logo_small.png',
        pressHandler: () => {
          console.log('this is d');
        },
      },
    ];

    return menus.map((menu, index) =>
      <TouchableWithoutFeedback key={index} onPress={menu.pressHandler}>
        <Image source={{ uri: menu.icon }} style={styles.navmenu} />
      </TouchableWithoutFeedback>
    );
  }

  render() {
    return (
      <Header style={{ height: 50 }} noShadow>
        <Left>
          <Button transparent onPress={this.props.onPress} light>
            <Icon name="list" />
            <Icon name="ios-person" />
            <Text style={{ color: 'white' }}>
              {this.search}
            </Text>
          </Button>
        </Left>
        <Right>
          {this.renderMenuItems()}
        </Right>
      </Header>
    );
  }
}

BiliHeader.propTypes = {
  onPress: React.PropTypes.func,
};
