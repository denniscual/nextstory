import { connect } from "react-redux"

import { fetchSources } from "../../actions/sourcesAction"
import MainSection from "../Presentational/MainSection"

// creating a props coming from state
const mapStateToProps = (state) => {
  return {
      processSources: state.sources.processSources,
      processArticles: state.sourceArticles.processArticles,
      page: "Business News"
  }
}
// passing the callback function as a props to the MainSection layout.
const mapDispatchToProps = (dispatch) => {
  return {
    fetchSources: () => {
      dispatch(fetchSources("business"))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainSection);
