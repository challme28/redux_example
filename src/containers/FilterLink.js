// @flow
import { connect } from 'react-redux';
import { setVisibilityFilter } from "../actions/index";
import Link from '../components/Link';

import type { State } from './VisibleTodoList';

type OwnProps = {
  filter: string,
}

const mapStateToProps = (state: State, ownProps: OwnProps): boolean => {
  return ownProps.filter === state.visibilityFilter
};

const mapDispatchToProps = (dispatch:Function, ownProps: OwnProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
};

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default FilterLink;