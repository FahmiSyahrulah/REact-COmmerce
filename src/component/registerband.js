import React, {Component} from "react";
import './registerband.css';
import {Redirect} from "react-router-dom";

class Registerband extends Component {
    doRegister = () => {
        this.props.postRegisterband().then(() => {
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
                        <a href="loginband.html" class="float-right btn btn-outline-primary mt-1">Log in</a>
                        <h4 class="card-title mt-2">Sign up</h4>
                    </header>
                    <article class="card-body">
                        <form onSubmit={e => e.preventDefault()}>
                            <div class="form-row">
                                <div class="col form-group">
                                    <label>Username</label>
                                    <input type="text" name="username" class="form-control" placeholder="" onChange={e => this.props.setField(e)}/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <input type="password" name="password" class="form-control" placeholder="" onChange={e => this.props.setField(e)}/>
                            </div>
                            <div class="form-group">
                                <label>Band name</label>
                                <input type="text" name="bandname" class="form-control" placeholder="" onChange={e => this.props.setField(e)}/>
                            </div>
                            <div class="form-group">
                                <label>Email</label>
                                <input type="email" name="bandmail" class="form-control" placeholder="" onChange={e => this.props.setField(e)}/>
                            </div>
                            <div class="form-group">
                                <label>Address</label>
                                <input type="text" name="bandaddress" class="form-control" placeholder="" onChange={e => this.props.setField(e)}/>
                            </div>
                            <div class="form-group">
                                <label>Band Description</label><br/>
                                <input type="text" name="banddesc" class="form-control" placeholder="" onChange={e => this.props.setField(e)}/>
                            </div>
                            <div class="form-group">
                                <label>Band Phone</label><br/>
                                <input type="text" name="bandphone" class="form-control" placeholder="" onChange={e => this.props.setField(e)}/>
                            </div>
                            <div class="form-group">
                                <label>Band Photo</label><br/>
                                <input type="text" name="bandphoto" class="form-control" placeholder="" onChange={e => this.props.setField(e)}/>
                            </div>
                            <div class="form-group">
                                <button type="submit" onClick={() => this.doRegister()} class="btn btn-primary btn-block">
                                    Register
                                </button>
                            </div>
                        </form>
                    </article>
                    <div class="border-top card-body text-center">Have an account?
                        <a href="">Log In</a>
                    </div>
                </div>
                </div>
            </div>

        );
    }
}
export default Registerband;
