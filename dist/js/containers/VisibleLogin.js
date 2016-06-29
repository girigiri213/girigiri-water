import { connect } from 'react-redux'
import LoginForm from '../components/LoginForm'
import { loginRequest } from '../actions/login'

const mapStoreToProps = (store) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (username, password) => {
      dispatch(loginRequest(username, password))
    }
  }
}

const VisibleLogin = connect(
  mapStoreToProps,
  mapDispatchToProps
)(LoginForm)

export default VisibleLogin