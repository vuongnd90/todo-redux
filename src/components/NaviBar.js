import React from 'react';
import { Link } from 'react-router-dom';

const NaviBar = () => {
  return (
    <div className="col-sm-2 sidenav">     
        <p><Link to='/'>Marvel</Link></p>
        <p><Link to='/todo'>Todo</Link></p>
    </div>
  )
}

export default NaviBar;