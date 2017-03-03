import { connect } from "react-redux"

import { fetchSources } from "../../actions/sourcesAction"
import ArticleList from "../Presentational/ArticleList"

// creating a props coming from state
const mapStateToProps = (state, ownProps) => {
  return {
      articles: state.sourceArticles.articles,
      categoryFilter: state.categoryFilter,
      page: ownProps.page
  }
}
// passing the callback function as a props to the MainSection layout.
const mapDispatchToProps = (dispatch) => {
  return {
    fetchSources: () => {
      dispatch(fetchSources("technology"))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
