import { connect } from "react-redux"

import { fetchSources } from "../../actions/sourcesAction"
import Main from "../Presentational/Main"

// creating a props coming from state
const mapStateToProps = (state) => {
  console.log(state);
  return {
      processSources: state.sources.processSources,
      processArticles: state.sources.processArticles
  }
}
// passing the callback function as a props to the main layout.
const mapDispatchToProps = (dispatch) => {
  return {
    fetchSources: () => {
      dispatch(fetchSources())
    }
  }
}

const VisiblePage = connect(mapStateToProps, mapDispatchToProps)(Main);
export default VisiblePage;