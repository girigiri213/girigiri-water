import { connect } from 'react-redux'
import { getItemID } from '../components/ListView'
import FormClientView from '../components/FormClientView'
import FormReportRepairView from '../components/FormReportRepairView'
import FormRepairInfoView from '../components/FormRepairInfoView'
import FormComponentView from '../components/FormComponentView'
import FormComTurnoverView from '../components/FormComTurnoverView'

const getItemData = (state) => {
  let datas = state["dashboardByName"][state.selectedDashboard]
  for (let i = 0; i < datas.length; i++) {
    if (getItemID(datas[i]) === state.selectedItemID) {
      return datas[i]
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
