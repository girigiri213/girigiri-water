import React from 'react'
import VisibleListView from '../containers/VisibleListView'
import VisibleMainTitle from '../containers/VisibleMainTitle'
import MainTitle from './MainTitle'

const MainViewReport = () =>(
  <div id="page-wrapper">
    <MainTitle title="报修信息管理"/>
    <VisibleListView />
  </div>
)

export default MainViewReport
