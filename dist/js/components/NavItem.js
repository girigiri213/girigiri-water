import React, { PropTypes } from 'react'
import { ICON_DASHBOARD } from './const'
import { Link } from 'react-router'

const NavItem = ({ href, btnType, text }) => {
  let icon
  switch (btnType) {
    case ICON_DASHBOARD:
      icon = (<i className="fa fa-dashboard fa-fw"></i>)
      break;
    default:
      icon = (<i></i>)
  }
  return (
    <li>
      <Link to={href}>
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
  btnType: PropTypes.string.isRequired,
  // the item's name
  text: PropTypes.string.isRequired
}

export default NavItem
