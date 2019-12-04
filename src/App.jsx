import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import NotFound from './pages/NotFound'
import Minions from './pages/Minions'
import Minion from './pages/Minion'
import AddMinion from './pages/AddMinion'

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Minions}></Route>
        <Route exact path="/Minion" component={Minion}></Route>
        <Route exact path="/AddMinion" component={AddMinion}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
