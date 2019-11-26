import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import HomePage from './components/HomePage'
import Pup from './components/Pup'
import TheFrights from './components/TheFrights'
import JoyceManor from './components/JoyceManor'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="/pup">
                Pup
              </Link>
            </li>
            <li>
              <Link className="link" to="/the-frights">
                The Frights
              </Link>
            </li>
            <li>
              <Link className="link" to="/joyce-manor">
                Joyce Manor
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/pup" component={Pup}></Route>
          <Route exact path="/the-frights" component={TheFrights}></Route>
          <Route exact path="/joyce-manor" component={JoyceManor}></Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
