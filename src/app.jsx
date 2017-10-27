import React from 'react';
import Footer from './modules/filter/components/Footer'
import AddTodo from './modules/todo/containers/AddTodo'
import VisibleTodoList from './modules/todo/containers/VisibleTodoList'


const App=()=>{
    return (
      <div>
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
      </div>
    );
};

export default App;