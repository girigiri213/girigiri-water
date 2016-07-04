import { connect } from 'react-redux'
import { getItemID } from '../components/ListView'
import { DASHBOARD_CLIENT } from '../const/dashboard'
import { postForm, deleteForm, updateForm } from '../actions/form'

import FormClientView from '../components/FormClientView'
import FormReportRepairView from '../components/FormReportRepairView'
import FormRepairInfoView from '../components/FormRepairInfoView'
import FormComponentView from '../components/FormComponentView'
import FormComTurnoverView from '../components/FormComTurnoverView'

const getItemData = (state) => {
  if (state.selectedItemID <= 0) {
    return null
  }
  let data = state.dashboardByName[state.selectedDashboard].items
  for (let i = 0; i < data.length; i++) {
    if (getItemID(data[i]) === state.selectedItemID) {
      return data[i]
    }
  }
  return null
}

const getClientList = (state) => {
  return state.dashboardByName[DASHBOARD_CLIENT].items
}

const getEngineerList = (state) => {
  return state.engineers
}

const mapStateToProps = (state) => {
  return {
    data: getItemData(state),
    itemID: state.selectedItemID
  }
}

const mapReportStateToProps = (state) => {
  return {
    data: getItemData(state),
    itemID: state.selectedItemID,
    clients: getClientList(state)
  }
}

const mapRepairStateToProps = (state) => {
  return {
    data: getItemData(state),
    itemID: state.selectedItemID,
    engineers: getEngineerList(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCreate: (dashboard, data) => {
      dispatch(postForm(dashboard, data))
    },
    onDelete: (dashboard, id) => {
      dispatch(deleteForm(dashboard, id))
    },
    onUpdate: (dashboard, id, data) => {
      dispatch(updateForm(dashboard, id, data))
    }
  }
}

export const VisibleFormClient = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormClientView)

export const VisibleFormComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormComponentView)

export const VisibleFormComTurnOver = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormComTurnoverView)

export const VisibleFormRepairInfo = connect(
  mapRepairStateToProps,
  mapDispatchToProps
)(FormRepairInfoView)

export const VisibleFormReportRepair = connect(
  mapReportStateToProps,
  mapDispatchToProps
)(FormReportRepairView)
