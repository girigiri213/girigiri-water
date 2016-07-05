import fetch from 'isomorphic-fetch'

export const REQUEST_LIST     = 'REQUEST_LIST'
export const RECEIVE_LIST     = 'RECEIVE_LIST'
export const SELECT_DASHBOARD = 'SELECT_DASHBOARD'
export const SELECT_LISTITEMID = 'SELECT_LISTITEMID'

export const REQUEST_ITEM = 'REQUEST_ITEM'
export const RECEIVE_ITEM = 'RECEIVE_ITEM'
export const SELECT_ITEM  = 'SELECT_ITEM'

import {
  DASHBOARD_CLIENT,
  DASHBOARD_COM_STORE,
  DASHBOARD_COM_TURNOVER,
  DASHBOARD_REPAIR,
  DASHBOARD_REPORT,
  DASHBOARD_WELCOME
} from '../const/dashboard'

export function selectDashBoard(dashboard) {
  return {
    type: SELECT_DASHBOARD,
    dashboard
  }
}

export function selectListItem(id) {
  return {
    type: SELECT_LISTITEMID,
    id
  }
}

export function requestList(dashboard) {
  return {
    type: REQUEST_LIST,
    dashboard
  }
}

export function receiveList(dashboard, json) {
  console.log("receiveList: ", json)
  if (Object.keys(json).length === 0) {
    return {
      type: RECEIVE_LIST,
      dashboard,
      items: [],
      receivedAt: Date.now()
    }
  }
  return {
    type: RECEIVE_LIST,
    dashboard,
    items: json._embedded[mapDashboardToResource[dashboard]],
    receivedAt: Date.now()
  }
}

export const mapDashboardToResource = {
  [DASHBOARD_REPAIR]: 'repairHistories',
  [DASHBOARD_COM_TURNOVER]: 'componentRequests',
  [DASHBOARD_CLIENT]: 'customers',
  [DASHBOARD_REPORT]: 'requests',
  [DASHBOARD_COM_STORE]: 'components'
}

function fetchList(dashboard) {
  return dispatch => {
    dispatch(requestList(dashboard))
    return fetch(`/api/${mapDashboardToResource[dashboard]}`)
    .then(response => response.json())
    .then(json => dispatch(receiveList(dashboard, json)))
  }
}

function shouldFetchList(state, dashboard) {
  const list = state.dashboardByName[dashboard]
  if (!list) {
    return true
  }
  if (list.isFetching) {
    return false
  }
  // return list.isInvalid
  return true
}

export function fetchListIfNeeded(dashboard) {
  return (dispatch, getState) => {
    if (shouldFetchList(getState(), dashboard)) {
      return dispatch(fetchList(dashboard))
    }
  }
}
