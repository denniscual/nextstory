import React from "react"

import FilterLink from "../Layout/FilterLink"

export default class SideBar extends React.Component{
    // componentWillReceiveProps(nextProps){
    //     console.log("props", this.props);
    //     console.log("next props", nextProps);
    // }
    componentDidUpdate(prevProps){
        const { sources, fetchArticles } = this.props;
        // we just want to execute this function when the sources type is not boolean and the state of prevProps and props is not equal.
        if(typeof sources != "boolean" || sources.length != 0){
            // we are invoking this fetchArticles in here but this component dont know the beahvior of the funciton.
            // abstractions.
            console.log("component did update");
            fetchArticles();
        }
    }
    render(){
        /*let { sources } = this.props;
        let sourcesArray = sources.sources;

        let sourceElement = [...sourcesArray].map((item, i) => {
            return (
                <li key={i} class="siteMenu__item">
                    <FilterLink filter={item.id}>
                        {item.name}
                    </FilterLink>
                </li>
            );
        })*/

        return(
                <nav class="row__col-3">
                    <ul class="sideNav">
                        <li class="sideNav__item">
                            <h4>More Sources</h4>
                            <ul class="siteMenu siteMenu--isVertical">
                                {/*{sourceElement}*/}
                            </ul>
                        </li>                       
                    </ul>
                </nav>
        );
    }
}