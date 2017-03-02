import React from "react"
import { IndexLink,Link } from "react-router"


export default class Categories extends React.Component{
    render(){
        const {extraClass, children, onClick} = this.props;

        // if there is a children pass
        let extraElement = "";
        if(children != null){
            extraElement = children;
        }

        let categories = [
            "sport",
            "entertainment",
            "technology",
            "business",
            "music",
            "gaming"
        ];

        let categoriesElement = [...categories].map((cat, i) => {
            return (
                <li key={i} class="siteMenu__item" onClick={onClick}>
                    <Link 
                        activeStyle={{color: '#fff', fontWeight: 500}} 
                        to={`/category/${cat}`} >
                            {cat}
                    </Link>
                </li>
            );
        });

        return(
            <ul class={`siteMenu ${extraClass}`}>
                {extraElement}
                <li class="siteMenu__item" onClick={onClick}>
                    <IndexLink activeStyle={{color: '#fff', fontWeight: 500}} to="/" > General </IndexLink>
                </li>
                {categoriesElement}
            </ul>
        );
    }
}