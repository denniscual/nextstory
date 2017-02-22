import React from "react"
import { Link } from "react-router"
import classNames from "classnames"

import Masthead from "./Layout/Masthead"
import SortLinks from "./Layout/SortLinks"
import Footer from "./Layout/Footer"

export default class Main extends React.Component {
    render(){
        let { sources, sourceArticles } = this.props;
        let loaderClassess = classNames({
            "overlayWrapper": true,
            "isHide": !sources.processSources.fetching && !sourceArticles.processArticles.fetching
        });
        return(
            <div>
                <div className={loaderClassess}>
                    <div class="overlayContent">
                        <div class="loader"></div>
                    </div>
                </div>
                <Masthead />
                {/* the props inside the Main component will be passed automatically to the child component of Main like PhotoGrid. */}
                {React.cloneElement(this.props.children, this.props)}
                <Footer />
            </div>
        );
    }
}