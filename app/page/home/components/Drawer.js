import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Drawer } from 'native-base';
import BiliHeader from './Header';
import NavBar from './NavBar';
import Sidebar from './Sidebar';


export default class NativeDrawer extends Component {

  closeDrawer() {
    this.drawer._root.close();
  }

  openDrawer() {
    this.drawer._root.open();
  }

  render() {
    return (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<Sidebar />}
        onClose={() => this.closeDrawer()}
        openDrawerOffset={0.25}
      >
        <BiliHeader
          onPress={() => {
            this.openDrawer();
          }}
        />
        <NavBar />
      </Drawer>
    );
  }
}

