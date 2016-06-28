import React from 'react'
import Navbar from './Navbar'
import NavSide from './NavSide'

const Nav = ({children}) => (
  <div>
    <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
      <Navbar />
      <NavSide />
    </nav>
    {children}
  </div>
)

export default Nav
