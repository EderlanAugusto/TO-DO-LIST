import { Button, Paper, TextField,Box } from "@mui/material";
import React, { useState } from "react";
import { v4 as uidv4 } from 'uuid';

import PostAddIcon from '@mui/icons-material/PostAdd';
import './styles.css';

import logo from '../../images/logo.png';

export function Form({addTodoItem, isFound, alert}) {
  const [text,setText] = useState('');

  const todoItemCreate = (text) => {
    const todoNewItem = {
      text: text,
      id: uidv4(),
      check: false,
    };

    if(text.trim() === '') {
      alert(true, 
            'Task to do is required.',
            'error',
            'top',
            'center');
      return;
   }
   if(isFound(text))
   {
    alert(true,
          'This task has already been added.',
          'warning',
          'top',
          'center');
       return;
   }

    addTodoItem(todoNewItem)
    setText('');
  }

  return (
    
    <Paper className="paper">

      <div className="logo">
        <img src={logo} />
      </div>
      <div className="box">
            <Box
            sx={{
              width: 680,
              maxWidth: '100%',
            }}
          >
          <TextField 
            label="Task to do"
            id="outlined-size-small"
            defaultValue="Small"
            size="small"
            fullWidth={true}
            margin="dense"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(ev) => {
              if (ev.key === 'Enter') {
                todoItemCreate(text);
              }
            }}
            />
          </Box>
          <Button 
            variant="contained"
            endIcon={<PostAddIcon/>}
            onClick={()=>todoItemCreate(text)}
          >
            Add
          </Button>
        </div>
    </Paper>
  );
}