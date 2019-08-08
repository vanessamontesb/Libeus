import React from 'react';
import {Route, Switch} from 'react-router-dom'

import App from './components/App';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Home from './components/home/home';
import Page404 from './components/page404/page404';

const AppRoutes = () =>
<App>
    <Switch>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/" component={Home}/>
        <Route component={Page404}/>/>
    </Switch>
</App>

export default AppRoutes;