import React, { PropTypes } from 'react'
import { ICON_DASHBOARD } from './const'

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
      <a href={href}>
        {icon}
        {text}
      </a>
    </li>
  )
}

NavItem.propTypes = {
  href: PropTypes.string.isRequired,
  btnType: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default NavItem
