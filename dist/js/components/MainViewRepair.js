import React from 'react'
import VisibleListView from '../containers/VisibleListView'
import VisibleMainTitle from '../containers/VisibleMainTitle'
import MainTitle from './MainTitle'

const MainViewRepair = () =>(
  <div id="page-wrapper">
    <MainTitle title="维修信息管理"/>
    <VisibleListView />
  </div>
)

export default MainViewRepair
