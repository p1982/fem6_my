import React from 'react';
import PropTypes from 'prop-types';

import { Navbar } from '../../../client/header/components/Navbar';

export const CommonLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

CommonLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
