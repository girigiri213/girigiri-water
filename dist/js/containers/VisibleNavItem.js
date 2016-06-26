import { connect } from 'react-redux'
import NavItem from '../components/NavItem'
import { ICON_DASHBOARD } from '../components/const'

const mapRefToProps = ( /*state*/ ) => {
  return {
    // href: state.ref
    href: "#"
  }
}

const getBtnTypeProps = ( /*state*/ ) => {
  return ICON_DASHBOARD
}

const mapBtnTypeToProps = () => {
  return {
    clas: getBSProps()
  }
}
