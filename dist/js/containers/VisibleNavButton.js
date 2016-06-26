import { connect } from 'react-redux'
import NavbarButton from '../components/NavbarButton'

const mapUsernameToProps = ( /*state*/ ) => {
  return {
    //username: state.username
    username: "John Smith"
  }
}

const VisibleNavButton = connect(
  mapUsernameToProps
)(NavbarButton)

export default VisibleNavButton
