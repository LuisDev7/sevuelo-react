import React from 'react'
import Layout from '../components/Layout'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import NewRequest from '../containers/NewRequest.jsx'
import Requests from '../containers/Requests'
import RequestDetail from '../containers/RequestDetail'

 const App = () => {
    return (
        <BrowserRouter>
        <Layout>
          <Switch>
          <Route exact path="/" component={NewRequest}/>
          <Route exact path="/requests" component={Requests}/>
          <Route exact path="/requests/requests-detail/:id" component={RequestDetail}/>
          </Switch>
          </Layout>
          </BrowserRouter>
          
    )
}
 export default App;