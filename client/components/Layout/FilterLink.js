import { connect } from 'react-redux'
import { setVisibilityFilter } from '../../actions/visibilityAction'
import Link from './Link'
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

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink
