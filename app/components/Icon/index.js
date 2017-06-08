/**
*
* Icon
*
*/

import React from 'react';
// import styled from 'styled-components';

import * as Icons from './icons/';

const Icon = ({
  icon,
  width = 17,
  height = 17,
}) => (
  <img src={Icons[icon]} role="presentation" width={width} height={height}></img>
);

Icon.propTypes = {
  icon: React.PropTypes.string.isRequired,
  width: React.PropTypes.number,
  height: React.PropTypes.number,
};

export default Icon;
