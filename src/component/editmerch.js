import React, {Component} from "react";
import './login.css';
import {connect} from "unistore/react";
import {actions} from "../Store";

class PostMerch extends Component {
    render() {
        return (
            <div class="card-dashboard content-dashboard">
                <header class="card-header">
                    <h4 class="card-title mt-2">tambah merchandise</h4>
                </header>
                <article class="card-body">
                    <form onSubmit={e => e.preventDefault()}>
                        <div class="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                name="merch_name"
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
                            <label>Kategori</label>
                            <input
                                type="text"
                                name="kategori"
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
                                name="merch_desc"
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
                                name="merch_photo"
                                class="form-control"
                                placeholder=""
                                onChange={e => this
                                    .props
                                    .setField(e)}/>
                        </div>
                        <div class="form-group">
                            <button
                                type="submit"
                                onClick={() => this.props.postMerch()}
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
export default connect('', actions)(PostMerch);
