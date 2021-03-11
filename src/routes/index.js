import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Loading from '../components/Loading'
// import Error from '../components/Error'

const Home = React.lazy(() => import('../pages/Home'))
const Detail = React.lazy(() => import('../pages/Detail'))
const Compare = React.lazy(() => import('../pages/Compare'))

export default function Routes() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<Loading fullScreen />}>
        <Switch>
          <Route exact path={['/', '/filter/:filter']} component={Home} />
          <Route exact path="/pokemon/:name" component={Detail} />
          <Route exact path="/compare" component={Compare} />
          {/* <Route component={Error} /> */}
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  )
}
