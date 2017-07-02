import React, { Component } from 'react';
import { Container } from 'native-base';
import Header from './components/Header';
import NavBar from './components/NavBar';

export default class HomePage extends Component {
  render() {
    return (
      <Container>
        <Header />
        <NavBar />
      </Container>
    );
  }
}
