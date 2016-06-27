import React from 'react'
import VisibleListView from '../containers/VisibleListView'
import VisibleMainTitle from '../containers/VisibleMainTitle'

const MainView = () =>(
  <div id="page-wrapper">
    <VisibleMainTitle />
    <VisibleListView />
  </div>
)

export default MainView
