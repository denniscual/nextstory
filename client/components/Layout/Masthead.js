import React from "react"
import { Link } from "react-router"

import Categories from "./Categories"

export default class Masthead extends React.Component{
    render(){
        return(      
            <div id="siteMasthead" class="container container--isFLuid noPadding">
                    <div class="container container--isFluid noPadding">
                        <header id="siteHeader" class="container container--isFluid">
                            <Categories extraClass="siteMenu--isHorizontal">
                                <li class="siteMenu__item extraLogo">
                                    <Link to="/"><img src="/static/images/logo.svg" alt="site logo" class="logo"/></Link>
                                </li>
                            </Categories>
                            <form class="searchForm">
                                <div class="inputGroup">
                                <input type="text" placeholder="Search here..." class="inputGroup__text" />
                                    <span class="inputGroup__icon">
                                        <i class="fa fa-search"></i>
                                    </span>
                                </div>
                            </form>
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
}