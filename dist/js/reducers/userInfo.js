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

export default function userInfo(state={}, action) {
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
