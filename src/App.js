import './App.css';
import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  const baseUrl = 'http://localhost:8000';

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => !todo.completed));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '80vh' }}
    >
      <Grid item xs={3}>
        <header>
          <h1 className="header">Sproof Todo List </h1>
        </header>
      </Grid>
      <Grid item xs={3}>
        <Form
          todos={todos}
          setTodos={setTodos}
          inputText={inputText}
          setInputText={setInputText}
          baseUrl={baseUrl}
          status={status}
          setStatus={setStatus}
        />
      </Grid>
      <Grid item xs={3}>
        <TodoList
          baseUrl={baseUrl}
          todos={todos}
          setTodos={setTodos}
          filteredTodos={filteredTodos}
        />
      </Grid>
    </Grid>
  );
}

export default App;
