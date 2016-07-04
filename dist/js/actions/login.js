import fetch from 'isomorphic-fetch'

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

import { fetchListIfNeeded } from './dashboard'
import { getEngineers } from './form'

const mapRoleToDashboards = {
  [ROLE_ENGINEER]: [
    DASHBOARD_REPAIR,
    DASHBOARD_COM_TURNOVER
  ],
  [ROLE_CUSTOMER_SERVICE]: [
    DASHBOARD_CLIENT,
    DASHBOARD_REPORT
  ],
  [ROLE_REPO_MANAGER]: [
    DASHBOARD_COM_STORE,
    DASHBOARD_COM_TURNOVER
  ],
  [ROLE_TASK_SCHEDULER]: [
    DASHBOARD_REPAIR
  ],
  [ROLE_SUPERUSER]: [
    DASHBOARD_CLIENT,
    DASHBOARD_REPORT,
    DASHBOARD_REPAIR,
    DASHBOARD_COM_STORE,
    DASHBOARD_COM_TURNOVER
  ]
}

import { hashHistory } from 'react-router'

export const LOGIN_SUBMITTED = 'LOGIN_SUBMITTED'
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCEED = 'LOGIN_SUCCEED'
export const LOGIN_FAILED = 'LOGIN_FAILED'

export const LOGOUT = 'LOGOUT'

function loginSubmitted(username, password) {
  return {
    type: LOGIN_SUBMITTED,
    username,
    password
  }
}

function loginSucceed(username, password, role) {
  return {
    type: LOGIN_SUCCEED,
    username,
    password,
    role
  }
}

function loginFailed() {
  return {
    type: LOGIN_FAILED
  }
}

export function loginRequest(username, password) {
  return (dispatch) => {
    dispatch(loginSubmitted(username, password))
    let data = {
      name: username,
      password: password
    }

    return fetch(`/api/login`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then(json => {
      console.log("LOGIN_SUCCEED:", json)
      dispatch(loginSucceed(username, password, json.roles[0]))
      mapRoleToDashboards[json.roles[0]].forEach(dashboard => {
        dispatch(fetchListIfNeeded(dashboard))
      })
      dispatch(getEngineers())
      hashHistory.push('/dashboard')
    })
    .catch(err => {
      console.log("LOGIN_LOG", err)
      dispatch(loginFailed())
    })
  }
}

export function logout() {
  return {
    type: LOGOUT,
  }
}
