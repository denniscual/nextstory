import { bindActionCreators } from "redux"
import { connect } from "react-redux"

// importing actionCreators
import * as commentActionCreators from "../actions/comments"
import * as postActionCreators from "../actions/posts"


import Main from "./Main"

// retrieve these states on the store and then map it to props. eg this.props.comments
const mapStateToProps = (state) => {
  return {
      comments: state.comments,
      posts: state.posts
  } 
};

// map dispatch actions
const mapDispatchToProps = (dispatch) => {
    return {
        commentActions: bindActionCreators(commentActionCreators, dispatch),
        postActions: bindActionCreators(postActionCreators, dispatch)        
    }
};

// inject this state and action creators to our main component. 
// if not specifying the mapDispatchToProps, the props will be passed are states, dispatch and children.
export default connect(mapStateToProps,mapDispatchToProps)(Main);

