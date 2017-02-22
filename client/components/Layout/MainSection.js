import React from "react"

import SideBar from "./SideBar"
import Articles from "./Articles"

export default class MainSection extends React.Component{
    render(){
        let { page, sources, fetchArticles } = this.props;
        return(
                <main role="main">
                    <div class="container container--isFluid">
                        <div class="row">
                            <SideBar  fetchArticles={fetchArticles} sources={sources} />
                            <Articles sources={sources} page={page}/>
                        </div>
                    </div>
                </main>
        );
    }
}