import fetch from 'isomorphic-fetch'

export const REQUEST_LIST     = 'REQUEST_LIST'
export const RECEIVE_LIST     = 'RECEIVE_LIST'
export const SELECT_DASHBOARD = 'SELECT_DASHBOARD'
export const LOADING_LIST     = 'LOADING_LIST'

export const REQUEST_ITEM = 'REQUEST_ITEM'
export const RECEIVE_ITEM = 'RECEIVE_ITEM'
export const SELECT_ITEM  = 'SELECT_ITEM'
export const LOADING_ITEM = 'LOADING_ITEM'

export function selectDashBoard(dashboard) {
  return {
    type: SELECT_DASHBOARD,
    dashboard
  }
}

export function loadingList(dashboard) {
  return {
    type: LOADING_LIST,
    dashboard
  }
}

function requestList(dashboard) {
  return {
    type: REQUEST_LIST,
    dashboard
  }
}

function receiveList(dashboard, json) {
  return {
    type: RECEIVE_LIST,
    dashboard,
    items: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

function fetchList(dashboard) {
  return dispatch => {
    dispatch(requestList(dashboard))
    return fetch(`/api/${list}`)
    .then(response => response.json())
    .then(json => dispatch(receiveList(dashboard, json)))
  }
}

function shouldFetchList(state, dashboard) {
  const list = state.dashboardByName(dashboard)
  if (!list) {
    return true
  }
  if (list.isFetching) {
    return false
  }
  return list.isInvalid
}

export function fetchListIfNeeded(dashboard) {
  return (dispatch, getState) => {
    if (shouldFetchList(getState(), dashboard)) {
      return dispatch(fetchList(dashboard))
    }
  }
}