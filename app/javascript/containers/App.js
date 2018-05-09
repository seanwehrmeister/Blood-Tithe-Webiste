import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import HomePage from './HomePage'


const App = props => {

  return(
    <Router history={browserHistory}>
      <Route path='/' component={HomePage} />
    </Router>
  )
}

export default App
