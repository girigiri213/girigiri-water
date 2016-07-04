import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import {
  DASHBOARD_CLIENT,
  DASHBOARD_COM_STORE,
  DASHBOARD_COM_TURNOVER,
  DASHBOARD_REPAIR,
  DASHBOARD_REPORT,
  DASHBOARD_WELCOME
} from '../const/dashboard'

const NavItem = ({ href, dashboard, text, onClick }) => {
  let icon
  switch (dashboard) {
    case DASHBOARD_REPORT:
      icon = (<i className="fa fa-tasks fa-fw"></i>)
      break
    case DASHBOARD_REPAIR:
      icon = (<i className="fa fa-wrench fa-fw"></i>)
      break
    case DASHBOARD_CLIENT:
      icon = (<i className="fa fa-users fa-fw"></i>)
      break
    case DASHBOARD_COM_STORE:
      icon = (<i className="fa fa-cog fa-fw"></i>)
      break
    case DASHBOARD_COM_TURNOVER:
      icon = (<i className="fa fa-exchange fa-fw"></i>)
      break
    default:
      icon = (<i></i>)
  }
  return (
    <li>
      <Link className="my-nav-item"  to={href} onClick={e => onClick(dashboard)}>
        {icon}
        {text}
      </Link>
    </li>
  )
}

NavItem.propTypes = {
  // the side button's reference link
  href: PropTypes.string.isRequired,
  // the icon style of the item
  dashboard: PropTypes.string.isRequired,
  // the item's name
  text: PropTypes.string.isRequired
}

export default NavItem
