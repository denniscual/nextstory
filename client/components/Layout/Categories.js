import React from "react"
import { IndexLink,Link } from "react-router"


export default class Categories extends React.Component{
    render(){
        const {extraClass, children} = this.props;

        let extraElement = "";
        if(children != null){
            extraElement = children;
        }

        return(
            <ul class={`siteMenu  ${extraClass}`}>
                {extraElement}
                <li class="siteMenu__item">
                    <IndexLink activeStyle={{color: '#fff', fontWeight: 500}} to="/" > General </IndexLink>
                </li>
                <li class="siteMenu__item">
                    <Link activeStyle={{color: '#fff', fontWeight: 500}} to="/sport"> Sport </Link>
                </li>
                <li class="siteMenu__item">
                    <Link activeStyle={{color: '#fff', fontWeight: 500}} to="/entertainment"> Entertainment </Link>
                </li>
                <li class="siteMenu__item">
                    <Link activeStyle={{color: '#fff', fontWeight: 500}} to="/technology"> Technology </Link>
                </li>
                <li class="siteMenu__item">
                    <Link activeStyle={{color: '#fff', fontWeight: 500}} to="/business"> Business </Link>
                </li>
                <li class="siteMenu__item">
                    <Link activeStyle={{color: '#fff', fontWeight: 500}} to="/music"> Music </Link>
                </li>
                <li class="siteMenu__item">
                    <Link activeStyle={{color: '#fff', fontWeight: 500}} to="/gaming"> Gaming </Link>
                </li>
            </ul>
        );
    }
}