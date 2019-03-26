import React, {Component} from "react";
import './merchlist.css';
import axios from "axios";
import EventContent from "./eventcontent";

class EventList extends Component {
    constructor (props){    
        super(props);
        this.state = {
            listEvent: []
    };
}
componentDidMount = () => {
    const self = this;
    axios 
    .get('http://0.0.0.0:5000/public/event')
    .then(function(response){
        self.setState({listEvent: response.data.events});
        console.log("ceeeekkkk", response.data.events);
    })
    .catch(function(error){
        console.log("salah",error);
    })
}

    render() {
        const {listEvent} = this.state;
        console.log("dsicsscmsocs", listEvent)
        return (
            <div className="container">
                <div class="row-sm">
                    {listEvent.map((events, key) =>{
                        const location = events.location
                        // const content = event[key].city_name
                        return <EventContent key={key} name={events.event_name} locations={location} img={events.event_photo} id={events.event_id}/>;

                    })}                    
                </div>
            </div>
        );
    }
}
export default EventList;
