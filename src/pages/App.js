import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import './App.css';
import Header from '../component/header';
import Slider from '../component/slider';
import HomeMerch from '../component/merchrecent';
import Footer from '../component/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Slider />
        <HomeMerch />
      </div>
    );
  }
}

export default (withRouter(App));