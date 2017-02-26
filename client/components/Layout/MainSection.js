import React from "react"
import classNames from "classnames"

import SideBar from "./SideBar"
import Articles from "./Articles"
import PreLoader from "./PreLoader"

export default class MainSection extends React.Component{
    render(){
        let { sourceArticles, page, sources, fetchArticles, articles } = this.props;
         let loaderClassess = classNames({
            "container container--isFluid mainContent": true,
            "isVisible": !sources.processSources.fetching && !sourceArticles.processArticles.fetching
            });  
        return(
                <main role="main">
                    <PreLoader sourceArticles={sourceArticles} sources={sources} />
                    <div class={loaderClassess}>
                        <div class="row">
                            <SideBar  fetchArticles={fetchArticles} sources={sources} />
                            <Articles articles={articles} sources={sources} page={page}/>
                        </div>
                    </div>
                </main>
        );
    }
}
