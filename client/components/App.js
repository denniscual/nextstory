import { bindActionCreators } from "redux"
import { connect } from "react-redux"

// importing actionCreators
import * as sourcesActionCreator from "../actions/sourcesAction"
// import * as postActionCreators from "../actions/posts"


import Main from "./Main"

// retrieve these states on the store and then map it to props. eg this.props.comments
const mapStateToProps = (state) => {
  return {
      sources: state.sources,
      category: state.category,
      categoryFilter: state.categoryFilter,
  } 
};

// map dispatch actions
const mapDispatchToProps = (dispatch) => {
    return {
        sourcesAction: bindActionCreators(sourcesActionCreator, dispatch)
    }
};

// inject this state and action creators to our main component. 
// if not specifying the mapDispatchToProps, the props will be passed are states, dispatch and children.
export default connect(mapStateToProps,mapDispatchToProps)(Main);

