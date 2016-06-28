import React from 'react'
import VisibleListView from '../containers/VisibleListView'
import VisibleMainTitle from '../containers/VisibleMainTitle'
import MainTitle from './MainTitle'

const MainViewClient = () =>(
  <div id="page-wrapper">
    <MainTitle title="客户信息管理"/>
    <VisibleListView />
  </div>
)

export default MainViewClient
