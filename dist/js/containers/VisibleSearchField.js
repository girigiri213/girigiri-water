import { connect } from 'react-redux'
import SearchField from '../components/SearchField'

import {
  DASHBOARD_CLIENT,
  DASHBOARD_COM_STORE,
  DASHBOARD_COM_TURNOVER,
  DASHBOARD_REPAIR,
  DASHBOARD_REPORT,
  DASHBOARD_WELCOME
} from '../const/dashboard'

const mapStateToProps = (state) => {
  let items = []
  switch (state.selectedDashboard) {
    case DASHBOARD_CLIENT:
      items = ["身份证编号", "　移动电话", "　　联系人"]
      break
    case DASHBOARD_REPORT:
      items = ["报修编号", "客户编号"]
      break
    case DASHBOARD_REPAIR:
      items = ["报修编号", "　工程师"]
      break
    case DASHBOARD_COM_STORE:
      items = ["备件名称"]
      break
    case DASHBOARD_COM_TURNOVER:
      items = ["备件名称"]
    default:
  }
  return {
    items
  }
}

const VisibleSearchField = connect(
  mapStateToProps
)(SearchField)

export default VisibleSearchField
