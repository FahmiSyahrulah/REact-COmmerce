import React, {Component} from "react";
import './search.css';

class Search extends Component {
    render() {
        return (
            <div class="card container merch">
                    <div class="card-body">
                        <div class="row">
                        <form class="form-inline mt-2 mt-md-0">
                        <span id="merch-tag">Cari Merchandise</span>
                                <input
                                    class="form-control"
                                    type="text"
                                    placeholder="Search"
                                    aria-label="Search" />
                                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
        );
    }
}
export default Search;
