import React, { PropTypes } from 'react'
import ListItem from './ListItem'
import { VisibleFormClient } from '../containers/VisibleFormView'
import FormReportRepairView from './FormReportRepairView'
import FormRepairInfoView from './FormRepairInfoView'
import FormComponentView from './FormComponentView'
import FormComTurnoverView from './FormComTurnoverView'
import VisibleSearchField from '../containers/VisibleSearchField'

import {
  DASHBOARD_CLIENT,
  DASHBOARD_COM_STORE,
  DASHBOARD_COM_TURNOVER,
  DASHBOARD_REPAIR,
  DASHBOARD_REPORT,
  DASHBOARD_WELCOME
} from '../const/dashboard'

export const getItemID = (item) => {
  let url = item["_links"]["self"]["href"].split('/')
  return url[url.length - 1]
}

const getDate = (item) => {
  let date = new Date(item["created"])
  let year = date.getYear() + 1900
  let month = date.getMonth() + 1
  let day = date.getDate()
  return year + "-" + month + "-" + day
}

const ListView = ({ listname, items, btns, dashboard, onClick }) => {
  let listItems = []
  let buttons = []

  switch (dashboard) {
    case DASHBOARD_CLIENT:
      items.forEach(item => {
        let type
        switch (item["type"]) {
          case 1:
            type = "家庭用户"
            break
          case 2:
            type = "单位用户"
            break
          case 3:
            type = "代理商"
            break
          case 4:
            type = "签约用户"
            break
          default:
            type = "未知用户"
        }
        listItems.push(
          <ListItem
            id={getItemID(item)}
            href={"#clientForm"}
            text={[
              <b>联系人：</b>,
              item["contactName"] + " ",
              <b>电话：</b>,
              item["mobile"] + " ",
              <b>用户类型：</b>,
              type
            ]}
            date={getDate(item)}
            onItemClick={onClick}
          />
        )
      })
      listItems.push(<VisibleFormClient />)
      break
    case DASHBOARD_REPORT:
      items.forEach(item=>{
        let deviceType, errorType
        switch (item["type"]) {
          case 1:
            deviceType = "台式机"
            break
          case 2:
            deviceType = "笔记本"
            break
          case 3:
            deviceType = "投影仪"
            break
          case 4:
            deviceType = "打印机"
            break
          default:
            deviceType = "其他"
            break
        }
        switch (item["errorType"]) {
          case 1:
            errorType = "固定性故障"
            break
          case 2:
            errorType = "间歇性故障"
            break
        }
        listItems.push(
          <ListItem
            id={getItemID(item)}
            href={"#reportForm"}
            text={[
              <b>故障现象：</b>,
              item["error"] + " ",
              <b>产品类型：</b>,
              deviceType + " ",
              <b>故障类型：</b>,
              errorType
            ]}
            date={getDate(item)}
            onItemClick={onClick}
          />
        )
      })
      listItems.push(<FormReportRepairView />)
      break
    case DASHBOARD_REPAIR:
      items.forEach(item => {
        let repairState
        switch (item["repairState"]) {
          case 1:
            repairState = "未分配"
            break
          case 2:
            repairState = "已分配"
            break
          case 3:
            repairState = "已维修"
            break
          case 4:
            repairState = "撤销"
            break
        }
        listItems.push(
          <ListItem
            id={getItemID(item)}
            href={"#repairForm"}
            text={[
              <b>维修状态：</b>,
              repairState
            ]}
            date={getDate(item)}
            onItemClick={onClick}
          />
        )
      })
      listItems.push(<FormRepairInfoView />)
      break
    case DASHBOARD_COM_STORE:
      items.forEach(item => {
        let storeState, serial = ""
        switch (item["state"]) {
          case 1:
            storeState = "正常"
            break
          case 2:
            storeState = "临界"
            break
          case 3:
            storeState = "警戒"
            break
          case 4:
            storeState = "缺货"
          default:
            break
        }
        if (item["serial"] !== null) {
          serial = item["serial"]
        }
        listItems.push(
          <ListItem
          id={getItemID(item)}
          href={"#componentForm"}
          text={[
            <b>备件名称：</b>,
            item["name"] + serial + " ",
            <b>数量：</b>,
            item["size"] + " ",
            <b>库存状态：</b>,
            storeState
          ]}
          date={getDate(item)}
          onItemClick={onClick}
          />
        )
      })
      listItems.push(<FormComponentView />)
      break
    case DASHBOARD_COM_TURNOVER:
      items.forEach(item => {
        let serial = ""
        if (item["serial"] !== null){
          serial = item["serial"]
        }
        listItems.push(
          <ListItem
            id={getItemID(item)}
            href={"#comTurnoverForm"}
            text={[
              <b>备件名称：</b>,
              item["name"] + serial + " ",
              <b>数量: </b>,
              item["size"]
            ]}
            date={getDate(item)}
            onItemClick={onClick}
          />
        )
      })
      listItems.push(<FormComTurnoverView />)
      break
    default:
  }
  btns.forEach(button => {
    buttons.push(
      <button type="button" className="btn btn-primary btn-sm pull-right" data-toggle="modal" data-target={button.href} onClick={() => onClick(0)}>
        {button.text}
      </button>
    )
  })

  return (
    <div>
      <VisibleSearchField />
      <div className="row">
        <div className="panel panel-default">
          <div className="panel-heading">
            {listname}
            {buttons}
          </div>
          <div className="panel-body">
            <div className="list-group">
              {listItems}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ListView.propTypes = {
  // the list's name
  listname: PropTypes.string.isRequired,

  // the item's info
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
  }).isRequired).isRequired,

  // the button's info
  btns: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
  }).isRequired).isRequired,

  dashboard: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default ListView
