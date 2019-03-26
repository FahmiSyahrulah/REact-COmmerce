import React, {Component} from "react";
import {connect} from "unistore/react";
import {actions} from "../Store";
import {withRouter} from "react-router-dom";
import './bandprofile.css';
import axios from "axios";


class bandProfil extends Component {
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
        console.log("ojdoqwndwqniwqociwi",this.props.bandDetail)
        console.log("dasd89329i",this.props.bandMerch.merchandises)
        console.log("dewfdsdsvdsvdsvi",this.props.bandEvent.events)
        return (
            <main role="main">
                <div class="jumbotron">
                    <div class="container">
                        <h1 class="display-3">{this.props.bandDetail.band.bandName} Profile</h1>
                    </div>
                </div>
                <div class="container">
                    <h1>{this.props.bandDetail.band.bandName}
                    </h1>
                </div>
                <div id="exTab1" class="container">
                    <ul class="nav nav-pills">
                        <li class="active">
                            <a href="#1a" data-toggle="tab">Merchandise</a>
                        </li>
                        <li>
                            <a href="#2a" data-toggle="tab">Events</a>
                        </li>
                        <li>
                            <a href="#3a" data-toggle="tab">Profile</a>
                        </li>
                    </ul>

                    <div class="tab-content clearfix merch-contain">
                        <div class="tab-pane active" id="1a">
                            <div class="row merch-row">
                                    {this.props.bandMerch.merchandises.map((merchandises, key) =>{
                                    // const content = event[key].city_name
                                    return (<div class="col-md-3">
                                    <figure class="card card-product">
                                        <div class="img-wrap">
                                            <img src={merchandises.merch_photo}/>
                                            <a class="btn-overlay">
                                                <i class="fa fa-search-plus"></i>
                                                Quick view</a>
                                        </div>
                                        <figcaption class="info-wrap">
                                            <a class="title-merch">{merchandises.merch_name}
                                            </a>
                                            <div class="action-wrap">
                                                <button onClick={(e) => this.getDetail(e)} value={merchandises.merch_id} class="btn btn-primary btn-sm float-right">
                                                    Order
                                                </button>
                                                <div class="price-wrap h5">
                                                    <span class="price-new-one">{merchandises.price}</span>
                                                </div>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </div>)
                                })}           
                                
                            </div>

                        </div>
                        <div class="tab-pane" id="2a">
                            <div class="row">
                            {this.props.bandEvent.events.map((event, key) =>{
                                    // const content = event[key].city_name
                                    return (<div class="col-md-3">
                                    <figure class="card card-product">
                                        <div class="img-wrap">
                                            <img src={event.event_photo}/>
                                            <a class="btn-overlay" href="event_detail.html">
                                                <i class="fa fa-search-plus"></i>
                                                Quick view</a>
                                        </div>
                                        <figcaption class="info-wrap">
                                            <a href="event_detail.html" class="title-merch">{event.event_name}</a>
                                            <div class="price-wrap h5">
                                                <span class="price-new-one">{event.price}</span>
                                                <div class="action-wrap">
                                                    <a href="event_detail.html" class="btn btn-primary btn-sm float-right">
                                                        Detail
                                                    </a>
                                                </div>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </div>
                                )
                            })}
                            </div>
                        </div>
                        <div class="tab-pane" id="3a">
                            <div class="section-heading">
                                <h2>Profile</h2>
                            </div>

                            <article>

                                <img src={this.props.bandDetail.band.bandPhoto} class="float-right" id="band-photo"/>

                                <p>Location : {this.props.bandDetail.band.bandAddress} </p>
                                <p>Email    :  {this.props.bandDetail.band.bandMail}</p>
                                <p>{this.props.bandDetail.band.bandDesc}</p>

                                <br/>

                            </article>

                        </div>

                    </div>
                </div>
            </main>

        );
    }
}
export default connect('bandEvent, bandDetail, bandMerch', actions)(withRouter(bandProfil));
