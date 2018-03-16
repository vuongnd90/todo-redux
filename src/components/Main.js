import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Marvel from './Marvel';
import TodoApp from './TodoApp';

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Marvel}/>
        <Route path='/todo' component={TodoApp}/>
      </Switch>
    </main>
  )
}

export default Main;