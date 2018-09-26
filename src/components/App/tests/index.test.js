import React from 'react';
import { shallow } from 'enzyme';
import App from '../index';
import AppBar from '../../AppBar';

describe('<App />', () => {
  it('renders the app bar and the restroom list', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(AppBar)).toHaveLength(1);
  });
});
