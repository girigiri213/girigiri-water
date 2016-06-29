import fetch from 'isomorphic-fetch'

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

function loginSucceed(username, password) {
  return {
    type: LOGIN_SUCCEED,
    username,
    password
  }
}

function loginFailed() {
  return {
    type: LOGIN_FAILED
  }
}

function loginRequest(username, password) {
  return (dispatch) => {
    dispatch(loginSubmitted(username, password))
    let data = {
      username,
      password
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
      if (json.succeed) {
        dispatch(loginSucceed(username, password))
      } else {
        dispatch()
      }
    })
  }
}

export function logoutUser(username) {
  return {
    type: LOGOUT,
    username
  }
}
