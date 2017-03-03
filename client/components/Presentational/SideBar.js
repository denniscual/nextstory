import React from "react"

import FilterLink from "../Containers/FilterLink"

export default class SideBar extends React.Component{
    shouldComponentUpdate(nextProps, nextState){
        // we dont want an extra rendering for this component.
        // we want to re-render this component if only if the props and nextprops are same.      
        if(this.props.sources === nextProps.sources){
            return true;
        }
        return false;
    }
    // after fetching the sources for the category, executed this callback function.
    componentDidUpdate(prevProps){
        const { fetchArticles } = this.props;
        // we are invoking this fetchArticles in here but this component dont know the beahvior of the funciton.
        // abstractions.
        fetchArticles();
    }
    render(){
        let { sources } = this.props;
        let sourceElement = [];
        // validate if the sources has item
        if(sources.length){
            sourceElement = [...sources].map((item, i) => {
                return (
                    <li key={i} class="siteMenu__item">
                        <FilterLink filter={item.id}>
                            {item.name}
                        </FilterLink>
                    </li>
                );
            })
        }     
        return(
                <nav class="row__col-3">
                    <ul class="sideNav">
                        <li class="sideNav__item">
                            <h4>More Sources</h4>
                            <ul class="siteMenu siteMenu--isVertical">
                                {sourceElement}
                            </ul>
                        </li>                       
                    </ul>
                </nav>
        );
    }
}