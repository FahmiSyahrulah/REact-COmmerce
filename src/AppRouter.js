import React, { Component } from "react";
import MainRoute from "./Mainroute";
import { withRouter } from "react-router-dom";

import Header from "./component/header";
import Footer from "./component/footer";

class AppAjax extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainRoute/>
        <Footer />
      </div>
    )
  }
}

export default withRouter(AppAjax)