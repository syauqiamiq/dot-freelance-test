import React from 'react';
import { FooterComponent, NavbarComponent } from '../components';

const Template = ({ children }) => {
  return (
    <>
      <NavbarComponent />
      {children}
      <FooterComponent />
    </>
  );
};

export default Template;
