import React, {Component} from "react";
import './merchlist.css';
import axios from "axios";
import MerchContent from "./merchcontent";

class MerchList extends Component {
    constructor (props){    
        super(props);
        this.state = {
            listMerch: []
    };
}
componentDidMount = () => {
    const self = this;
    axios 
    .get('http://0.0.0.0:5000/public/merch')
    .then(function(response){
        self.setState({listMerch: response.data.merchandises});
        console.log("ceeeekkkk", response.data.merchandises);
    })
    .catch(function(error){
        console.log("salah",error);
    })  
}

    render() {
        const {listMerch} = this.state;
        console.log("nasc", listMerch)
        return (
            <div className="container">
                <div class="row-sm">
                    {listMerch.map((merchandises, key) =>{
                        const price = merchandises.price
                        const merch_id = merchandises.merch_id
                        const name = merchandises.merch_name
                        const img = merchandises.merch_photo
                        // const content = event[key].city_name
                        return <MerchContent key={key} prices={price} merch_id={merch_id} merchname={name} images={img}/>;

                    })}                    
                </div>
            </div>
        );
    }
}
export default MerchList;
