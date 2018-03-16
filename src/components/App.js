import React from 'react';


import FooterContainer from '../containers/FooterContainer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

// import logo from './logo.svg';
import '../App.css';
import Header from './Header';
import Main from './Main';
import NaviBar from './NaviBar';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="container-fluid text-center"> 
          <div className="row content">
            <NaviBar/>
            <Main/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
