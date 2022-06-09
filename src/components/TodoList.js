import React, { useEffect } from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodos, baseUrl, filteredTodos }) => {
  // getting all todos (GET)
  useEffect(() => {
    async function getTodos() {
      const response = await fetch(`${baseUrl}/todos`);
      const allTodos = await response.json();
      setTodos([...allTodos]);
    }
    getTodos().catch((error) => console.log('get all todos error:' + error));
  }, [setTodos, baseUrl]);

  return (
    <>
      {filteredTodos.map((todo) => (
        <Todo
          key={todo.id}
          text={todo.text}
          todos={todos}
          todo={todo}
          setTodos={setTodos}
          baseUrl={baseUrl}
        />
      ))}
    </>
  );
};

export default TodoList;
