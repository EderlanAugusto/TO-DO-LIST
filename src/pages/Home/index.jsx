import { useEffect, useState } from "react";
import {Container} from "@mui/material";

import AlertSnack from '../../components/AlertSnack';
import { Form } from "../../components/Form";

import './styles.css';
import { TodoList } from "../../components/TodoList";
const LOCAL_STORAGE_KEY = 'todo:savedTasks';
export function Home() {
  
  const [todos,setTodos] = useState([]);
  const [state, setState] = useState({
    open: false,
    textMsg:'todoItem saved.',
    typeAlert: 'success',
    vertical: 'top',
    horizontal: 'center',
  });

  const loadSavedTodos = () =>{
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(saved){
      setTodos(JSON.parse(saved));
    }
  }

  const setDatabase = (arrayTodo) =>{
    setTodos(arrayTodo);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(arrayTodo));
  }
  useEffect (() => { 
    loadSavedTodos();
  },[]);

  const getTodos = () =>{
    if(localStorage.getItem(LOCAL_STORAGE_KEY) === undefined){
      return [];
    }else{
      return localStorage.getItem(LOCAL_STORAGE_KEY);
    }
  }

  const addTodoItem = (todoItem) => {
    setDatabase([...todos,todoItem]);
     alert(true,'Task to do added with success','success','top','center')
  }

  const deleteTodoItem = (id) => {
    var filtered = todos.filter((todoItem) => todoItem.id !== id);
    setDatabase(filtered);
    alert(true,'Task to do deleted with success','success','top','center')
   }

  const editTodoItem = (oldTodoItem, newTodoItem ) => {
     const index = todos.findIndex(todoItem => todoItem.id === oldTodoItem.id);
     var todoItemChanged = [...todos];
     todoItemChanged[index] = newTodoItem;
     setTodos(todoItemChanged);
  }

 const isFound = (text) => todos.some(todoItem => {
  if (todoItem.text.toUpperCase().trim() === text.toUpperCase().trim()) {
    return true;
  }
  return false;
});

const alert = (open, textMsg, typeAlert, vertical, horizontal)=> {
  setState({
    open: open,
    textMsg: textMsg,
    typeAlert: typeAlert,
    vertical: vertical,
    horizontal: horizontal,
  });
}

const handleClose = () => {

  setState({ ...state, open: false });

};


  return (
    <Container 
      maxWidth="md" 
      style={{marginTop:"1em"}} >
      <Form addTodoItem={addTodoItem} isFound={isFound} alert={alert} />
      <AlertSnack 
           open={state.open}
           typeAlert={state.typeAlert}
           textMsg={state.textMsg}
           handleClose={handleClose} 
           vertical ={state.vertical}
           horizontal={state.horizontal}
      />
      <TodoList 
       todos={todos}
       deleteTodoItem={deleteTodoItem}
       editTodoItem={editTodoItem} 
       isFound={isFound}
       alert={alert}  
      />
      
     
    </Container>
  );
}

