import React, {Component} from "react";
import { connect} from "unistore/react";
import {actions} from "../Store";
import {withRouter} from "react-router-dom";
import axios from "axios";


class BandContent extends Component {
    getDetail = async e => {
        console.log("event", e.target.value);
        const idband= e.target.value
        const self=this
        await axios.get("http://0.0.0.0:5000/public/bands/"+idband)
        .then(async function(response){
            console.log("ikipertama", response.data)
            self.props.bandDetails(response.data)
            // self.props.history.replace('/bandprof');
            await axios.get("http://0.0.0.0:5000/public/merch?search="+idband)
            .then(async function(response){
                console.log("ikikedua", response.data)
                self.props.bandMerchs(response.data)
                await axios.get("http://0.0.0.0:5000/public/event?search="+idband)
                .then(function(response){
                    console.log("ikiketiga", response.data)
                    self.props.bandEvents(response.data)
                    
                })
            })
        })
        .then(function(response){
            self.props.history.replace('/bandprof');
        })
        .catch(function(error){
            console.log(error);
        });

      };

    render() {
        return (
            <div class="col-md-3 col-sm-6">
            <figure class="card card-product">
                <div class="img-wrap"> <img src={this.props.img}/></div>
                <figcaption class="info-wrap">
                    <a href="bandprofile.html" class="title">{this.props.names}</a>
                    <div class="price-wrap">
                        <span class="price-new">{this.props.locations}</span>
                    </div> 
                    <div class="action-wrap">
                        <button onClick={(e) => this.getDetail(e)} value={this.props.id} class="btn btn-primary btn-sm float-right"> Profil </button>
                    </div>
                </figcaption>
            </figure> 
        </div> 
        );
    }
}
export default connect("",actions)(withRouter(BandContent));
