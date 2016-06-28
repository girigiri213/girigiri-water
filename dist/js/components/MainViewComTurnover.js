import React from 'react'
import VisibleListView from '../containers/VisibleListView'
import VisibleMainTitle from '../containers/VisibleMainTitle'
import MainTitle from './MainTitle'

const MainViewComTurnover = () =>(
  <div id="page-wrapper">
    <MainTitle title="备件流水管理"/>
    <VisibleListView />
  </div>
)

export default MainViewComTurnover
