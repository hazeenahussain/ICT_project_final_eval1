import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbaruser = (props) => {
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
            Book Hall 
          </NavLink>
          <NavLink to='/articlelist'>
            Hall List
          </NavLink>
          <NavLink to='/articlelist'>
            Booking Calender
          </NavLink>
          <h2>Welcome Associate</h2>
          
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/'onClick={props.setlogout(1)}>Sign Out</NavBtnLink>
        </NavBtn>
        
      </Nav>
    </>
  );
};
  
export default Navbaruser;