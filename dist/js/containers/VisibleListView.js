import { connect } from 'react-redux'
import ListView from '../components/ListView'
import { selectListItem } from '../actions/dashboard'

import {
  DASHBOARD_CLIENT,
  DASHBOARD_COM_STORE,
  DASHBOARD_COM_TURNOVER,
  DASHBOARD_REPAIR,
  DASHBOARD_REPORT,
  DASHBOARD_WELCOME
} from '../const/dashboard'

const getItemsProps = (state) => {
  return state.dashboardByName[state.selectedDashboard].items
}

const getBtnsProps = (state) => {
  let btns=[{text:"新建", href: "#"}]
  switch (state.selectedDashboard) {
    case DASHBOARD_CLIENT:
      btns[0].href = "#clientForm"
      break
    case DASHBOARD_REPORT:
      btns[0].href = "#reportForm"
      break
    case DASHBOARD_REPAIR:
      btns[0].href = "#repairForm"
      break
    case DASHBOARD_COM_STORE:
      btns[0].href = "#componentForm"
      break
    case DASHBOARD_COM_TURNOVER:
      btns[0].href= "#comTurnoverForm"
      break
    default:
      break
  }
  return btns
}

const getListnameProps = (state) => {
  switch (state.selectedDashboard) {
    case DASHBOARD_CLIENT:
      return "客户信息记录"
    case DASHBOARD_REPORT:
      return "报修记录"
    case DASHBOARD_REPAIR:
      return "维修记录"
    case DASHBOARD_COM_STORE:
      return "备件库存记录"
    case DASHBOARD_COM_TURNOVER:
      return "备件流水记录"
    default:
      return "error"
  }
}

const mapStateToProps = (state) => {
  return {
    items: getItemsProps(state),
    btns: getBtnsProps(state),
    listname: getListnameProps(state),
    dashboard: state.selectedDashboard
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (id) => {
      dispatch(selectListItem(id))
    }
  }
}

const VisibleListView = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListView)

export default VisibleListView
