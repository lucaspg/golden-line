import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import StyledPaper from './StyledPaper';
import StyledProgress from './StyledProgress';
import StatusCircle from './StatusCircle';
import { firebaseDatabase } from '../../util/firebaseUtils';

class RestroomCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      occupied: '',
    };
  }

  componentDidMount() {
    const { restroomCode } = this.props;
    const restroomRef = firebaseDatabase.ref(restroomCode);
    restroomRef.on('value', (snapshot) => {
      const data = snapshot.val();
      if (data) {
        this.setState({ occupied: data.occupied });
      }
    });
  }

  render() {
    const { occupied } = this.state;
    const { title } = this.props;
    return (
      <StyledPaper>
        <Typography variant="subheading" color="inherit">
          {title}
        </Typography>
        { occupied !== '' ? (<StatusCircle occupied={occupied} />) : <StyledProgress size={25} /> }
      </StyledPaper>
    );
  }
}

RestroomCard.propTypes = {
  restroomCode: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default RestroomCard;
