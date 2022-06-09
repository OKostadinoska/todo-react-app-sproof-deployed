import CheckBoxRoundedIcon from '@mui/icons-material/CheckBoxRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { IconButton, ListItem, ListItemText } from '@mui/material';
import React from 'react';

const Todo = ({ text, todo, todos, setTodos, baseUrl }) => {
  const deleteHandler = () => {
    fetch(`${baseUrl}/todos/${todo.id}`, {
      method: 'DELETE',
    });
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    fetch(`${baseUrl}/todos/${todo.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        completed: !todo.completed,
      }),
    });
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      }),
    );
  };

  return (
    <ListItem sx={{ mr: 8 }}>
      <ListItemText
        primary={text}
        className={`todo-item ${todo.completed ? 'completed' : ''}`}
      />
      <IconButton onClick={completeHandler}>
        <CheckBoxRoundedIcon color="success" />
      </IconButton>
      <IconButton sx={{ mr: 22 }} onClick={deleteHandler}>
        <DeleteRoundedIcon color="warning" />
      </IconButton>
    </ListItem>
  );
};

export default Todo;
