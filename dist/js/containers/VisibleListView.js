import { connect } from 'react-redux'
import ListView from '../components/ListView'

let testItems = [
  {
    id: 1,
    name: "客户信息表单",
    date: "2016/6/25",
    href: "#clientForm"
  },
  {
    id: 2,
    name: "报修记录表单",
    date: "2016/6/26",
    href: "#reportForm"
  },
  {
    id: 3,
    name: "报修设备表单",
    date: "2016/6/26",
    href: "#deviceForm"
  },
  {
    id: 4,
    name: "维修记录表单",
    date: "2016/6/26",
    href: "#repairForm"
  },
  {
    id: 5,
    name: "备件表单",
    date: "2016/6/26",
    href: "#componentForm"
  },
  {
    id: 6,
    name: "备件流水明细表单",
    date: "2016/6/26",
    href: "#comTurnoverForm"
  }
]

let testBtns = [
  {
    text: "新建",
    href: "#clientForm"
  }
]

const getItemsProps = ( /*state*/ ) => {
  return testItems
}

const getBtnsProps = ( /*state*/ ) => {
  return testBtns
}

const getListnameProps = ( /*state*/ ) => {
  return "TestList"
}

const mapStateToProps = ( /*state*/ ) => {
  return {
    items: getItemsProps(),
    btns: getBtnsProps(),
    listname: getListnameProps()
  }
}

const VisibleListView = connect(
  mapStateToProps
)(ListView)

export default VisibleListView
