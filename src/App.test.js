import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './App';

import Layout from './components/layout';
import DroneList from './pages/dronesList';

describe('App', () => {
  test('renders correctly', () => {
    const wrapper = shallow(<App />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('renders layout with "title"', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(Layout).prop('title')).toEqual('Welcome to the Drone Manager');
  });

  test('renders "DroneList" component', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(DroneList).exists()).toBe(true);
  });
});
