// @flow
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Link from '../components/Link';
import {actions as FilterAction} from "../duck";

import type {State} from '../../todo/containers/VisibleTodoList';

type OwnProps = {
  filter: string,
}

function mapStateToProps(state: State, ownProps: OwnProps): {} {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

function mapDispatchToProps(dispatch: Function): {} {
  return bindActionCreators(FilterAction, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);