import { Fragment } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { ReactComponent as CheckoutLogo } from '../../assets/logo.svg';

import './navigation.styles.scss';

const Navigation = () => {
  return (
    <Fragment>
      <header className='Navigation' role='banner'>
        <nav className='Nav--container'>
          <NavLink className='Nav--logo-container' to='/'>
            <CheckoutLogo />
          </NavLink>
          <ul className='Nav--links-container' role='menubar'>
            <li role="none">
              <NavLink to='/' className='Nav--link' role='menuitem'>
                Submit rating
              </NavLink>
            </li>
            <li role="none">
              <NavLink to='/results' className='Nav--link' role='menuitem'>
                Rating Results
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
