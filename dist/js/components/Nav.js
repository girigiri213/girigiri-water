import React from 'react'
import Navbar from './Navbar'
import NavSide from './NavSide'

const Nav = () => (
  <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
    <Navbar />
    <NavSide />
  </nav>
)

export default Nav
