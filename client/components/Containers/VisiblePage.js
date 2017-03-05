import { connect } from "react-redux"

import { setVisibilityFilter } from "../../actions/visibilityAction"
import { fetchSources } from "../../actions/sourcesAction"
import MainSection from "../Presentational/MainSection"

// creating a props coming from state
const mapStateToProps = (state, ownProps) => {
  return {
      sources: state.sources.sources,
      processSources: state.sources.processSources,
      processArticles: state.sourceArticles.processArticles,
      page: ownProps.page
  }
}
// passing the callback function as a props to the MainSection layout.
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchSources: () => {
      dispatch(fetchSources(ownProps.category))
    },
    onSetVisibilityFilter: () => {
      dispatch(setVisibilityFilter("SHOW_ALL"))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainSection);
