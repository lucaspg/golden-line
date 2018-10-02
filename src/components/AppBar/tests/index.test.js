import React from 'react';
import { shallow } from 'enzyme';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '../index';

describe('<AppBar />', () => {
  it('renders the toolbar and the typography components', () => {
    const wrapper = shallow(<AppBar />);
    expect(wrapper.find(Toolbar)).toHaveLength(1);
    expect(wrapper.containsMatchingElement(
      <Typography variant="title" color="inherit">
         Golden Line
      </Typography>,
    )).toEqual(true);
  });
});
