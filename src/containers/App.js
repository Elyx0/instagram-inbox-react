import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme-insta';

const App = ({ children }) => (<ThemeProvider theme={theme}>
  <div className="App">{ children }</div>
</ThemeProvider>);
export default App;
