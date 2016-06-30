import React, { PropTypes } from 'react'
import Nav from './Nav'
import MainView from './MainView'
import MainViewClient from './MainViewClient'
import MainViewReport from './MainViewReport'
import MainViewRepair from './MainViewRepair'
import MainViewComStore from './MainViewComStore'
import MainViewComTurnover from './MainViewComTurnover'
import VisibleLogin from '../containers/VisibleLogin'
import { Router, Route, IndexRoute, IndexRedirect, Link, hashHistory } from 'react-router'
import { connect } from 'react-redux'

const App = (props, { store }) => (
  <div>
    <Router history={hashHistory}>
      <Route path="/">
        <IndexRedirect to="dashboard" />
        <Route path="dashboard" component={Nav} onEnter={(nextState, replace) => requireLogin(nextState, replace, store)}>
          <IndexRoute component={MainView} />
          <Route path="customer"component={MainViewClient} />
          <Route path="component-store" component={MainViewComStore} />
          <Route path="component-turnover" component={MainViewComTurnover} />
          <Route path="repair" component={MainViewRepair} />
          <Route path="report" component={MainViewReport} />
        </Route>
        <Route path="login" component={VisibleLogin} />
      </Route>
    </Router>
  </div>
)

App.contextTypes = {
  store: PropTypes.object
}

function requireLogin(nexState, replace, store) {
  let isLogin = store.getState().userInfo.isLogin
  console.log("isLogin", isLogin)
  if (!isLogin) {
    replace({
      pathname: '/login',
    })
  }
}

function mapStateToProps(state) {
  return {
    isLogin: state.userInfo.isLogin
  }
}

// export default connect(mapStateToProps)(App)
export default App
