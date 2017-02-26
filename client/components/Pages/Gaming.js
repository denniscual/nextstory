import React from "react"

import MainSection from "../Layout/MainSection"


export default class Gaming extends React.Component{
    componentDidMount = () => {
        this.props.sourcesAction.fetchSources("gaming");
    }
    render(){
        return(
            <MainSection sourceArticles={this.props.sourceArticles} articles={this.props.sourceArticles.articles} fetchArticles={this.props.articlesAction.fetchArticles} page="Gaming News" sources={this.props.sources}/>
        );
    }
}