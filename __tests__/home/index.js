import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header, Tab } from 'native-base';
import { shallow } from 'enzyme';
import HomePage from '../../app/page/home';

describe('<HomePage />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HomePage />);
  });

  it('should render', () => {
    expect(wrapper.length).toEqual(1);
  });

  // it('should have a Header', () => {
  //   expect(wrapper.find(Header)).toHaveLength(1);
  // });

  it('should have 6 Tabs', () => {
    expect(wrapper.find(Tab)).toHaveLength(6);
  });
});
