import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import './App.css';
import Banddashboard from '../component/banddashboard';

class Appbanddash extends Component {
  render() {
    return (
      <div className="App">
        <Banddashboard />
      </div>
    );
  }
}

export default (withRouter(Appbanddash));
