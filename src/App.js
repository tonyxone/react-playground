import React, { Component } from 'react';
import Menu from './component/Menu';

import Home from './component/Home'
import Features from './component/Features'
import Pricing from './component/Pricing'
import Action1 from './component/Action1'
import Action2 from './component/Action2'
import Action3 from './component/Action3'
import { Route, Switch } from 'react-router-dom'
import BreadCrumb from './component/BreadCrumbs'

class App extends Component {
  render() {
    return (
      <div>
      <Menu {...this.props}/>
      <BreadCrumb {...this.props}></BreadCrumb>
      {this.props.children}
      
      <Switch>
          <Route exact path="/" name="Home" component={Home}></Route>
          <Route path="/feature" name="Features" component={Features}></Route>
          <Route path="/pricing" name="Pricing" component={Pricing}></Route>
           <Route path="/action/action1" name="Action1" component={Action1}></Route>
               <Route path="/action/action2" name="Action2" component={Action2}></Route>
               <Route path="/action/action3" name="Action3" component={Action3}></Route>
      </Switch>
      
      </div>
    );
  }
}

export default App;
