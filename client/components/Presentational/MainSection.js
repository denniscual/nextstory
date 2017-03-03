import React from "react"
import classNames from "classnames"

import FetchArticles from "../Containers/FetchArticles"
import Articles from "../Layout/Articles"
import PreLoader from "./PreLoader"

export default class MainSection extends React.Component{
    componentDidMount = () => {
        this.props.fetchSources();
    }
    render(){
        let { sources, processSources, processArticles, page } = this.props;
        // if the fetching is false, add this class
        let mainCompClass = classNames({
            "container container--isFluid mainContent": true,
            "isVisible": !processSources.fetching && !processArticles.fetching
            });  
        return(
                <main role="main">
                    <PreLoader 
                        processArticles={processArticles} 
                        processSources={processSources} />
                    <div class={mainCompClass}>
                        <div class="row">
                            <FetchArticles sources={sources}/>
                            {/*<Articles 
                                articles={articles} 
                                sources={sources} 
                                categoryFilter={categoryFilter} 
                                page={page}/>*/}
                        </div>
                    </div>
                </main>
        );
    }
}
