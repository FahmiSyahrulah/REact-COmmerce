import React, {Component} from "react";
import './merchlist.css';
import axios from "axios";
import {actions} from "../Store";
import {connect} from "unistore/react";

class BandMerch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listMerch: []
        };
    }
    componentDidMount = async () => {
        const self = this;
        const url = "http://localhost:8010/proxy/band/merch"
        console.log("cuuukkkkk", this.props.apikey)
        const headers = {
            method: 'get',
            url: url,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.props.apikey
            }
        };
        await axios(headers).then(function (response) {
            console.log("e3r2r32esca gak", response.data);
        })

    }

    render() {
        return (
            <tbody>
                {
                        this.props.listMerch.map((item, key) => {
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
        );
    }
}
export default connect('isLogin, apikey', actions)(BandMerch);
