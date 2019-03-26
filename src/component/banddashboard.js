import React, {Component} from "react";
import './userdashboard.css'
import {Redirect} from "react-router-dom";
import {connect} from "unistore/react";
import {actions} from "../Store";
import {withRouter} from "react-router-dom";
import PostMerch from "./editmerch";
import PostEvent from "./postevent";

class Banddashboard extends Component {

    componentDidMount = async () => {
        this
            .props
            .getBandData()
        this
            .props
            .getBandTrans()
        this
            .props
            .getBandTransmerch()
        this
            .props
            .getBandMerch()
        this
            .props
            .getBandEvent()

    }
    doEdit = () => {
        this
            .props
            .editBand()
            .then(() => {
                console.log("this", this);
                this
                    .props
                    .history
                    .replace('/');
            });
    };
    editMerch = e => {
        console.log("nosanccsac", e.target.value)
        this.props.merchUpdate(e.target.value)
        .then(() => {
            console.log("this", this);
            this
                .props
                .history
                .replace('/formedit');
        });
        };
    deleteMerch = e => {
        console.log("nosanccsac", e.target.value)
        this.props.merchDelete(e.target.value)
        .then(() => {
            alert("data terhapus")
            console.log("this", this);
            this
                .props
                .history
                .replace('/home');
        });
        };

    render() {
        console.log("isacijsacsa", this.props.merchTrans);
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
                                                <a href="#5a" data-toggle="tab">Merchandises
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#6a" data-toggle="tab">Events
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
                                                                    <a href={this.props.bandphoto} data-fancybox="">
                                                                        <img src={this.props.bandphoto}/></a>
                                                                </div>
                                                            </div>
                                                        </article>
                                                    </aside>
                                                    <aside class="col-sm-7">
                                                        <article class="p-5 artikel">
                                                            <h3 class="title mb-3">{this.props.bandname}</h3>
                                                            <dl>
                                                                <dt>Band Description</dt>
                                                                <dd>
                                                                    <p>{this.props.banddesc}
                                                                    </p>
                                                                </dd>
                                                            </dl>
                                                            <dl class="row">
                                                                <dt class="col-sm-3">Address</dt>
                                                                <dd class="col-sm-9">{this.props.bandaddress}</dd>

                                                                <dt class="col-sm-3">Email</dt>
                                                                <dd class="col-sm-9">{this.props.bandmail}
                                                                </dd>

                                                                <dt class="col-sm-3">Phone</dt>
                                                                <dd class="col-sm-9">{this.props.bandphone}
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
                                                                <th scope="col">No</th>
                                                                <th scope="col">Event Name</th>
                                                                <th scope="col">Buyer</th>
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
                                                                                <th scope="row">{key + 1}</th>
                                                                                <td>{item.event_name}</td>
                                                                                <td>{item.user_name}</td>
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
                                                                <th scope="col">Buyer</th>
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
                                                                                <th scope="row">{key + 1}</th>
                                                                                <td>{item.merch_name}</td>
                                                                                <td>{item.user_name}</td>
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
                                    <div class="tab-pane" id="5a">
                                        <div class="row">
                                            <div class="card-dashboard content-dashboard">
                                                <div class="row no-gutters">

                                                    <table class="table">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">No</th>
                                                                <th scope="col">Product Name</th>
                                                                <th scope="col">Category</th>
                                                                <th scope="col">Stock</th>
                                                                <th scope="col">Price</th>
                                                                <th scope="col">Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                this
                                                                    .props
                                                                    .merchData
                                                                    .map((item, key) => {
                                                                        return (
                                                                            <tr>
                                                                                <th scope="row">{key + 1}</th>
                                                                                <td>
                                                                                    {item.merch_name}</td>
                                                                                <td>{item.kategori}</td>
                                                                                <td>{item.quantity}</td>
                                                                                <td>Rp {item.price}</td>
                                                                                <td>
                                                                                    <button onClick={(e) => this.editMerch(e)} value={item.merch_id} class="btn btn-outline-info">Edit Product</button>
                                                                                    <button onClick={(e) => this.deleteMerch(e)} value={item.merch_id} class="btn btn-outline-danger">Delete Product</button>
                                                                                </td>
                                                                            </tr>
                                                                        );
                                                                    })
                                                            }
                                                            <a href="#8a" class="btn btn-outline-info" data-toggle="tab">Tambah Product</a>
                                                        </tbody>
                                                    </table>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="tab-pane" id="6a">
                                        <div class="row">
                                            <div class="card-dashboard content-dashboard">
                                                <div class="row no-gutters">

                                                    <table class="table">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">No</th>
                                                                <th scope="col">Event Name</th>
                                                                <th scope="col">Location</th>
                                                                <th scope="col">Stock</th>
                                                                <th scope="col">Price</th>
                                                                <th scope="col">Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                this
                                                                    .props
                                                                    .eventData
                                                                    .map((item, key) => {
                                                                        return (
                                                                            <tr>
                                                                                <th scope="row">{key + 1}</th>
                                                                                <td>
                                                                                    {item.event_name}</td>
                                                                                <td>{item.location}</td>
                                                                                <td>{item.quantity}</td>
                                                                                <td>Rp {item.price}</td>
                                                                                <td>
                                                                                    <a href="formedit.html" class="btn btn-outline-info">Edit Product</a>
                                                                                    <a href="formedit.html" class="btn btn-outline-danger">Delete Product</a>
                                                                                </td>
                                                                            </tr>
                                                                        );
                                                                    })
                                                            }
                                                            <a href="#9a" class="btn btn-outline-info" data-toggle="tab">Tambah Product</a>
                                                        </tbody>
                                                    </table>

                                                </div>
                                            </div>

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
                                                            <label>Band Name</label>
                                                            <input
                                                                type="text"
                                                                name="bandname"
                                                                class="form-control"
                                                                placeholder=""
                                                                onChange={e => this
                                                                    .props
                                                                    .setField(e)}/>
                                                        </div>
                                                        <div class="form-group">
                                                            <label>Band Description</label>
                                                            <input
                                                                type="text"
                                                                name="banddesc"
                                                                class="form-control"
                                                                placeholder=""
                                                                onChange={e => this
                                                                    .props
                                                                    .setField(e)}/>
                                                        </div>
                                                        <div class="form-group">
                                                            <label>Band Mail</label>
                                                            <input
                                                                type="text"
                                                                name="bandmail"
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
                                                                name="bandaddress"
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
                                                                name="bandphone"
                                                                class="form-control"
                                                                placeholder=""
                                                                onChange={e => this
                                                                    .props
                                                                    .setField(e)}/>
                                                        </div>
                                                        <div class="form-group">
                                                            <label>Photo</label>
                                                            <input
                                                                type="text"
                                                                name="bandphoto"
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
                                    <div class="tab-pane" id="8a">
                                        <div class="row">
                                            <PostMerch/>

                                        </div>
                                    </div>
                                    <div class="tab-pane" id="9a">
                                        <div class="row">
                                            <PostEvent />

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
    'isLogin, username, bandname, bandaddress, bandmail, bandphone, bandphoto, band' +
            'desc, eventTrans, merchTrans, merchData, eventData',
    actions
)(withRouter(Banddashboard));