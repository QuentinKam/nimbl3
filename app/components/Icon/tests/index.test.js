import React from 'react';
import { shallow } from 'enzyme';

import Icon from '../index';

const icon = 'ControlsWhite';
const width = 17;
const height = 17;
const renderComponent = (props = {
  icon,
  width,
  height,
}) => shallow(
  <Icon {...props}></Icon>
);

describe('<Icon />', () => {
  it('should render an <img> tag', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.is('img')).toBe(true);
  });
});

// describe('<Img />', () => {
//   it('should render an <img> tag', () => {
//     const renderedComponent = renderComponent();
//     expect(renderedComponent.is('img')).toBe(true);
//   });
//
//   it('should have an src attribute', () => {
//     const renderedComponent = renderComponent();
//     expect(renderedComponent.prop('src')).toEqual(src);
//   });
//
//   it('should have an alt attribute', () => {
//     const renderedComponent = renderComponent();
//     expect(renderedComponent.prop('alt')).toEqual(alt);
//   });
//
//   it('should not have a className attribute', () => {
//     const renderedComponent = renderComponent();
//     expect(renderedComponent.prop('className')).toBeUndefined();
//   });
//
//   it('should adopt a className attribute', () => {
//     const className = 'test';
//     const renderedComponent = renderComponent({ className });
//     expect(renderedComponent.hasClass(className)).toBe(true);
//   });
//
//   it('should not adopt a srcset attribute', () => {
//     const srcset = 'test-HD.png 2x';
//     const renderedComponent = renderComponent({ srcset });
//     expect(renderedComponent.prop('srcset')).toBeUndefined();
//   });
// });
