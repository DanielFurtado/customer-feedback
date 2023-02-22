import { Fragment } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { ReactComponent as CheckoutLogo } from '../../assets/logo.svg';
import { 
  NavContainer, 
  NavigationHeader, 
  NavLinksContainer 
} from './navigation.styles';

const Navigation = () => {
  return (
    <Fragment>
      <NavigationHeader role='banner'>
        <NavContainer>
          <NavLink className='Nav--logo-container' to='/'>
            <CheckoutLogo />
          </NavLink>
          <NavLinksContainer role='menubar'>
            <li role="none">
              <NavLink to='/' className='Nav--link' role='menuitem'>
                Form
              </NavLink>
            </li>
            <li role="none">
              <NavLink to='/results' className='Nav--link' role='menuitem'>
                Results
              </NavLink>
            </li>
          </NavLinksContainer>
        </NavContainer>
      </NavigationHeader>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
