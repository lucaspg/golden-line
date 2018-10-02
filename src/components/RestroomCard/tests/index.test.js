import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import Typography from '@material-ui/core/Typography';
import RestroomCard from '../index';
import StyledPaper from '../StyledPaper';
import StatusCircle from '../StatusCircle';
import StyledProgress from '../StyledProgress';

describe('<RestroomCard />', () => {
  it('renders title and red status circle when restroom is occupied', () => {
    const mockTitle = 'golden rain';
    const mockProps = {
      title: mockTitle,
      restroomCode: '481516',
    };
    const mockState = {
      occupied: true,
    };
    const wrapper = shallow(<RestroomCard {...mockProps} />);
    wrapper.setState({ ...mockState });
    expect(wrapper.find(StyledPaper)).toHaveLength(1);
    expect(wrapper.containsMatchingElement(
      <Typography variant="subheading" color="inherit">
        {mockTitle}
      </Typography>,
    )).toEqual(true);
    expect(wrapper.find(StatusCircle)).toHaveStyleRule('background-color', 'red');
  });

  it('renders title and green status circle when restroom is not occupied', () => {
    const mockTitle = 'golden rain';
    const mockProps = {
      title: mockTitle,
      restroomCode: '481516',
    };
    const mockState = {
      occupied: false,
    };
    const wrapper = shallow(<RestroomCard {...mockProps} />);
    wrapper.setState({ ...mockState });
    expect(wrapper.find(StyledPaper)).toHaveLength(1);
    expect(wrapper.containsMatchingElement(
      <Typography variant="subheading" color="inherit">
        {mockTitle}
      </Typography>,
    )).toEqual(true);
    expect(wrapper.find(StatusCircle)).toHaveStyleRule('background-color', 'lawngreen');
  });

  it('renders title and progress circle when component is loading', () => {
    const mockTitle = 'golden rain';
    const mockProps = {
      title: mockTitle,
      restroomCode: '481516',
    };
    const mockState = {
      occupied: '',
    };
    const wrapper = shallow(<RestroomCard {...mockProps} />);
    wrapper.setState({ ...mockState });
    expect(wrapper.find(StyledPaper)).toHaveLength(1);
    expect(wrapper.containsMatchingElement(
      <Typography variant="subheading" color="inherit">
        {mockTitle}
      </Typography>,
    )).toEqual(true);
    expect(wrapper.find(StyledProgress)).toHaveLength(1);
  });
});
