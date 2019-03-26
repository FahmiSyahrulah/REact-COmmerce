import React, {Component} from "react";
import './slider.css';

class Slider extends Component {
    render() {
        return (
            <div className="app">
                <div class="container">
                    <div id="myCarousel" class="carousel slide" data-ride="carousel">

                        <ol class="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                        </ol>

                        <div class="carousel-inner">
                            <div class="item active">
                                <img src='https://www.w3schools.com/bootstrap/ny.jpg' alt="Los Angeles"/>
                                <div class="container">
                                    <div class="carousel-caption text-left">
                                        <h1 id="title-slider">Your music platform</h1>
                                        <p id="text-slider">Your music is always the best. Let us promote your music so you can focusing
                                            on doing your music. Join us now to get more music or promote your band</p>
                                        <p>
                                            <a class="btn btn-primary btn-slider" href="registerband.html" role="button">Sign up today</a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="item">
                                <img src="https://www.w3schools.com/bootstrap/ny.jpg" alt="Chicago"/>
                                <div class="container">
                                    <div class="carousel-caption">
                                        <h1 id="title-slider">Event promotions</h1>
                                        <p id="text-slider">You can find your favourite band event here, grab fast the ticket!</p>
                                        <p>
                                            <a class="btn btn-primary btn-slider" href="events.html" role="button">Browse event</a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="item">
                                <img src="https://www.w3schools.com/bootstrap/ny.jpg" alt="New york"/>
                                <div class="container">
                                    <div class="carousel-caption text-right">
                                        <h1 id="title-slider">Official merchandise</h1>
                                        <p id="text-slider">Always update your favourite band release merchandise so you can contributed
                                            to your favourite bands!</p>
                                        <p>
                                            <a class="btn btn-primary btn-slider" href="merchandise.html" role="button">Browse merchandise</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                            <span class="glyphicon glyphicon-chevron-left"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="right carousel-control" href="#myCarousel" data-slide="next">
                            <span class="glyphicon glyphicon-chevron-right"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>

            </div>
        );
    }
}
export default Slider;
