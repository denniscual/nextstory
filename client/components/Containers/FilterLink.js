import { connect } from 'react-redux'
import { setVisibilityFilter } from '../../actions/visibilityAction'
import Link from '../Presentational/Link'
// ownProps gives access to the properties passed into the FilterLink
const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.categoryFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Link);

