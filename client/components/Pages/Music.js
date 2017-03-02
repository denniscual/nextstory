import React from "react"

import MainSection from "../Layout/MainSection"

export default class Music extends React.Component{
    componentDidMount = () => {
        this.props.sourcesAction.fetchSources("music");
    }
    render(){
        return(
            <MainSection 
                sourceArticles={this.props.sourceArticles} 
                articles={this.props.sourceArticles.articles} 
                fetchArticles={this.props.articlesAction.fetchArticles} 
                categoryFilter={this.props.categoryFilter}
                page="Music News" 
                sources={this.props.sources}/>
        );
    }
}