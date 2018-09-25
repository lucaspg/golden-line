import React, { Fragment } from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import amber from '@material-ui/core/colors/amber';

import RestroomList from '../RestroomList';
import AppBar from '../AppBar';

const theme = createMuiTheme({
  palette: {
    primary: amber,
  },
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Fragment>
      <AppBar />
      <RestroomList />
    </Fragment>
  </MuiThemeProvider>
);

export default App;
