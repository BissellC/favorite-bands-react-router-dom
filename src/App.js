import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pup">Pup</Link>
            </li>
            <li>
              <Link to="/the-frights">The Frights</Link>
            </li>
            <li>
              <Link to="/joyce-manor">Joyce Manor</Link>
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
