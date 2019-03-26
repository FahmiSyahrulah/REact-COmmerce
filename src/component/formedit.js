import React, {Component} from "react";
import './registerband.css';
import { Link , Redirect} from "react-router-dom";
import { connect} from "unistore/react";
import {actions} from "../Store";

class EditMerchandise extends Component {
    doEdit= () => {
        console.log("cekkkkkkkk")
        this.props.Editmerchand().then(() => {
            alert("edit berhasil")
            return <Redirect to ="/"/>
        });
      };
    render() {
        return (
            <div class="container reg-row">
                <div class="row justify-content-center mx-auto">
                <div class="card col-md-4">
                    <header class="card-header">
                        <h4 class="card-title mt-2">Edit Merchandise</h4>
                    </header>
                    <article class="card-body">
                        <form onSubmit={e => e.preventDefault()}>
                            <div class="form-row">
                                <div class="col form-group">
                                    <label>Merchname</label>
                                    <input type="text" name="merch_name" value={this.props.merch_name} class="form-control" placeholder="" onChange={e => this.props.setField(e)} />
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Price</label>
                                <input type="text" name="price" value={this.props.price} class="form-control" placeholder="" onChange={e => this.props.setField(e)} />
                            </div>
                            <div class="form-group">
                                <label>Kategori</label>
                                <input type="text" name="kategori" value={this.props.kategori} class="form-control" placeholder="" onChange={e => this.props.setField(e)} />
                            </div>
                            <div class="form-group">
                                <label>Quantity</label>
                                <input type="text" name="quantity" value={this.props.quantity} class="form-control" placeholder="" onChange={e => this.props.setField(e)} />
                            </div>
                            <div class="form-group">
                                <label>Desc</label>
                                <input type="text" name="merch_desc"  value={this.props.merch_desc} class="form-control" placeholder="" onChange={e => this.props.setField(e)} />
                            </div>
                            <div class="form-group">
                                <button type="submit" onClick={() => this.doEdit()} class="btn btn-primary btn-block">
                                    Edit
                                </button>
                            </div>
                        </form>
                    </article>
                </div>
                </div>
            </div>

        );
    }
}
export default connect("merch_name, price, kategori, quantity, merch_desc, merch_id", actions)(EditMerchandise);
