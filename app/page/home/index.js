import React, { Component } from 'react';
import { Container } from 'native-base';
import NativeDrawer from './components/Drawer';

export default class HomePage extends Component {
  render() {
    return (
      <Container>
        <NativeDrawer />
      </Container>
    );
  }
}
