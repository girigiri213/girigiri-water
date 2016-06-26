import React from 'react'
import NavbarBrand from './NavbarBrand'
import VisibleNavButton from '../containers/VisibleNavButton'

const Navbar = () => (
  <div>
    <NavbarBrand />
    <ul className="nav navbar-top-links navbar-right">
      <VisibleNavButton />
    </ul>
  </div>
)

export default Navbar
