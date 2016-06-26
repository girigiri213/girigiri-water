import React, { PropTypes } from 'react'

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
      <li><a href="login.html"><i className="fa fa-sign-out fa-fw"></i> Logout</a>
      </li>
    </ul>
  </li>
)

NavbarButton.propTypes = {
  username: PropTypes.string.isRequired
}

export default NavbarButton
