import React from 'react';
import {List} from "@mui/material";
import {HeaderTodo} from '../../components/HeaderTodo';
import { TodoItem } from "../../components/TodoItem";

import './styles.css';

 export function TodoList({todos, deleteTodoItem, editTodoItem, isFound, alert}){
  return(
   <>
      <HeaderTodo todos={todos} />
      <div className='container scrollable-div'>
        <List sx={{
              paddingTop:"0em",
              paddingBottom:"1em",
              position: 'relative',
              overflow: 'auto',
              }}
        >
              {
                todos
                .sort((a, b) => b.index - a.index)
                .map((todoItem) => (
                  <div key={todoItem.id} style={{marginTop:'1em'}}>
                    <TodoItem 
                      todoItem={todoItem}  
                      deleteTodoItem={deleteTodoItem}
                      editTodoItem={editTodoItem} 
                      isFound={isFound}
                      alert={alert}                    
                    />
                  </div>
                  )).reverse()
              }
        </List>
        </div>
   </>
  );
 }
