import React, {Component} from "react";
import './merchlist.css';
import axios from "axios";
import BandContent from './bandcontent';

class BandList extends Component {
    constructor (props){    
        super(props);
        this.state = {
            listBand: []
    };
}
componentDidMount = () => {
    const self = this;
    axios 
    .get('http://0.0.0.0:5000/public/bands')
    .then(function(response){
        self.setState({listBand: response.data.bands});
        console.log("ceeeekkkk", response.data.bands);
    })
    .catch(function(error){
        console.log("salah",error);
    })
}

    render() {
        const {listBand} = this.state;
        return (
            <div className="container">
                <div class="row-sm">
                    {listBand.map((bands, key) =>{
                        const name = bands.bandName
                        // const content = event[key].city_name
                        return <BandContent key={key} id={bands.band_id} names={name} locations={bands.bandAddress} img={bands.bandPhoto}/>;

                    })}                    
                </div>
            </div>
        );
    }
}
export default BandList;
