// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

type link = {
  +active: boolean,
  +children?: React.Node,
  +onClick: Function,
};

const Link = ({active, children, onClick}: link) => {
  if (active) {
    return <span>{children}</span>
  }
  return (
    <a href="#"
       onClick={e => {
         e.preventDefault();
         onClick()
       }}>{children}
    </a>
  )
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Link;