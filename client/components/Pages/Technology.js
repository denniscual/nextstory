import React from "react"

import MainSection from "../Layout/MainSection"

export default class Technology extends React.Component{
    componentDidMount = () => {
        this.props.sourcesAction.fetchSources("technology");
    }
    render(){
        return(
            <MainSection 
                sourceArticles={this.props.sourceArticles} 
                articles={this.props.sourceArticles.articles} 
                fetchArticles={this.props.articlesAction.fetchArticles} 
                categoryFilter={this.props.categoryFilter}
                page="Technology News" 
                sources={this.props.sources}/>
        );
    }
}