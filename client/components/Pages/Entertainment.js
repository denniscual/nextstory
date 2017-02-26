import React from "react"

import MainSection from "../Layout/MainSection"

export default class Entertainment extends React.Component{
    componentDidMount = () => {
        this.props.sourcesAction.fetchSources("entertainment");
    }
    render(){
        return(           
            <MainSection sourceArticles={this.props.sourceArticles} articles={this.props.sourceArticles.articles} fetchArticles={this.props.articlesAction.fetchArticles} page="Entertainment News" sources={this.props.sources}/>           
        );
    }
}