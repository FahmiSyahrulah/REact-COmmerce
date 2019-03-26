import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import './App.css';
import Footer from '../component/footer';
import Search from '../component/search';
import EventList from '../component/eventlist';

class Appevent extends Component {
  render() {
    return (
      <div className="App">
        <Search />
        <EventList />
      </div>
    );
  }
}

export default (withRouter(Appevent));
