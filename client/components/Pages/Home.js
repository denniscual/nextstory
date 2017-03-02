import React from "react"

import MainSection from "../Layout/MainSection"

export default class Home extends React.Component{
    componentDidMount = () => {
        this.props.sourcesAction.fetchSources("general");
    }

    render(){
        return(
            <div>
                <MainSection 
                    sourceArticles={this.props.sourceArticles} 
                    articles={this.props.sourceArticles.articles} 
                    fetchArticles={this.props.articlesAction.fetchArticles} 
                    categoryFilter={this.props.categoryFilter}
                    page="General News" sources={this.props.sources}/>
            </div>
        );
    }
}
