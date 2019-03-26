import React, {Component} from "react";
import './sideoption.css';

class SideOpt extends Component {
    render() {
        return (
                <div class="col-md-3">

                    <div class="card">
                        <article class="card-group-item">
                            <header class="card-header">
                                <h6 class="title-opt">Category
                                </h6>
                            </header>
                            <div class="filter-content">
                                <div class="list-group list-group-flush">
                                    <a href="bands.html" class="list-group-item">Bands
                                        <span class="float-right badge badge-secondary round">142</span>
                                    </a>
                                    <a href="events.html" class="list-group-item">Events
                                        <span class="float-right badge badge-secondary round">3</span>
                                    </a>
                                    <a href="merchandise.html" class="list-group-item">Merchandise
                                        <span class="float-right badge badge-secondary round">32</span>
                                    </a>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>

        );
    }
}
export default SideOpt;
