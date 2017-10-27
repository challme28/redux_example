// @flow
import * as React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import TodoForm from '../components/TodoForm';
import {actions as AddTodoAction} from "../duck";

function mapDispatchToProps(dispatch: Function) {
  return bindActionCreators(AddTodoAction, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(TodoForm);