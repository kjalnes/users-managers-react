import React from 'react';
import { Link } from 'react-router';

const Header = (props) => {
    const active = (pathname) => props.pathname === pathname;
    return (
        <header>
            <h1> Users Managers React</h1>
            <ul className='nav nav-tabs'>
              <li className={ active('/') ? 'active' : '' }><Link to='/'> Home </Link></li>
              <li className={ active('/users')  || active('/users/edit') ? 'active' : '' }><Link to='/users'> Users </Link></li>
            </ul>
        </header>
    )
}

export default Header;

