import fetch from 'isomorphic-fetch'

import {
  ROLE_CUSTOMER_SERVICE,
  ROLE_ENGINEER,
  ROLE_REPO_MANAGER,
  ROLE_TASK_SCHEDULER,
  ROLE_SUPERUSER
} from '../const/role'

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
    // TODO: fake login need to be removed after backend API is implemented.
    if (username === "sunpen" && password === "213") {
      dispatch(loginSucceed(username, password, ROLE_SUPERUSER))
    }
    else if (username === "ladrift" && password === "hellodad") {
      dispatch(loginSucceed(username, password, ROLE_CUSTOMER_SERVICE))
    }
    else if (username === "jiannanshen" && password === "heihei") {
      dispatch(loginSucceed(username, password, ROLE_REPO_MANAGER))
    }
    else if (username === "jiangyou" && password === "123") {
      dispatch(loginSucceed(username, password, ROLE_TASK_SCHEDULER))
    }
    else {
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
        hashHistory.push('/dashboard')
      })
      .catch(err => {
        console.log("LOGIN_LOG", err)
        dispatch(loginFailed())
      })
    }
  }
}

export function logout() {
  return {
    type: LOGOUT,
  }
}
