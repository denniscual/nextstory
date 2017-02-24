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
                    <Link activeStyle={{color: '#fff', fontWeight: 500}} to="/category/sport"> Sport </Link>
                </li>
                <li class="siteMenu__item">
                    <Link activeStyle={{color: '#fff', fontWeight: 500}} to="/category/entertainment"> Entertainment </Link>
                </li>
                <li class="siteMenu__item">
                    <Link activeStyle={{color: '#fff', fontWeight: 500}} to="/category/technology"> Technology </Link>
                </li>
                <li class="siteMenu__item">
                    <Link activeStyle={{color: '#fff', fontWeight: 500}} to="/category/business"> Business </Link>
                </li>
                <li class="siteMenu__item">
                    <Link activeStyle={{color: '#fff', fontWeight: 500}} to="/category/music"> Music </Link>
                </li>
                <li class="siteMenu__item">
                    <Link activeStyle={{color: '#fff', fontWeight: 500}} to="/category/gaming"> Gaming </Link>
                </li>
            </ul>
        );
    }
}