import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const NavbarButton = ({username}) => (
  <li className="dropdown">
    <a className="dropdown-toggle" data-toggle="dropdown" href="#">
      <i className="fa fa-user fa-fw">
        </i>
          {username}
        <i className="fa fa-caret-down">
      </i>
    </a>
    <ul className="dropdown-menu dropdown-user">
      <li><Link to="/login"><i className="fa fa-sign-out fa-fw"></i> Logout</Link>
      </li>
    </ul>
  </li>
)

NavbarButton.propTypes = {
  username: PropTypes.string.isRequired
}

export default NavbarButton
