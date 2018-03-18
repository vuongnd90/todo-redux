import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Marvel from '../containers/Marvel';
import TodoApp from './TodoApp';
import Welcome from './Welcome';

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Welcome}/>
        <Route exact path='/marvel' component={Marvel}/>
        <Route path='/todo' component={TodoApp}/>
      </Switch>
    </main>
  )
}

export default Main;