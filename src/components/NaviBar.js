import React from 'react';
import { NavLink } from 'react-router-dom';

const NaviBar = () => {
  return (
    <div className="col-sm-2 sidenav">     
        <p><NavLink to='/marvel' activeClassName="active-menu">Marvel</NavLink></p>
        <p><NavLink to='/todo' activeClassName="active-menu">Todo</NavLink></p>
    </div>
  )
}

export default NaviBar;