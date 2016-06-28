import { connect } from 'react-redux'
import NavItem from '../components/NavItem'
import { ICON_DASHBOARD } from '../components/const'

const getRefProps = ( /*state*/ ) => {
  return "/dashboard/customer"
}

const getBtnTypeProps = ( /*state*/ ) => {
  return ICON_DASHBOARD
}

const getTextProps = () => {
  return "item"
}

const mapStateToProps = ( /*state*/ ) => {
  return {
    btnType: getBtnTypeProps(),
    href: getRefProps(),
    text: getTextProps()
  }
}

const VisibleNavItem = connect(
  mapStateToProps
)(NavItem)

export default VisibleNavItem
