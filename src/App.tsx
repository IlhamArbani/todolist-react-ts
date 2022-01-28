import React from 'react';
import { NewTodo, Todos } from './components';
import { Todo } from './model';
// import './App.css';
import { useState } from 'react';

function App() {
  const [todos,setTodos] = useState<Todo[]>([])

  const addToDo = (todo: string) => {
    const newTodo = new Todo(todo);

    setTodos((current) => {
      return current.concat(newTodo);
    })
  }

  const removeTodo = (id: string) => {
    setTodos((currentTodos) => {
      return currentTodos.filter(currentTodo => currentTodo.id !== id)
    })
  }

  return (
    <div>
      <NewTodo addToDO={addToDo}/>
      <Todos removeList={removeTodo} items={todos}/>
    </div>
  );
}

export default App;
