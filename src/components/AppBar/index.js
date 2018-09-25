import React from 'react';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const AppBar = () => (
  <MuiAppBar position="static">
    <Toolbar>
      <Typography variant="title" color="inherit">
        Golden line
      </Typography>
    </Toolbar>
  </MuiAppBar>
);

export default AppBar;
