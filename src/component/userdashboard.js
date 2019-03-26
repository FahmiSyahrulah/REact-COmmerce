import React, {Component} from "react";
import Leftdashboard from "./dashboarduserleft";
import UserPhoto from "./userpoto";
import './userdashboard.css'
import {Redirect} from "react-router-dom";
import {connect} from "unistore/react";
import {actions} from "../Store";
import {withRouter} from "react-router-dom";
class Userdashboard extends Component {

    componentDidMount = async () => {
        this
            .props
            .getUserData()
        this
            .props
            .getUserTrans()
        this
            .props
            .getUserTransmerch()
    }
    doEdit = () => {
        this
            .props
            .editUser()
            .then(() => {
                console.log("this", this);
                this
                    .props
                    .history
                    .replace('/userdash');
            });
    };
    render() {
        console.log("isacijsacsa",this.props.merchTrans);
        if (this.props.isLogin) {
            return (
                <section class="section-main bg padding-bottom">
                    <div class="container">
                        <div class="row no-gutters border border-top-0 bg-white">
                            <aside class="col-lg-5-24">
                                <nav>
                                    <div class="title-category bg-secondary d-none d-lg-block">
                                        <span>Welcome, {this.props.username}</span>
                                    </div>
                                    <div id="exTab1">
                                        <ul class="menu-category nav-pills">
                                            <li>
                                                <a href="#1a" data-toggle="tab">Edit profile
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#2a" data-toggle="tab">Transaksi tiket
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#3a" data-toggle="tab">Transaksi merch
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#4a" data-toggle="tab">Delete account
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </aside>
                            <aside class="col-lg-7">
                                <div class="tab-content clearfix-id">
                                    <div class="tab-pane active" id="1a">
                                        <div class="row">
                                            <div class="card-dashboard content-dashboard">
                                                <div class="row no-gutters">
                                                    <aside class="col-sm-5 border-right">
                                                        <article class="gallery-wrap">
                                                            <div class="img-big-wrap-dashboard">
                                                                <div>
                                                                    <a
                                                                        href="https://cdn1.iconfinder.com/data/icons/avatars-55/100/avatar_profile_user_music_headphones_shirt_cool-512.png"
                                                                        data-fancybox="">
                                                                        <img
                                                                            src="https://cdn1.iconfinder.com/data/icons/avatars-55/100/avatar_profile_user_music_headphones_shirt_cool-512.png"/></a>
                                                                </div>
                                                            </div>
                                                        </article>
                                                    </aside>
                                                    <aside class="col-sm-7">
                                                        <article class="p-5 artikel">
                                                            <h3 class="title mb-3">{this.props.username}</h3>

                                                            <dl class="row">
                                                                <dt class="col-sm-3">Address</dt>
                                                                <dd class="col-sm-9">{this.props.useraddress}</dd>

                                                                <dt class="col-sm-3">Email</dt>
                                                                <dd class="col-sm-9">{this.props.usermail}
                                                                </dd>

                                                                <dt class="col-sm-3">Phone</dt>
                                                                <dd class="col-sm-9">{this.props.userphone}
                                                                </dd>

                                                            </dl>
                                                            <hr/>
                                                            <a href="#7a" class="btn  btn-primary" data-toggle="tab">
                                                                Edit
                                                            </a>
                                                        </article>
                                                    </aside>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="tab-pane" id="2a">
                                        <div class="row">
                                            <div class="card-dashboard content-dashboard">
                                                <div class="row no-gutters">

                                                    <table class="table">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">N0</th>
                                                                <th scope="col">Event Name</th>
                                                                <th scope="col">Band</th>
                                                                <th scope="col">Quantity</th>
                                                                <th scope="col">Price</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                this
                                                                    .props
                                                                    .eventTrans
                                                                    .map((item, key) => {
                                                                        return (
                                                                            <tr>
                                                                                <th scope="row">{key+1}</th>
                                                                                <td>{item.event_name}</td>
                                                                                <td>{item.bandName}</td>
                                                                                <td>{item.quantity}</td>
                                                                                <td>Rp {item.price}</td>
                                                                            </tr>
                                                                        );
                                                                    })
                                                            }

                                                        </tbody>
                                                    </table>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="tab-pane" id="3a">
                                        <div class="row">
                                            <div class="card-dashboard content-dashboard">
                                                <div class="row no-gutters">

                                                    <table class="table">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">N0</th>
                                                                <th scope="col">Merch Name</th>
                                                                <th scope="col">Band</th>
                                                                <th scope="col">Quantity</th>
                                                                <th scope="col">Price</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                this
                                                                    .props
                                                                    .merchTrans
                                                                    .map((item, key) => {
                                                                        return (
                                                                            <tr>
                                                                                <th scope="row">{key+1}</th>
                                                                                <td>{item.merch_name}</td>
                                                                                <td>{item.bandName}</td>
                                                                                <td>{item.quantity}</td>
                                                                                <td>Rp {item.price}</td>
                                                                            </tr>
                                                                        );
                                                                    })
                                                            }

                                                        </tbody>
                                                    </table>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="tab-pane" id="4a">
                                        <div class="row">
                                            <p class="content-dashboard">Apakah anda yakin akan menghapus akun anda?</p><hr/>
                                            <a href="#" class="btn  btn-primary">
                                                Ya
                                            </a>
                                            <a href="#" class="btn  btn-primary" data-toggle="tab">
                                                Tidak
                                            </a>
                                        </div>
                                    </div>
                                    <div class="tab-pane" id="7a">
                                        <div class="row justify-content-center">
                                            <div class="card-dashboard content-dashboard">
                                                <header class="card-header">
                                                    <h4 class="card-title mt-2">Edit profile</h4>
                                                </header>
                                                <article class="card-body">
                                                    <form onSubmit={e => e.preventDefault()}>
                                                        <div class="form-group">
                                                            <label>Password</label>
                                                            <input
                                                                type="password"
                                                                name="password"
                                                                class="form-control"
                                                                placeholder=""
                                                                onChange={e => this
                                                                    .props
                                                                    .setField(e)}/>
                                                        </div>
                                                        <div class="form-group">
                                                            <label>Phone</label>
                                                            <input
                                                                type="text"
                                                                name="userphone"
                                                                class="form-control"
                                                                placeholder=""
                                                                onChange={e => this
                                                                    .props
                                                                    .setField(e)}/>
                                                        </div>
                                                        <div class="form-group">
                                                            <label>Address</label>
                                                            <input
                                                                type="text"
                                                                name="useraddress"
                                                                class="form-control"
                                                                placeholder=""
                                                                onChange={e => this
                                                                    .props
                                                                    .setField(e)}/>
                                                        </div>
                                                        <div class="form-group">
                                                            <button
                                                                type="submit"
                                                                onClick={() => this.doEdit()}
                                                                class="btn btn-primary btn-block">
                                                                Save
                                                            </button>
                                                        </div>
                                                    </form>
                                                </article>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>
            )
        } else {
            return (<Redirect to="login"/>)
        }
    }
}
export default connect(
    'isLogin, username, useraddress, usermail, userphone, eventTrans, merchTrans',
    actions
)(withRouter(Userdashboard));
