import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import './App.css';
import MerchDetail from '../component/merchdetail';

class Appmerchdetail extends Component {
  render() {
    return (
      <div className="App">
        <MerchDetail />
      </div>
    );
  }
}

export default (withRouter(Appmerchdetail));
