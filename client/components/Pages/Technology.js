import React from "react"

import MainSection from "../Layout/MainSection"

export default class Technology extends React.Component{
    componentDidMount = () => {
        this.props.sourcesAction.fetchSources("technology");
    }
    render(){
        return(
            <MainSection fetchArticles={this.props.articlesAction.fetchArticles} page="Technology News" sources={this.props.sources}/>
        );
    }
}