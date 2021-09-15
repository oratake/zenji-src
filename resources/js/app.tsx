/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import index from './pages/index.tsx';
import About from './pages/About';
import theme from './theme.ts';

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={index} />
      <Route path="/about" component={About} />
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

