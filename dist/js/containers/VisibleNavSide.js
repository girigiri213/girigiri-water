import { connect } from 'react-redux'
import { ICON_TASK, ICON_DASHBOARD, ICON_WRENCH, ICON_USERS } from '../components/const'
import NavSide from '../components/NavSide'

let userItems = [
  {
    href: "dashboard/customer",
    btnType: ICON_USERS,
    text: "客户信息管理"
  },
  {
  	href: "dashboard/repair",
    btnType: ICON_WRENCH,
    text: "维修信息管理"
  },
  {
  	href: "dashboard/report",
    btnType: ICON_TASK,
    text: "报修信息管理"
  },
  {
    href: "dashboard/component-store",
    btnType: ICON_DASHBOARD,
    text: "备件管理"
  },
  {
    href: "dashboard/component-turnover",
    btnType: ICON_DASHBOARD,
    text: "备件流水管理"
  }
]

const mapStateToProps = ( /*state*/ ) => {
  return {
  	navItems: userItems
  }
}

const VisibleNavSide = connect(
  mapStateToProps
)(NavSide)

export default VisibleNavSide
