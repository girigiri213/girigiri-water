import React from 'react'
import Nav from './Nav'
import MainView from './MainView'
import MainViewClient from './MainViewClient'
import MainViewReport from './MainViewReport'
import MainViewRepair from './MainViewRepair'
import MainViewComStore from './MainViewComStore'
import MainViewComTurnover from './MainViewComTurnover'

const App = () => (
  <div>
    <Nav />
    <MainViewComTurnover />
  </div>
)

export default App
