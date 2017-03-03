import React from "react"

import DefaultCategoryFilter from "../Containers/DefaultCategoryFilter"
import Footer from "./Footer"

const Main = (props) => 
    (
        <div>
            <DefaultCategoryFilter/>
            {React.cloneElement(props.children, props)}
            <Footer />
        </div>
    );

export default Main;