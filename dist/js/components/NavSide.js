import React, { PropTypes } from 'react'
import NavSearch from './NavSearch'
import NavItem from './NavItem'

const NavSide = ({ navItems }) =>{
  let items = []
  // TODO: use state info
  navItems.forEach(item => {
    items.push(
      <NavItem
        href={item.href} 
        btnType={item.btnType} 
        text={item.text}
      />
    )
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

NavSide.propTypes = {
  navItems : PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string.isRequired,
    btnType: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default NavSide
