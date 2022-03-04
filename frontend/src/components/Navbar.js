import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = (props) => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <img src="./logo.png" width="90px" height="90px" />
          <NavLink to='/'>
            Home
          </NavLink>
          <NavLink to='/articlelist'>
            Associates List
          </NavLink>
          <NavLink to='/add'>
            Register
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
          <h3>Welcome Admin </h3>
        </NavMenu>
        <NavBtn>
          {/* <NavBtnLink to='/Navbar' onClick={props.setlogout(1)}>Sign Out</NavBtnLink> */}
          <NavBtnLink to='/' onClick={props.setlogout(1)}>Sign Out</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;