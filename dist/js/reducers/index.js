import { combineReducers } from 'redux'
import userInfo from './userInfo'
import dashboardByName from './dashboardByName'
import selectedDashboard from './selectedDashboard'

const rootReducer = combineReducers({
  userInfo,
  dashboardByName,
  selectedDashboard
})

export default rootReducer
