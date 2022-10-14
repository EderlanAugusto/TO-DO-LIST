import React from 'react';

import './styles.css';

 export function HeaderTodo({todos}){
  const tasksQuantity = todos.length;
  const completedTasks = todos.filter(task => task.check).length;
  return(
    <section className='sessiontasks'>
      <header className='header'>
      <div>
        <p className='textPurple'>Create Tasks</p>
        <span>{tasksQuantity}</span>
      </div>
      <div>
        <p className='textPurple'>Create Tasks</p>
        <span>{completedTasks} of {tasksQuantity}</span>
      </div>
      </header>      
    </section>
  );
 }
