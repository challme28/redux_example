// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

type link = {
  +active: boolean,
  +children?: React.Node,
  +setVisibilityFilter: Function,
  +filter?: string
};

const Link = ({active, children, setVisibilityFilter, filter}: link) => {
  if (active) {
    return <span>{children}</span>
  }
  return (
    <a href="#"
       onClick={e => {
         e.preventDefault();
         setVisibilityFilter(filter)
       }}>{children}
    </a>
  )
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  setVisibilityFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired
};

export default Link;