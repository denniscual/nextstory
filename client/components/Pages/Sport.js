import React from "react"

import MainSection from "../Layout/MainSection"

export default class Sport extends React.Component{
    componentDidMount = () => {
        this.props.sourcesAction.fetchSources("sport");
    }
    render(){
        return(
            <div>
                <MainSection articles={this.props.sourceArticles.articles} fetchArticles={this.props.articlesAction.fetchArticles} page="Sport News" sources={this.props.sources}/>
            </div>
        );
    }
}