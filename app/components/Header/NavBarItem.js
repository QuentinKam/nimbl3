/**
*
* NavBarItem
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';

import HeaderLink from './HeaderLink';
import Icon from '../Icon';
import messages from './messages';

function NavBarItem(props) {
  const { to, icon } = props;
  const message = `${to}`.substr(1);
  const isActive = window.location.pathname === `${to}`;
  return (
    <HeaderLink to={to}>
      <Icon icon={isActive ? `${icon}White` : `${icon}Purple`}></Icon>
      <FormattedMessage {...messages[`${message}`]} />
      <Icon icon={isActive ? 'ArrowWhite' : 'ArrowPurple'} width={7} height={12}></Icon>
    </HeaderLink>
  );
}

NavBarItem.propTypes = {
  to: React.PropTypes.string.isRequired,
  icon: React.PropTypes.string.isRequired,
};

export default NavBarItem;
