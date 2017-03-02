import React from "react"
import classNames from "classnames"

import SideBar from "./SideBar"
import Articles from "./Articles"
import PreLoader from "./PreLoader"

export default class MainSection extends React.Component{
    render(){
        let { sourceArticles, page, sources, fetchArticles, articles, categoryFilter } = this.props;
        // if the fetching is false, add this class
        let mainCompClass = classNames({
            "container container--isFluid mainContent": true,
            "isVisible": !sources.processSources.fetching && !sourceArticles.processArticles.fetching
            });  
        return(
                <main role="main">
                    <PreLoader sourceArticles={sourceArticles} sources={sources} />
                    <div class={mainCompClass}>
                        <div class="row">
                            <SideBar 
                                fetchArticles={fetchArticles} 
                                sources={sources} />
                            <Articles 
                                articles={articles} 
                                sources={sources} 
                                categoryFilter={categoryFilter} 
                                page={page}/>
                        </div>
                    </div>
                </main>
        );
    }
}
