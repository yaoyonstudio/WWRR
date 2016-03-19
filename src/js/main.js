import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Menu from './components/Menu';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import News from './components/News';
import Newsinfo from './components/Newsinfo';
import Contact from './components/Contact';

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Menu}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="home" component={Home}></Route>
      <Route path="about" component={About}></Route>
      <Route path="service" component={Service}></Route>
      <Route path="news" component={News}></Route>
      <Route path="news/:id" component={Newsinfo}></Route>
      <Route path="contact" component={Contact}></Route>
    </Route>
  </Router>,
  app);
