import React, { useState } from "react";
import Paper from '@mui/material/Paper';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditTaskDialog from '../EditTaskDialog';
import { ContactlessOutlined } from "@mui/icons-material";

export function TodoItem({todoItem, deleteTodoItem, editTodoItem, isFound, alert}) {
  const [openDialog, setOpenDialog] = useState(false);

  const handleDialog =  () => {
    setOpenDialog(!openDialog)
  }

  // const [checked, setChecked] = React.useState([0]);

  const handleToggle = (todoItem) => () => {
    const newTodoItem = {
      text: todoItem.text,
      id: todoItem.id,
      check: !todoItem.check,
    };
    editTodoItem(todoItem,newTodoItem);
  };


  return (
    <>
      <EditTaskDialog 
        open={openDialog} 
        handleDialog={handleDialog} 
        todoItem={todoItem}
        editTodoItem={editTodoItem} 
        isFound={isFound} 
        alert={alert}
      />
      <Paper>
          <ListItem
            secondaryAction={
              <IconButton 
                edge="end" 
                aria-label="delete" 
                onClick={() => deleteTodoItem(todoItem.id)}
              >
                <DeleteIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton
              role={undefined} 
              dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={todoItem.check}
                  tabIndex={-1}
                  disableRipple
                  onClick={handleToggle(todoItem)} 
                />
              </ListItemIcon>
              <ListItemText style={{textDecorationLine: todoItem.check ? 'line-through' : 'none'}}
              //primary={`Line item ${value + 1}`} 
              primary={todoItem.text} 
              onClick={handleDialog}
              />
            </ListItemButton>
          </ListItem>
      </Paper>        
    </>      
  );
}
