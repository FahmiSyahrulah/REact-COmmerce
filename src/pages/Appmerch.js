import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import './App.css';
import Footer from '../component/footer';
import Search from '../component/search';
import MerchList from '../component/merchlist';

class Appmerch extends Component {
  render() {
    return (
      <div className="App">
        <Search />
        <MerchList />
      </div>
    );
  }
}

export default (withRouter(Appmerch));
