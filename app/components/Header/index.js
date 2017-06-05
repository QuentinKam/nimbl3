import React from 'react';
import styled from 'styled-components';

import NavHeader from './NavHeader';
import NavBarItem from './NavBarItem';
import NavBar from './NavBar';
import NavFooter from './NavFooter';

const HeaderWrapper = styled.div `
    height: 100%;
    width: 247px;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    background-color: white;
    max-height: 100vh;
`;

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <HeaderWrapper>
        <NavHeader>Nimbl3</NavHeader>
        <NavBar>
          <NavBarItem to="/Dashboard" icon="Controls"></NavBarItem>
          <NavBarItem to="/Orders" icon="ShoppingCart"></NavBarItem>
          <NavBarItem to="/Companies" icon="Factory"></NavBarItem>
          <NavBarItem to="/Products" icon="Box"></NavBarItem>
          <NavBarItem to="/Documents" icon="Document"></NavBarItem>
          <NavBarItem to="/Pricing" icon="Hierarchy"></NavBarItem>
          <NavBarItem to="/Brands" icon="Shapes"></NavBarItem>
          <NavBarItem to="/Settings" icon="Gear"></NavBarItem>
          <NavBarItem to="/Reports" icon="Chart"></NavBarItem>
          <NavBarItem to="/AccountUsers" icon="People"></NavBarItem>
        </NavBar>
        <NavFooter>Supported By .....
        </NavFooter>
      </HeaderWrapper>
    );
  }
}

export default Header;
