import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import './App.css';
import Userdashboard from '../component/userdashboard';

class Appuserdash extends Component {
  render() {
    return (
      <div className="App">
        <Userdashboard />
      </div>
    );
  }
}

export default (withRouter(Appuserdash));
