import React, {Component} from "react";
import './merchrecent.css';
import SideOpt from "./sideoption";
import axios from "axios";

class HomeMerch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listMerch: []
        };
    }
    componentDidMount = async () => {
        const self = this;
        const url = "http://localhost:8010/proxy/public/merch"
        const headers = {
            method: 'get',
            url: url
        };
        await axios(headers).then(function (response) {
            console.log("e3r2r32esca gak", response.data.merchandises.slice(-5, -1));
            self.setState({listMerch : response
                .data
                .merchandises
                .slice(-5, -1)
            })
        })

    }

    render() {
        const listMerch = this.state.listMerch
        return (
            <div className="recent-product">
                <hr/>
                <h3 id="merch-title">Recent Merch</h3>
                <div class="row">
                    <div class="row col-md-9 product-row">
                        {
                            listMerch.map((item, key) => {
                                    return (
                                        <div class="col-md-3">
                                            <figure class="card card-product">
                                                <div class="img-wrap">
                                                    <img
                                                        src={item.merch_photo}/>
                                                    <a class="btn-overlay" href="product_detail.html">
                                                        <i class="fa fa-search-plus"></i>
                                                        Quick view</a>
                                                </div>
                                                <figcaption class="info-wrap">
                                                    <a href="product_detail.html" class="title">{item.merch_name}
                                                    </a>
                                                    <div class="action-wrap">
                                                        <a href="product_detail.html" class="btn btn-primary btn-sm float-right">
                                                            Order
                                                        </a>
                                                        <div class="price-wrap h5">
                                                            <span class="price-new">{item.price}</span>
                                                        </div>
                                                    </div>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    );
                                })
                        }
                    </div>
                    <SideOpt/>
                </div>
            </div>

        );
    }
}
export default HomeMerch;
