import React from "react"

import MainSection from "../Layout/MainSection"

export default class Business extends React.Component{
    componentDidMount = () => {
        this.props.sourcesAction.fetchSources("business");
    }
    render(){
        return(
            <MainSection 
                sourceArticles={this.props.sourceArticles} 
                articles={this.props.sourceArticles.articles} 
                fetchArticles={this.props.articlesAction.fetchArticles} 
                page="Business News" 
                categoryFilter={this.props.categoryFilter}
                sources={this.props.sources}/>
        );
    }
}