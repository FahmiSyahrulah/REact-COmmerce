import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import './App.css';
import Footer from '../component/footer';
import Login from '../component/login';

class Applogin extends Component {
  
  render() {
    return (
      <div className="App">
        <Login />
        <Footer />
      </div>
    );
  }
}

export default (withRouter(Applogin));
