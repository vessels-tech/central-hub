import React from 'react';
import NavLink from './navlink';
import logo from '../../images/logo.png'
import './nav.scss';

const Navigation = () => (
  <div className="nav">
    <div className="logo">
      <img src={logo} width="100px" height="100px" />
    </div>
    <nav>
      <ul>
        <li><NavLink to="/members">Members</NavLink></li>
        <li><NavLink to="/positions">Positions</NavLink></li>
        <li><NavLink to="/transfers">Transfers</NavLink></li>
        <li><NavLink to="/accounting">Accounting</NavLink></li>
        <li><NavLink to="/fees">Fees</NavLink></li>
        <li><NavLink to="/charges">Charges</NavLink></li>
        <li><NavLink to="/reports">Reports</NavLink></li>
        <li><NavLink to="/logs">Logs</NavLink></li>
        <li><NavLink to="/administration">Administration</NavLink></li>
      </ul>
    </nav>
  </div>
);

export default Navigation
