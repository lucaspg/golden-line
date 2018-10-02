import React from 'react';
import { shallow } from 'enzyme';
import RestroomList from '../index';
import RestroomCard from '../../RestroomCard';

describe('<RestroomList />', () => {
  it('renders the restroom card', () => {
    const wrapper = shallow(<RestroomList />);
    expect(wrapper.find(RestroomCard)).toHaveLength(2);
  });
});
