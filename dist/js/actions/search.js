import fetch from 'isomorphic-fetch'
import { requestList, receiveList } from './dashboard'

import {
  DASHBOARD_CLIENT,
  DASHBOARD_COM_STORE,
  DASHBOARD_COM_TURNOVER,
  DASHBOARD_REPAIR,
  DASHBOARD_REPORT,
  DASHBOARD_WELCOME
} from '../const/dashboard'

const mapDashboardToAPI = {
  [DASHBOARD_CLIENT]: `customers/searchCustomer`,
  [DASHBOARD_REPORT]: `requests/searchRequest`,
  [DASHBOARD_REPAIR]: `repairHistories/searchHistories`,
  [DASHBOARD_COM_TURNOVER]: `componentRequests/searchRequest`,
  [DASHBOARD_COM_STORE]: `components/search/findByName`
}

export function getFilteredData(dashboard, params) {
  return (dispatch) => {
    dispatch(requestList(dashboard))
    let url = new URL(`${location.origin}/api/${mapDashboardToAPI[dashboard]}`)
    // TODO
    Object.keys(params).forEach(key => {
      if (params[key] !== "" && params[key] !== 0) {
        url.searchParams.append(key, params[key])
      }
    })
    return fetch(url)
    .then(response => response.json())
    .then(json => {
      dispatch(receiveList(dashboard, json))
    })
  }
}
