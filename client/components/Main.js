import React from "react"
import { Link } from "react-router"

import Masthead from "./Layout/Masthead"
import SortLinks from "./Layout/SortLinks"
import Footer from "./Layout/Footer"

export default class Main extends React.Component {
    render(){
        return(
            <div>
                <Masthead />
                {/* the props inside the Main component will be passed automatically to the child component of Main like PhotoGrid. */}
                {React.cloneElement(this.props.children, this.props)}
                <Footer />
            </div>
        );
    }
}