import React, {useState} from 'react';


export const TodoForm: React.FC = () => {

  
  return (
    <div className="input-field mt2">
      <input type="text" id="title" placeholder=' task'/>
      <label htmlFor="title" className="active">
      Enter task:
      </label>
    </div>
  )
}
