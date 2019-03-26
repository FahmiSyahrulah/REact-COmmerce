import React, {Component} from "react";

class Leftdashboard extends Component {
    render() {
        return (
                        <aside class="col-lg-5-24">
                            <nav>
                                <div class="title-category bg-secondary white d-none d-lg-block">
                                    <span>Welcome, user</span>
                                </div>
                                <div id="exTab1">
                                    <ul class="menu-category nav-pills">
                                        <li>
                                            <a href="#1a" data-toggle="tab">Edit profile
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#4a" data-toggle="tab">Delete account
                                            </a>
                                        </li>
                                    </ul>
                                    </div>
                                </nav>
                            </aside>
                            
        );
    }
}
export default Leftdashboard;
