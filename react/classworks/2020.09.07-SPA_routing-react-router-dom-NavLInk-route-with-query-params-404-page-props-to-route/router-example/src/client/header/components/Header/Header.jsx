import React from 'react';
import PropTypes from 'prop-types';
import classes from './Header.module.scss';

const Header = (props) => {
  return (
   <div className={classes.root}>
       Header
   </div>
  );
};

Header.defaultProps = {
    example: '',
};

Header.propTypes = {
    example: PropTypes.string,
};

export { Header };
