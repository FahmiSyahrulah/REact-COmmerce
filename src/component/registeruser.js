import React, {Component} from "react";
import './registerband.css';
import { Link , Redirect} from "react-router-dom";
import { connect} from "unistore/react";
import {actions} from "../Store";

class Registeruser extends Component {
    doRegister = () => {
        this.props.postRegister().then(() => {
            alert("registrasi berhasil")
            return <Redirect to ="/login"/>
        });
      };
    render() {
        return (
            <div class="container reg-row">
                <div class="row justify-content-center mx-auto">
                <div class="card col-md-4">
                    <header class="card-header">
                        <h4 class="card-title mt-2">Sign up</h4>
                    </header>
                    <article class="card-body">
                        <form onSubmit={e => e.preventDefault()}>
                            <div class="form-row">
                                <div class="col form-group">
                                    <label>Username</label>
                                    <input type="text" name="username" class="form-control" placeholder="" onChange={e => this.props.setField(e)} />
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <input type="password" name="password" class="form-control" placeholder="" onChange={e => this.props.setField(e)} />
                            </div>
                            <div class="form-group">
                                <label>Email address</label>
                                <input type="email" name="usermail" class="form-control" placeholder="" onChange={e => this.props.setField(e)} />
                            </div>
                            <div class="form-group">
                                <label>Address</label>
                                <input type="text" name="useraddress" class="form-control" placeholder="" onChange={e => this.props.setField(e)} />
                            </div>
                            <div class="form-group">
                                <label>Phone</label>
                                <input type="text" name="userphone" class="form-control" placeholder="" onChange={e => this.props.setField(e)} />
                            </div>
                            <div class="form-group">
                                <button type="submit" onClick={() => this.doRegister()} class="btn btn-primary btn-block">
                                    Register
                                </button>
                            </div>
                        </form>
                    </article>
                    <div class="border-top card-body text-center">Have an account?
                        <Link to="/login">Log In</Link>
                    </div>
                </div>
                </div>
            </div>

        );
    }
}
export default connect("", actions)(Registeruser);
