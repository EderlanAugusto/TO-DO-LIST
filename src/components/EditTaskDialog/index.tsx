import React, { useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import TextFields from '@mui/material/TextField';
import { v4 as uuidv4 } from 'uuid';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditTaskDialog({open, handleDialog, todoItem, editTodoItem, isFound, alert}) {
const [editText,setEditText] = useState(todoItem.text);

  const handleSalve = (oldTodoItem) => {
    const newTodoItem = {
      text: editText,
      id: uuidv4(),
      check: oldTodoItem.check,
    };

    if(oldTodoItem.text.trim() !== newTodoItem.text.trim())
    {
      if(isFound(newTodoItem.text.trim()))
      {
       alert(true,
             'This task has already been added.',
             'warning',
             'top',
             'center');
          return;
      };
    };

    editTodoItem(oldTodoItem,newTodoItem);
    handleDialog();
    alert(true,'Task to do changed with success','success','top','center');      
  }

  return (
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleDialog}
        aria-describedby="alert-dialog-slide-description"
        fullWidth={true}
      >
        <DialogTitle>{"Edit task to do"}</DialogTitle>
        <DialogContent>
          <TextFields 
            defaultValue={todoItem.text}
            fullWidth={true}
            onChange={(e) => setEditText(e.target.value)} 
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialog}>Cancel</Button>
          <Button onClick={()=>handleSalve(todoItem)}>Salve</Button>
        </DialogActions>
      </Dialog>
  );
}
