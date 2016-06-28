import React from 'react'
import Nav from './Nav'
import MainView from './MainView'
import MainViewClient from './MainViewClient'
import MainViewReport from './MainViewReport'
import MainViewRepair from './MainViewRepair'
import MainViewComStore from './MainViewComStore'
import MainViewComTurnover from './MainViewComTurnover'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

const App = () => (
  <div>
    <Router history={browserHistory}>
      <Route path="/" component={Nav}>
        <IndexRoute component={MainView} />
        <Route path="customer" component={MainViewClient} />
        <Route path="component-store" component={MainViewComStore} />
        <Route path="component-turnover" component={MainViewComTurnover} />
        <Route path="repair" component={MainViewRepair} />
        <Route path="report" component={MainViewReport} />
      </Route>
    </Router>
  </div>
)

export default App
