import { connect } from 'react-redux'
import NavSide from '../components/NavSide'

import {
  DASHBOARD_CLIENT,
  DASHBOARD_COM_STORE,
  DASHBOARD_COM_TURNOVER,
  DASHBOARD_REPAIR,
  DASHBOARD_REPORT,
  DASHBOARD_WELCOME
} from '../const/dashboard'

import {
  ROLE_CUSTOMER_SERVICE,
  ROLE_ENGINEER,
  ROLE_REPO_MANAGER,
  ROLE_TASK_SCHEDULER
} from '../const/role'

import { selectDashBoard } from '../actions/dashboard'

const mapDashboardToNavItem = {
  [DASHBOARD_CLIENT]: {
    href: "dashboard/customer",
    dashboard: DASHBOARD_CLIENT,
    text: "客户信息管理"
  },
  [DASHBOARD_REPAIR]: {
  	href: "dashboard/repair",
    dashboard: DASHBOARD_REPAIR,
    text: "维修信息管理"
  },
  [DASHBOARD_REPORT]: {
  	href: "dashboard/report",
    dashboard: DASHBOARD_REPORT,
    text: "报修信息管理"
  },
  [DASHBOARD_COM_STORE]: {
    href: "dashboard/component-store",
    dashboard: DASHBOARD_COM_STORE,
    text: "备件管理"
  },
  [DASHBOARD_COM_TURNOVER]: {
    href: "dashboard/component-turnover",
    dashboard: DASHBOARD_COM_TURNOVER,
    text: "备件流水管理"
  }
}

const mapRoleToNavItems = {
  [ROLE_ENGINEER]: [
    mapDashboardToNavItem[DASHBOARD_REPAIR],
    mapDashboardToNavItem[DASHBOARD_COM_TURNOVER]
  ],
  [ROLE_CUSTOMER_SERVICE]: [
    mapDashboardToNavItem[DASHBOARD_CLIENT],
    mapDashboardToNavItem[DASHBOARD_REPORT]
  ],
  [ROLE_REPO_MANAGER]: [
    mapDashboardToNavItem[DASHBOARD_COM_STORE],
    mapDashboardToNavItem[DASHBOARD_COM_TURNOVER]
  ],
  [ROLE_TASK_SCHEDULER]: [
    mapDashboardToNavItem[DASHBOARD_REPAIR]
  ]
}

const mapStateToProps = (state) => {
  return {
  	navItems: mapRoleToNavItems[state.userInfo.role]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onNavItemClick: (dashboard) => {
      dispatch(selectDashBoard(dashboard))
    }
  }
}

const VisibleNavSide = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavSide)

export default VisibleNavSide
