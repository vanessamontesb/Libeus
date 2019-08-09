import React from 'react';
import {Route, Switch} from 'react-router-dom'
import App from './components/App';
import Home from './components/home/home';
import Page404 from './components/page404/page404';
import UserDetails from './pages/home/userDetails'
import Following from './components/following/following'

const AppRoutes = () =>
<App>
    <Switch>
        <Route exact path="/users" component={Home}/>
        <Route exact path="/users/:id" component={UserDetails} />
        <Route exact path="/users/:id/following" component={Following} />
        <Route component={Page404}/>/>
    </Switch>
</App>

export default AppRoutes;