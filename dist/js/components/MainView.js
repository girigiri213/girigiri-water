import React from 'react'
import VisibleListView from '../containers/VisibleListView'

const MainView = () =>(
  <div id="page-wrapper">
    <div className="row">
      <div className="col-lg-12">
        <h1 className="page-header">Dashboard</h1>
      </div>
    </div>
    <VisibleListView />
  </div>
)

export default MainView
