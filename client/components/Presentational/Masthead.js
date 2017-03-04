import React from "react"
import { Link } from "react-router"

import Categories from "./Categories"

const Masthead = ({onSetVisibilityFilter}) => {
    console.info("Masthead is render");
    return(
        <div id="siteMasthead" class="container container--isFLuid noPadding">
            <div class="container container--isFluid noPadding">
                <header id="siteHeader" class="container container--isFluid">
                    <Categories onClick={onSetVisibilityFilter} extraClass="siteMenu--isHorizontal">
                        <li class="siteMenu__item extraLogo" onClick={onSetVisibilityFilter}>
                            <Link to="/"><img src="/static/images/logo.svg" alt="site logo" class="logo"/></Link>
                        </li>
                    </Categories>
                </header>
            </div>
            <div class="container contaier--isFluid noPadding">
                <div class="overlayContainer">
                <h2 class="headlineText headlineText--light">Hac nobis blandit eos integer, neque minus, incididunt.</h2>
                </div>
            </div>
        </div>          
    );
}
export default Masthead;