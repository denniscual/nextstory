import React from "react"

import FilterLink from "./FilterLink"

export default class SideBar extends React.Component{
    componentDidUpdate(prevProps){
        const { sources, fetchArticles } = this.props;
        // we just want to execute this function when the sources type is not boolean and the state of prevProps and props is not equal.
        if(typeof sources.sources != "boolean" && prevProps.sources.sources != sources.sources){
            // we are fetching all the articles of the source
            fetchArticles(sources.sources);     
        }
    }
    render(){
        let { sources } = this.props;
        let sourcesArray = sources.sources;

        let sourceElement = [...sourcesArray].map((item, i) => {
            return (
                <li key={i} class="siteMenu__item">
                    <FilterLink filter={item.id}>
                        {item.name}
                    </FilterLink>
                </li>
            );
        })

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