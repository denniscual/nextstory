import React, { PropTypes } from "react"
import classNames from "classnames"

import FetchArticles from "../Containers/FetchArticles"
import VisibleArticles from "../Containers/VisibleArticles"
import PreLoader from "./PreLoader"

export default class MainSection extends React.Component{
    componentWillMount = () => {
        this.props.onSetVisibilityFilter();
    }
    componentDidMount = () => {
        this.props.fetchSources();
    }
    render(){
        let { sources, processSources, processArticles, page } = this.props;
        // if the fetching is false, add this class
        let mainCompClass = classNames({
            "container container--isFluid mainContent": true,
            "isVisible": !processSources.fetching && !processArticles.fetching
            });  
        return(
                <main role="main">
                    <PreLoader 
                        processArticles={processArticles} 
                        processSources={processSources} />
                    <div class={mainCompClass}>
                        <div class="row">
                            <FetchArticles sources={sources}/>
                            <VisibleArticles page={page} />
                        </div>
                    </div>
                </main>
        );  
    }
}

MainSection.propTypes = {
    processSources: PropTypes.shape({
        fetching: PropTypes.bool.isRequired
    }),
    processArticles: PropTypes.shape({
        fetching: PropTypes.bool.isRequired
    }),
    page: PropTypes.string.isRequired,
    sources: PropTypes.oneOfType([
        PropTypes.bool.isRequired,
        PropTypes.arrayOf(PropTypes.object.isRequired)
    ]),
    onSetVisibilityFilter: PropTypes.func.isRequired,
    fetchSources: PropTypes.func.isRequired
};
