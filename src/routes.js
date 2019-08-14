import React from 'react';
import {Route, Switch} from 'react-router-dom'
import App from './components/App';
import Home from './components/home/home';
import Page404 from './components/page404/page404';
import UserDetails from './pages/home/userDetails';
import Following from './components/following/following';
import Followers from './components/followers/followers';
import NewFriends from './components/newfriends/newfriends'

const AppRoutes = () =>
<App>
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/users/:id" component={UserDetails} />
        <Route exact path="/following/:id" component={Following} />
        <Route exact path="/followers/:id" component={Followers} />
        <Route exact path="/newfriends/:id" component={NewFriends} />
        <Route component={Page404}/>/>
    </Switch>
</App>

export default AppRoutes;