import { combineReducers } from 'redux'
import userInfo from './userInfo'
import dashboardByName from './dashboardByName'
import selectedDashboard from './selectedDashboard'
import selectedItemID from './selectedItemID'

const rootReducer = combineReducers({
  userInfo,
  dashboardByName,
  selectedDashboard,
  selectedItemID
})

export default rootReducer
