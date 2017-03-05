import React, { PropTypes } from "react"

import Masthead from "./Masthead"
import Footer from "./Footer"

const Main = (props) => 
    (
        <div>
            <Masthead/>
            {React.cloneElement(props.children, props)}
            <Footer />
        </div>
    );

 Main.propTypes = {
    children: PropTypes.node.isRequired
 };

export default Main;