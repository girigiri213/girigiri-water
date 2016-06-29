import React, { PropTypes } from 'react'
import ListItem from './ListItem'
import FormClientView from './FormClientView'
import FormReportRepairView from './FormReportRepairView'
import FormRepairInfoView from './FormRepairInfoView'
import FormComponentView from './FormComponentView'
import FormComTurnoverView from './FormComTurnoverView'

import {
  DASHBOARD_CLIENT,
  DASHBOARD_COM_STORE,
  DASHBOARD_COM_TURNOVER,
  DASHBOARD_REPAIR,
  DASHBOARD_REPORT,
  DASHBOARD_WELCOME
} from '../const/dashboard'

const ListView = ({ listname, items, btns, dashboard }) => {
  let listItems = []
  let buttons = []
  items.forEach(item => {
    listItems.push(
      <ListItem
        id={item.id}
        href={item.href}
        name={item.name}
        date={item.date}
      />
    )
  })
  switch (dashboard) {
    case DASHBOARD_CLIENT:
      listItems.push(<FormClientView />)
      break
    case DASHBOARD_REPORT:
      listItems.push(<FormReportRepairView />)
      break
    case DASHBOARD_REPAIR:
      listItems.push(<FormRepairInfoView />)
      break
    case DASHBOARD_COM_STORE:
      listItems.push(<FormComponentView />)
      break
    case DASHBOARD_COM_TURNOVER:
      listItems.push(<FormComTurnoverView />)
      break
    default:
  }
  btns.forEach(button => {
    buttons.push(
      <button type="button" className="btn btn-primary btn-sm pull-right" data-toggle="modal" data-target={button.href}>
        {button.text}
      </button>
    )
  })

  return (
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

  dashboard: PropTypes.string.isRequired
}

export default ListView
