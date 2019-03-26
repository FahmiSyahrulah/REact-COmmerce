import React, {Component} from "react";
import { connect} from "unistore/react";
import {actions} from "../Store";
import {withRouter} from "react-router-dom";
import './eventdetail.css';

class EventDetail extends Component {
    doBuy = async e => { if(this.props.isLogin){
        console.log("nyobak", e.target.value )
        this.props.postBuy(e.target.value).then(() => {
            alert("berhasil")
            this.props.history.replace('/userdash')
        })}
        else{
            alert("login dulu!")
            this.props.history.replace('/login')
        }
    }
    render() {
        console.log("329u320i32", this.props.eventDetail)
        return (
            <div class="container-fluid">
                <div class="card">
                    <div class="row no-gutters">
                        <aside class="col-sm-5 border-right">
                            <article class="gallery-wrap">
                                <div class="img-big-wrap">
                                    <div>
                                        <a href={this.props.eventDetail.event.event_photo} data-fancybox=""><img src={this.props.eventDetail.event.event_photo}/></a>
                                    </div>
                                </div>
                                <div class="img-small-wrap">
                                    <div class="item-gallery">
                                        <img src={this.props.eventDetail.event.event_photo}/></div>
                                </div>
                            </article>
                        </aside>
                        <aside class="col-sm-7">
                            <article class="p-5 article-merch">
                                <h3 class="title mb-3">{this.props.eventDetail.event.event_name}</h3>

                                <div class="mb-3">
                                    <var class="price h3 text-warning">
                                        <span class="currency">Rp</span>
                                        <span class="num">{this.props.eventDetail.event.price}</span>
                                    </var>
                                </div>
                                <dl>
                                    <dt>Description</dt>
                                    <dd>
                                        <p>{this.props.eventDetail.event.event_desc}
                                        </p>
                                    </dd>
                                </dl>
                                <dl class="row">
                                    <dt class="col-sm-3">Band</dt>
                                    <dd class="col-sm-9">{this.props.eventDetail.event.bandName}
                                    </dd>

                                    <dt class="col-sm-3">Lokasi</dt>
                                    <dd class="col-sm-9">{this.props.eventDetail.event.location}</dd>
                                </dl>
                                <hr/>
                                <div class="row">
                                    <div class="col-sm-5">
                                        <dl class="dlist-inline">
                                            <dt>Ticket Quantity:
                                            </dt>
                                            <dd>
                                            <input className="form-control mr-sm-2" 
                                            type="number" min="1" max={this.props.eventDetail.event.quantity} name="quantity"
                                            onChange={e => this.props.setField(e)} step="1"/>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                                <hr/>
                                <button onClick={(e) => this.doBuy(e)} value={this.props.eventDetail.event.event_id} class="btn  btn-primary">
                                    Buy now
                                </button>
                            </article>
                        </aside>
                    </div>
                </div>
            </div>

        );
    }
}
export default connect('isLogin, eventDetail', actions)(withRouter(EventDetail));
