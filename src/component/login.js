import React, {Component} from "react";
import './login.css';
import { connect} from "unistore/react";
import {actions} from "../Store";
import { Link , Redirect} from "react-router-dom";
import Footer from "./footer";

class Login extends Component {
    doLogin = () => {
        this.props.postLogin().then(() => {
            console.log("this", this);
            this.props.history.replace('/');
        });
      };
    render() {
        return (
            <div className="App">
            <div class="row d-flex justify-content-center">
                <div class="card col-md-4 d-block">
                <article class="card-body">
                    <h4 class="card-title text-center mb-4 mt-1">Sign in</h4>
                    <hr/>
                    <p class="text-success text-center">Some message goes here</p>
                    <form onSubmit={e => e.preventDefault()}>
                        <div class="form-group">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">
                                        <i class="fa fa-user"></i>
                                    </span>
                                </div>
                                <input type="text" name="username" class="form-control" placeholder="username"  onChange={e => this.props.setField(e)} />
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">
                                        <i class="fa fa-lock"></i>
                                    </span>
                                </div>
                                <input name="password" class="form-control" placeholder="******" type="password" onChange={e => this.props.setField(e)} />
                            </div>
                        </div>
                        <div class="form-group">
                            <button type="submit" onClick={() => this.doLogin()} class="btn btn-primary btn-block">
                                Login
                            </button>
                        </div>
                        <p class="text-center">
                            <Link to="/loginband" class="btn">Login as band</Link>
                        </p>
                    </form>
                </article>
            </div>
        </div>
        </div>
        );
    }
}
export default connect('username, password', actions)(Login);