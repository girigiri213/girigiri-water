import fetch from 'isomorphic-fetch'
import { fetchListIfNeeded } from '../actions/dashboard'
import {
  DASHBOARD_CLIENT,
  DASHBOARD_COM_STORE,
  DASHBOARD_COM_TURNOVER,
  DASHBOARD_REPAIR,
  DASHBOARD_REPORT,
  DASHBOARD_WELCOME
} from '../const/dashboard'

import { mapDashboardToResource } from './dashboard'

export const FORM_POST_SUCCEED = 'FORM_POST_SUCCEED'
export const RECEIVE_ENGINEERS = 'RECEIVE_ENGINEERS'

function formSubmittedSucceed(dashboard, data) {
  return {
    type: FORM_POST_SUCCEED,
    dashboard,
    data
  }
}

export function postForm(dashboard, data) {
  return (dispatch) => {
    return fetch(`/api/${mapDashboardToResource[dashboard]}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then(json => {
      console.log(json)
      dispatch(formSubmittedSucceed(dashboard, json))
    })
    .catch(err => {
      console.log(err)
    })
  }
}

export function deleteForm(dashboard, id) {
  return (dispatch) => {
    return fetch(`/api/${mapDashboardToResource[dashboard]}/${id}`, {
      method: "DELETE"
    })
    .then(response => {
      console.log(response.status)
      dispatch(fetchListIfNeeded(dashboard))
    })
    .catch(err => {
      console.log(err)
    })
  }
}

export function updateForm(dashboard, id, data) {
  return (dispatch) => {
    return fetch(`/api/${mapDashboardToResource[dashboard]}/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      console.log("update: ", response.status)
      dispatch(fetchListIfNeeded(dashboard))
    })
    .catch(err => {
      console.log(err)
    })
  }
}

function receiveEngineers(engineers) {
  return {
    type: RECEIVE_ENGINEERS,
    engineers
  }
}

export function getEngineers() {
  return (dispatch) => {
    return fetch(`/api/manager/engineer`)
    .then(response => response.json())
    .then(json => {
      console.log(json)
      dispatch(receiveEngineers(json))
    })
  }
}
