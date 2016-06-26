import React from 'react'

const NavSearch = () => (
  <li className="sidebar-search">
    <div className="input-group custom-search-form">
      <input type="text" className="form-control" placeholder="Search...">
      <span className="input-group-btn">
        <button type="button" className="btn btn-default">
          <i className="fa fa-search"></i>
        </button>
      </span>
    </div>
  </li>
)

export default NavSearch
