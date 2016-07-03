import { connect } from 'react-redux'
import { getItemID } from '../components/ListView'
import FormClientView from '../components/FormClientView'
import FormReportRepairView from '../components/FormReportRepairView'
import FormRepairInfoView from '../components/FormRepairInfoView'
import FormComponentView from '../components/FormComponentView'
import FormComTurnoverView from '../components/FormComTurnoverView'

const getItemData = (state) => {
  let data = state.dashboardByName[state.selectedDashboard].items
  for (let i = 0; i < data.length; i++) {
    if (getItemID(data[i]) === state.selectedItemID) {
      return data[i]
    }
  }
  return null
}

const mapStateToProps = (state) => {
  return {
    data: getItemData(state)
  }
}

export const VisibleFormClient = connect(
  mapStateToProps
)(FormClientView)

export const VisibleFormComponent = connect(
  mapStateToProps
)(FormComponentView)

export const VisibleFormComTurnOver = connect(
  mapStateToProps
)(FormComTurnoverView)

export const VisibleFormRepairInfo = connect(
  mapStateToProps
)(FormRepairInfoView)

export const VisibleFormReportRepair = connect(
  mapStateToProps
)(FormReportRepairView)
