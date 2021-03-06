/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

// TODO: 折を見て削除する issue #2
// require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import index from './pages/index';
import Dashboard from './pages/Dashboard';
import theme from './theme';

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={index} />
      <Route path="/dashboard" component={Dashboard} />
    </BrowserRouter>
  );
}

if (document.getElementById('app')) {
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>,
    document.getElementById('app')
  );
}
