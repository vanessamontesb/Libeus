import React from 'react';
import {render} from 'react-dom';
import {HashRouter} from 'react-router-dom'

import './index.css';

import * as serviceWorker from './serviceWorker';
import AppRoutes from './routes'

render(<HashRouter>
    <AppRoutes/>
</HashRouter>, 
    
document.getElementById('root'));
serviceWorker.unregister();
