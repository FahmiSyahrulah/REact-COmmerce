import React, {Component} from "react";
import './login.css';
import {connect} from "unistore/react";
import {actions} from "../Store";

class PostEvent extends Component {
    render() {
        return (
            <div class="card-dashboard content-dashboard">
                <header class="card-header">
                    <h4 class="card-title mt-2">event</h4>
                </header>
                <article class="card-body">
                    <form onSubmit={e => e.preventDefault()}>
                        <div class="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                name="event_name"
                                class="form-control"
                                placeholder=""
                                onChange={e => this
                                    .props
                                    .setField(e)}/>
                        </div>
                        <div class="form-group">
                            <label>Price</label>
                            <input
                                type="text"
                                name="price"
                                class="form-control"
                                placeholder=""
                                onChange={e => this
                                    .props
                                    .setField(e)}/>
                        </div>
                        <div class="form-group">
                            <label>Lokasi</label>
                            <input
                                type="text"
                                name="location"
                                class="form-control"
                                placeholder=""
                                onChange={e => this
                                    .props
                                    .setField(e)}/>
                        </div>
                        <div class="form-group">
                            <label>Quantity</label>
                            <input
                                type="text"
                                name="quantity"
                                class="form-control"
                                placeholder=""
                                onChange={e => this
                                    .props
                                    .setField(e)}/>
                        </div>
                        <div class="form-group">
                            <label>Deskripsi</label>
                            <input
                                type="text"
                                name="event_desc"
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
                                name="event_photo"
                                class="form-control"
                                placeholder=""
                                onChange={e => this
                                    .props
                                    .setField(e)}/>
                        </div>
                        <div class="form-group">
                            <button
                                type="submit"
                                onClick={() => this.props.postEvent()}
                                class="btn btn-primary btn-block">
                                Save
                            </button>
                        </div>
                    </form>
                </article>
            </div>

        );
    }
}
export default connect('', actions)(PostEvent);
