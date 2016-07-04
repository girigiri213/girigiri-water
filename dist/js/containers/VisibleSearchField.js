import { connect } from 'react-redux'
import SearchField from '../components/SearchField'
import { getFilteredData } from '../actions/search'

const mapStateToProps = (state) => {
  return {
    dashboard: state.selectedDashboard
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitSearch: (dashboard, params) => {
      console.log("searchfield", dashboard, params)
      dispatch(getFilteredData(dashboard, params))
    }
  }
}

const VisibleSearchField = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchField)

export default VisibleSearchField
