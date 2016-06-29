import { combineReducers } from 'redux'
import {
  SELECT_DASHBOARD
} from '../actions/dashboard'

import {
  LOGIN_SUBMITTED,
  LOGIN_REQUEST,
  LOGIN_SUCCEED,
  LOGIN_FAILED,
  LOGOUT
} from '../actions/login'

import {
  ROLE_CUSTOMER_SERVICE,
  ROLE_ENGINEER,
  ROLE_REPO_MANAGER,
  ROLE_TASK_SCHEDULER,
  ROLE_SUPERUSER
} from '../const/role'

import {
  DASHBOARD_CLIENT,
  DASHBOARD_COM_STORE,
  DASHBOARD_COM_TURNOVER,
  DASHBOARD_REPAIR,
  DASHBOARD_REPORT,
  DASHBOARD_WELCOME
} from '../const/dashboard'

function selectedDashboard(state=DASHBOARD_WELCOME, action) {
  switch (action.type) {
    case SELECT_DASHBOARD:
      return action.dashboard
    default:
      return state
  }
}

function userInfo(state={}, action) {
  return {
    username: username(state.username, action),
    password: password(state.password, action),
    isLogin: isLogin(state.isLogin, action),
    role: role(state.role, action)
  }
}

function username(state="", action) {
  switch (action.type) {
    case LOGIN_SUCCEED:
      return action.username
    case LOGIN_FAILED:
    case LOGOUT:
      return ""
    default:
      return state
  }
}

function password(state="", action) {
  switch (action.type) {
    case LOGIN_SUCCEED:
      return action.password
    case LOGIN_FAILED:
    case LOGOUT:
      return ""
    default:
      return state
  }
}

function isLogin(state=false, action) {
  switch (action.type) {
    case LOGIN_SUCCEED:
      return true
    case LOGIN_FAILED:
    case LOGOUT:
      return false
    default:
      return state
  }
}

function role(state=ROLE_SUPERUSER, action) {
  switch (action.type) {
    case LOGIN_SUCCEED:
      return action.role
    case LOGIN_FAILED:
    case LOGOUT:
      return ""
    default:
      return state
  }
}

function dashboardByName(state={
  [DASHBOARD_CLIENT]: [
    {
      id: 1,
      name: "客户1",
      date: "2016/6/25",
      href: "#clientForm"
    },
    {
      id: 2,
      name: "客户2",
      date: "2016/6/25",
      href: "#clientForm"
    }
  ],
  [DASHBOARD_REPORT]: [
    {
      id: 1,
      name: "客户1报修记录",
      date: "2016/6/26",
      href: "#reportForm"
    },
    {
      id: 2,
      name: "客户2报修记录",
      date: "2016/6/26",
      href: "#reportForm"
    }
  ],
  [DASHBOARD_REPAIR]: [
    {
      id: 1,
      name: "客户1维修记录",
      date: "2016/6/26",
      href: "#repairForm"
    },
    {
      id: 2,
      name: "客户2维修记录",
      date: "2016/6/26",
      href: "#repairForm"
    }
  ],
  [DASHBOARD_COM_STORE]: [
    {
      id: 1,
      name: "CPU库存信息",
      date: "2016/6/26",
      href: "#componentForm"
    },
    {
      id: 2,
      name: "显卡库存信息",
      date: "2016/6/26",
      href: "#componentForm"
    }
  ],
  [DASHBOARD_COM_TURNOVER]: [
    {
      id: 1,
      name: "客户1备件流水明细",
      date: "2016/6/26",
      href: "#comTurnoverForm"
    },
    {
      id: 2,
      name: "客户1备件流水明细",
      date: "2016/6/26",
      href: "#comTurnoverForm"
    }
  ],
  [DASHBOARD_WELCOME]: [

  ]
}, action) {
  return state
}

const rootReducer = combineReducers({
  userInfo,
  dashboardByName,
  selectedDashboard
})

export default rootReducer
