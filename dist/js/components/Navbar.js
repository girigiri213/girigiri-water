import React from 'react'
import NavbarBrand from './NavbarBrand'
import VisibleNavButton from '../containers/VisibleNavButton'

const Navbar = () => (
  <div>
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <NavbarBrand />
    </div>
    <ul className="nav navbar-top-links navbar-right">
      <VisibleNavButton />
    </ul>
  </div>
)

export default Navbar
