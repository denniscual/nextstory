import { connect } from "react-redux"
import { setVisibilityFilter } from "../../actions/visibilityAction"

import Masthead from "../Presentational/Masthead"


// passing the callback function as a props to the main layout.
const mapDispatchToProps = (dispatch) => {
  return {
    onSetVisibilityFilter: () => {
      dispatch(setVisibilityFilter("SHOW_ALL"))
    }
  }
}

export default connect(null, mapDispatchToProps)(Masthead);
