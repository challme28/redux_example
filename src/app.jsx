import React from 'react';
import Footer from './modules/filter/components/Footer'
import AddTodo from './modules/todo/containers/AddTodo'
import VisibleTodoList from './modules/todo/containers/VisibleTodoList'


export default class App extends React.Component {
  render() {
    return (
      <div>
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
      </div>
    );
  }
}