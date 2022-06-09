import AddBoxIcon from '@mui/icons-material/AddBox';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import React from 'react';

const Form = ({
  inputText,
  setInputText,
  todos,
  setTodos,
  baseUrl,
  status,
  setStatus,
}) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    fetch(`${baseUrl}/todos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: inputText,
        completed: false,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setTodos([...todos, data]);
        setInputText('');
      })
      .catch((error) => console.log('post todo error:' + error));
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <>
      <TextField
        sx={{ minWidth: 400 }}
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        color="secondary"
        label="Write Todo"
        variant="outlined"
      />
      <Button onClick={submitHandler} type="submit" color="secondary">
        <AddBoxIcon sx={{ fontSize: 50 }} />
      </Button>

      <FormControl>
        <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
        <Select
          onChange={statusHandler}
          value={status}
          variant="outlined"
          sx={{ minWidth: 120 }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Sort
          by"
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="completed">Completed</MenuItem>
          <MenuItem value="uncompleted">Uncompleted</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default Form;
