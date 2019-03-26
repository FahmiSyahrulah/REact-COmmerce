import React, {Component} from "react";

class UserPhoto extends Component {
    render() {
        return (
            <aside class="col-sm-5 border-right">
                <article class="gallery-wrap">
                    <div class="img-big-wrap-dashboard">
                        <div>
                            <a href="assets/images/img_avatar.png" data-fancybox="">
                                <img src="assets/images/img_avatar.png"/></a>
                        </div>
                    </div>
                </article>
            </aside>
        );
    }
}
export default UserPhoto;
