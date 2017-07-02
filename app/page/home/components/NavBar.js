/* @flow weak */

import React from 'react';
import {
    Text,
} from 'react-native';

import { Tabs, Tab } from 'native-base';

const NavBar = () => (
  <Tabs initialPage={0}>
    <Tab heading="直播">
      <Text>直播</Text>
    </Tab>
    <Tab heading="推荐">
      <Text>推荐</Text>
    </Tab>
    <Tab heading="追番">
      <Text>追番</Text>
    </Tab>
    <Tab heading="分区">
      <Text>分区</Text>
    </Tab>
    <Tab heading="动态">
      <Text>动态</Text>
    </Tab>
    <Tab heading="发现">
      <Text>发现</Text>
    </Tab>
  </Tabs>
);

export default NavBar;
