import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import Home from './component/Home'
import Features from './component/Features'
import Pricing from './component/Pricing'
import Action1 from './component/Action1'
import Action2 from './component/Action2'
import Action3 from './component/Action3'


ReactDOM.render(
    
    <Router>
      <Switch>
        <Route path="/" name="Home" component={App}>
        </Route>
         
          <Route exact path="/" name="Home" component={Home}></Route>
          <Route path="/feature" name="Features" component={Features}></Route>
          <Route path="/pricing" name="Pricing" component={Pricing}></Route>
           <Route path="/action/action1" name="Action1" component={Action1}></Route>
               <Route path="/action/action2" name="Action2" component={Action2}></Route>
               <Route path="/action/action3" name="Action3" component={Action3}></Route>
      </Switch>
    </Router>
    
    , 


document.getElementById('root')

);
registerServiceWorker();
