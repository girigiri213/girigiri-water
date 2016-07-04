import { combineReducers } from 'redux'
import userInfo from './userInfo'
import dashboardByName from './dashboardByName'
import selectedDashboard from './selectedDashboard'
import selectedItemID from './selectedItemID'
import engineers from './engineers'

const rootReducer = combineReducers({
  userInfo,
  dashboardByName,
  selectedDashboard,
  selectedItemID,
  engineers
})

export default rootReducer
