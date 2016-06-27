import { connect } from 'react-redux'
import MainTitle from '../components/MainTitle'

const mapStateToProps = ( /*state*/ ) => {
  return {
    title: "Dashboard"
  }
}

const VisibleMainTitle = connect(
  mapStateToProps
)(MainTitle)

export default VisibleMainTitle
