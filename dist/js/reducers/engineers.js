import { RECEIVE_ENGINEERS } from '../actions/form'

function engineers(state=[], action) {
  switch (action.type) {
    case RECEIVE_ENGINEERS:
      return action.engineers
    default:
      return state
  }
}
export default engineers
