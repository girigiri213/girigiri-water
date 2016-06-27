import { connect } from 'react-redux'
import ListView from '../components/ListView'

let testItems = [
  {
    id: 1,
    name: "the first task",
    date: "2016/6/25",
    href: "#"
  },
  {
    id: 2,
    name: "other task",
    date: "2016/6/26",
    href: "#"
  }
]

const getItemsProps = ( /*state*/ ) => {
  return testItems
}

const getListnameProps = ( /*state*/ ) => {
  return "TestList"
}

const mapStateToProps = ( /*state*/ ) => {
  return {
    items: getItemsProps(),
    listname: getListnameProps()
  }
}

const VisibleListView = connect(
  mapStateToProps
)(ListView)

export default VisibleListView
