import React from "react";
import {Route, Switch} from "react-router-dom";

import App from "./pages/App"
// import AppNotMatch from "./pages/AppNotMatch";
import Appregister from "./pages/Appregister";
import Appmerch from "./pages/Appmerch";
import login from "./component/login";
import Appevent from "./pages/Appevent";
import Appmerchdetail from "./pages/Appmerchdetail";
import Appband from "./pages/Appband";
import Appuserdash from "./pages/Appuserdash";
import Appbanddash from "./pages/Appbanddash";
import bandProfil from "./component/bandprofile";
import Appeventdetail from "./pages/Appeventdetail";
import loginband from "./component/loginband";
import EditMerchandise from "./component/formedit";
import Registerband from "./component/registerband";

const MainRoute = () => {
  return (
    <Switch>
      <Route exact path="/" component={App}></Route>
      <Route exact path="/login" component={login}></Route>
      <Route exact path="/register" component={Appregister}></Route>
      <Route exact path="/registerband" component={Registerband}></Route>
      <Route exact path="/merch" component={Appmerch}></Route>
      <Route exact path="/event" component={Appevent}></Route>
      <Route exact path="/merchdetail" component={Appmerchdetail}></Route>
      <Route exact path="/bands" component={Appband}></Route>
      <Route exact path="/userdash" component={Appuserdash}></Route>
      <Route exact path="/banddash" component={Appbanddash}></Route>
      {/* <Route exact path="/bandprofile" component={Appbandprofil}></Route> */}
      <Route exact path="/bandprof" component={bandProfil}></Route>
      <Route exact path="/eventdetail" component={Appeventdetail}></Route>
      <Route exact path="/loginband" component={loginband}></Route>
      <Route exact path="/formedit" component={EditMerchandise}></Route>

    </Switch>
  )
}

export default MainRoute;