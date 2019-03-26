import React, {Component} from "react";
import './header.css';
import { Link } from "react-router-dom";
import { connect} from "unistore/react";
import {actions} from "../Store";
import { withRouter } from "react-router-dom";

class Header extends Component {
    
    render() 
    {if(this.props.isLogin){
        return (
            <header>
                <nav class="navbar navbar-inverse">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <button
                                type="button"
                                class="navbar-toggle"
                                data-toggle="collapse"
                                data-target="#myNavbar">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <Link to="/" class="navbar-brand">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    class="d-block mx-auto"
                                    role="img"
                                    viewBox="0 0 24 24"
                                    focusable="false">
                                    <title>Product</title><circle cx="12" cy="12" r="10"/><path
                                        d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/></svg>
                            BlackLabel</Link>
                        </div>
                        <div class="collapse navbar-collapse" id="myNavbar">
                            <ul class="nav navbar-nav">
                                <li class="active">
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/bands" class="py-2 d-none d-md-inline-block">Bands</Link>
                                </li>
                                <li>
                                    <Link to="/merch" class="py-2 d-none d-md-inline-block" href="merchandise.html">Merchandise</Link>
                                </li>
                                <li>
                                    <Link to="/event" class="py-2 d-none d-md-inline-block">Events</Link>
                                </li>
                            </ul>
                            <ul class="nav navbar-nav navbar-right">
                                <li>  {this.props.status == 'user' && (
                                    <Link to="/userdash">
                                    <span class="glyphicon glyphicon-user"></span>
                                    Profile</Link>
                                )}
                                {this.props.status == 'band' && (
                                    <Link to="/banddash">
                                    <span class="glyphicon glyphicon-user"></span>
                                    Profile</Link>
                                )}                                  
                                    </li>
                                    <li>
                                    <Link to="/" onClick={() => this.props.postLogout()}>
                                    <span class="glyphicon glyphicon-log-in"></span>
                                    Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
     else{
        return (
            <header>
                <nav class="navbar navbar-inverse">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <button
                                type="button"
                                class="navbar-toggle"
                                data-toggle="collapse"
                                data-target="#myNavbar">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <Link to="/" class="navbar-brand">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    class="d-block mx-auto"
                                    role="img"
                                    viewBox="0 0 24 24"
                                    focusable="false">
                                    <title>Product</title><circle cx="12" cy="12" r="10"/><path
                                        d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/></svg>
                            BlackLabel</Link>
                        </div>
                        <div class="collapse navbar-collapse" id="myNavbar">
                            <ul class="nav navbar-nav">
                                <li class="active">
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/bands" class="py-2 d-none d-md-inline-block">Bands</Link>
                                </li>
                                <li>
                                    <Link to="/merch" class="py-2 d-none d-md-inline-block" href="merchandise.html">Merchandise</Link>
                                </li>
                                <li>
                                    <Link to="/event" class="py-2 d-none d-md-inline-block">Events</Link>
                                </li>
                            </ul>
                            <ul class="nav navbar-nav navbar-right">
                                <li>
                                    <Link to="/register">
                                        <span class="glyphicon glyphicon-user"></span>
                                        Sign Up</Link>
                                </li>
                                <li>
                                    <Link to="login">
                                        <span class="glyphicon glyphicon-log-in"></span>
                                        Login</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
     }        
    }
}
export default connect('isLogin ,status', actions)(withRouter(Header));
