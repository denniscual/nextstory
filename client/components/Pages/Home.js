import React from "react"

import MainSection from "../Layout/MainSection"

export default class Home extends React.Component{
    componentDidMount = () => {
        this.props.sourcesAction.fetchSources("general");
    }

    render(){
        return(
            <div>
                <MainSection articles={this.props.sourceArticles.articles} fetchArticles={this.props.articlesAction.fetchArticles} page="General News" sources={this.props.sources}/>
            </div>
        );
    }
}