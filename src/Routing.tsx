import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Faq from './pages/Faq/Faq'
import Main from './pages/Main/Main'
import Terms from './pages/Terms/Terms'

const Routing: React.FC = () => {
  const isAuth = false

  let routes = (
    <Switch>
      <Route path="/terms" component={Terms} />
      <Route path="/faq" component={Faq} />
      <Route path="/" exact component={Main} />
      <Redirect to="/" />
    </Switch>
  )

  if (isAuth) {
    routes = (
      <Switch>
        <Route path="/terms" component={Terms} />
        <Route path="/faq" component={Faq} />
        <Route path="/" exact component={Main} />
        <Redirect to="/" />
      </Switch>
    )
  }

  return routes
}

export default Routing
