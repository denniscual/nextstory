import { connect } from "react-redux"

import { fetchSources } from "../../actions/sourcesAction"
import MainSection from "../Presentational/MainSection"

// creating a props coming from state
const mapStateToProps = (state) => {
  return {
      sources: state.sources.sources,
      processSources: state.sources.processSources,
      processArticles: state.sourceArticles.processArticles,
      page: "Sport News"
  }
}
// passing the callback function as a props to the MainSection layout.
const mapDispatchToProps = (dispatch) => {
  return {
    fetchSources: () => {
      dispatch(fetchSources("sport"))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainSection);
