import { useState } from 'react';
import styles from './Todolist.module.css';
import Todo from '../Todo/Todo';

/* eslint-disable-next-line */
export interface TodolistProps {}
const todolist = [
  {
    name: 'First to do',
    complete: false,
  },
  {
    name: 'Second to do',
    complete: false,
  },
  {
    name: 'Third to do',
    complete: false,
  },
  {
    name: 'Fourth to do',
    complete: false,
  },
  {
    name: 'Fifth to do',
    complete: true,
  },
];

interface Todo {
  name: string;
  complete: boolean;
}

export function Todolist(props: TodolistProps) {
  const [todos, setTodos] = useState(todolist);
  const [text, setText] = useState('');

  function toggleTodo(todo: Todo) {
    setTodos(
      todos.map((currentTodo) => {
        return currentTodo.name === todo.name
          ? { ...todo, complete: !todo.complete }
          : currentTodo;
      })
    );
  }

  function addTodo() {
    const katt = {
      name: document.getElementById('newTodo')?.innerText || text,
      complete: false,
    };
    setText('');
    setTodos([...todos, katt]);
  }
  return (
    <div className={styles['container']}>
      <h1>Welcome to Todolist!</h1>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.name}
            name={todo.name}
            complete={todo.complete}
            onClick={toggleTodo}
          />
        );
      })}

      <input
        style={{ border: 'solid tomato 1px' }}
        type="text"
        value={text}
        id="newTodo"
        onChange={(e) => setText(e.target.value)}
      />
      <button type="button" onClick={addTodo}>
        Legg til todo
      </button>
    </div>
  );
}

export default Todolist;
