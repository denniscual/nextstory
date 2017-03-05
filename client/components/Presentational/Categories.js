import React, { PropTypes } from "react"
import { IndexLink,Link } from "react-router"

const Categories = ({ extraClass, children }) => { 
    // if there is a children pass to our component.
    let extraElement = "";
    if(children != null){
        extraElement = children;
    }
    // hardcoding the categories elements
    let categories = [
        "sport",
        "entertainment",
        "technology",
        "business",
        "music",
        "gaming"
    ];
    // mapping the categories into a component
    let categoriesElement = [...categories].map((cat, i) => {
        return (
            <li key={i} class="siteMenu__item">
                <Link 
                    activeStyle={{color: '#fff', fontWeight: 500}} 
                    to={`/category/${cat}`} >
                        {cat}
                </Link>
            </li>
        );
    });
    // this will be the render componet.
    return(
        <ul class={`siteMenu ${extraClass}`}>
            {extraElement}
            <li class="siteMenu__item">
                <IndexLink activeStyle={{color: '#fff', fontWeight: 500}} to="/" > General </IndexLink>
            </li>
            {categoriesElement}
        </ul>
    );
}

Categories.propTypes = {
    extraClass: PropTypes.string.isRequired,
    children: PropTypes.element
};

export default Categories;