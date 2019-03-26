import React, {Component} from "react";
import { Link , Redirect} from "react-router-dom";
import { connect} from "unistore/react";
import {actions} from "../Store";
import {withRouter} from "react-router-dom";
import axios from "axios";


class MerchContent extends Component {
    getDetail = async e => {
        console.log("event", e.target.value);
        // this.props.setMerchId(e.target.value)
        const self=this
        await axios.get("http://0.0.0.0:5000/public/merch/"+e.target.value)
        .then(function(response){
            console.log("ikiiiii", response.data)
            self.props.merchDetails(response.data)
            self.props.history.replace('/merchdetail');
        })
        .catch(function(error){
            console.log(error);
        });
      };

      
    render() {
        return (
            <div class="col-md-3 col-sm-6">
                <figure class="card card-product">
                    <div class="img-wrap">
                        <img src={this.props.images}/>
                    </div>
                    <figcaption class="info-wrap">
                        <a  class="title">{this.props.merchname}</a>
                        <div class="price-wrap">
                            <span class="price-new">{this.props.prices}</span>
                        </div>
                        <div class="action-wrap">
                        <button onClick={(e) => this.getDetail(e)} value={this.props.merch_id} class="btn btn-primary btn-sm float-right"> Detail </button>
                    </div>
                    </figcaption>
                </figure>
            </div>
        );
    }
}
export default connect("",actions)(withRouter(MerchContent));
