import { createMuiTheme, CssBaseline } from '@material-ui/core';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouting from './AppRouting';
import store from './redux/store';

const muiTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
  typography: {
    fontSize: 14 * 16,
  },
});

function App() {
  return (
    <ReduxProvider store={store}>
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline>
          <Router>
            <AppRouting />
          </Router>
        </CssBaseline>
      </MuiThemeProvider>
    </ReduxProvider>
  );
}

export default App;
