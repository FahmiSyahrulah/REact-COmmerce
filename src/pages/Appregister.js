import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import './App.css';
import Registeruser from '../component/registeruser';

class Appregister extends Component {
  render() {
    return (
      <div className="App">
        <Registeruser />
      </div>
    );
  }
}

export default (withRouter(Appregister));