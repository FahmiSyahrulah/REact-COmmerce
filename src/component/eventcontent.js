import React, {Component} from "react";
import { connect} from "unistore/react";
import {actions} from "../Store";
import {withRouter} from "react-router-dom";
import axios from "axios";


class EventContent extends Component {
    getDetail = async e => {
      console.log("event", e.target.value);
      const self=this
      await axios.get("http://0.0.0.0:5000/public/event/"+e.target.value)
      .then(function(response){
          console.log("ikiiiii", response.data)
          self.props.eventDetails(response.data)
          self.props.history.replace('/eventdetail');
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
                  <img src={this.props.img}/>
                  <a class="btn-overlay"><i class="fa fa-search-plus"></i> Quick view</a>
                </div>
                <figcaption class="info-wrap">
                  <a class="title">{this.props.name}</a>
                    <div class="price-wrap h5">
                      <span class="price-new">{this.props.locations}</span>
                      <div class="action-wrap">
                        <button onClick={(e) => this.getDetail(e)} value={this.props.id} class="btn btn-primary btn-sm float-right"> Detail </button>
                    </div>
                  </div> 
                </figcaption>
              </figure> 
            </div>
        );
    }
}
export default connect("",actions)(withRouter(EventContent));
