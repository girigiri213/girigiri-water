import React from 'react'
import Navbar from './Navbar'
import VisibleNavSide from '../containers/VisibleNavSide'

const Nav = ({children}) => (
  <div>
    <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
      <Navbar />
      <VisibleNavSide />
    </nav>
    {children}
  </div>
)

export default Nav
