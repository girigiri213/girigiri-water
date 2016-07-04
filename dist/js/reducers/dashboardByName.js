import {
  DASHBOARD_CLIENT,
  DASHBOARD_COM_STORE,
  DASHBOARD_COM_TURNOVER,
  DASHBOARD_REPAIR,
  DASHBOARD_REPORT,
  DASHBOARD_WELCOME
} from '../const/dashboard'

import {
  REQUEST_LIST,
  RECEIVE_LIST,
  SELECT_DASHBOARD
} from '../actions/dashboard'

import {
  FORM_POST_SUCCEED
} from '../actions/form'

export default function dashboardByName(state={}, action) {
  return Object.assign({}, state, {
    [action.dashboard]: dashboardList(state[action.dashboard], action)
  })
}

function dashboardList(state={}, action) {
  return {
    items: items(state.items, action),
    isFetching: isFetching(state.isFetching, action)
  }
}

function items(state=[], action) {
  switch (action.type) {
    case RECEIVE_LIST:
      return action.items

    // TODO: add to items
    case FORM_POST_SUCCEED:
      return [
        ...state,
        action.data
      ]

    default:
      return state
  }
}

function isFetching(state=false, action) {
  switch (action.type) {
    case REQUEST_LIST:
      return true
    case RECEIVE_LIST:
      return false
    default:
      return state
  }
}
