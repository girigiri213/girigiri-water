import { combineReducers } from 'redux'
import {
  SELECT_DASHBOARD
} from '../actions/dashboard'

import { DASHBOARD_WELCOME } from '../const/dashboard'

import {
  ROLE_CUSTOMER_SERVICE,
  ROLE_ENGINEER,
  ROLE_REPO_MANAGER,
  ROLE_TASK_SCHEDULER
} from '../const/role'


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

function username(state='sunpen', action) {
  return state
}

function password(state='213', action) {
  return state
}

function isLogin(state=false, action) {
  return state
}

function role(state=ROLE_ENGINEER, action) {
  return state
}

function dashboardByName(state={}, action) {
  return state
}

const rootReducer = combineReducers({
  userInfo,
  dashboardByName,
  selectedDashboard
})

export default rootReducer