import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import './App.css';
import Footer from '../component/footer';
import Search from '../component/search';
import BandList from '../component/bandlist';

class Appband extends Component {
  render() {
    return (
      <div className="App">
        <Search />
        <BandList />
      </div>
    );
  }
}

export default (withRouter(Appband));
