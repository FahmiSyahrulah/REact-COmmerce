import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import './App.css';
import EventDetail from '../component/eventdetail';

class Appeventdetail extends Component {
  render() {
    return (
      <div className="App">
        <EventDetail />
      </div>
    );
  }
}

export default (withRouter(Appeventdetail));
