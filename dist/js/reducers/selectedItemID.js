import { SELECT_LISTITEMID } from '../actions/dashboard'

export default function selectedItemID(state = -1, action) {
  switch(action.type) {
    case SELECT_LISTITEMID:
      return action.id
    default:
      return state
  }
}