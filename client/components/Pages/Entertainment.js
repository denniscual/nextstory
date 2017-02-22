import React from "react"

import MainSection from "../Layout/MainSection"

export default class Entertainment extends React.Component{
    componentDidMount = () => {
        this.props.sourcesAction.fetchSources("entertainment");
    }
    render(){
        return(           
            <MainSection fetchArticles={this.props.articlesAction.fetchArticles} page="Entertainment News" sources={this.props.sources}/>           
        );
    }
}