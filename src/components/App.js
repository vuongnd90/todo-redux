import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

import FooterContainer from '../containers/FooterContainer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

// import logo from './logo.svg';
import '../App.css';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <FooterContainer/>
  </div>
)

export default App;
