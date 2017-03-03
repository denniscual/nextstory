import { connect } from "react-redux"

import { fetchArticles } from "../../actions/articlesAction"
import SideBar from "../Presentational/SideBar"

// creating a props coming from state
const mapStateToProps = (state) => {
  return {
      sources: state.sources.sources,
  }
}
// passing the callback function as a props to the MainSection layout.
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchArticles: () => {
      dispatch(fetchArticles(ownProps.sources)) // we are dispatching this action and passing an input based on the ownProps for this container component
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
