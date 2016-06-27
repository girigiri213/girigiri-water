import React from 'react'
import NavSearch from './NavSearch'
import VisibleNavItem from '../containers/VisibleNavItem'

let userItems = [
  {
    href: "test1"
  },
  {
    href: "text2"
  },
  {
    href: "text3"
  }
]

const NavSide = () =>{
  let items = []
  // TODO: use state info
  userItems.forEach(() => {
    items.push(<VisibleNavItem />)
  })

  return (
    <div className="navbar-default sidebar" role="navigation">
      <div className="sidebar-nav navbar-collapse">
        <ul className="nav" id="side-menu">
          <NavSearch />
          {items}
        </ul>
      </div>
    </div>
  )
}

export default NavSide
