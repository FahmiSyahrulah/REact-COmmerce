import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import bandProfil from '../component/bandprofile';

class Appbandprofil extends Component {
  render() {
    return (
      <div className="App">
        <bandProfil />
      </div>
    );
  }
}

export default (withRouter(Appbandprofil));
