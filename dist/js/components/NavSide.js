import React, { PropTypes } from 'react'
import NavSearch from './NavSearch'
import NavItem from './NavItem'

const NavSide = ({ navItems, onNavItemClick }) =>{
  let items = []
  navItems.forEach(item => {
    items.push(
      <NavItem
        href={item.href}
        dashboard={item.dashboard}
        text={item.text}
        onClick={() => onNavItemClick(item.dashboard)}
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
  navItems: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string.isRequired,
    dashboard: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onNavItemClick: PropTypes.func.isRequired
}

export default NavSide
