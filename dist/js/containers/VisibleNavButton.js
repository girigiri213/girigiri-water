import { connect } from 'react-redux'
import NavbarButton from '../components/NavbarButton'
import { logout } from '../actions/login'

const mapUsernameToProps = (state) => {
  return {
    username: state.userInfo.username
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => dispatch(logout())
  }
}

const VisibleNavButton = connect(
  mapUsernameToProps,
  mapDispatchToProps
)(NavbarButton)

export default VisibleNavButton
