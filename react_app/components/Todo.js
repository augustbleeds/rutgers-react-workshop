import React from 'react';

function Todo(props){
  if(props.isCompleted){
      return <li> <input type="radio" checked={props.isCompleted} onClick={() => props.onCheck()} />  <strike> {props.name} </strike>  </li>;
  }
  return <li> <input type="radio" checked={props.isCompleted} onClick={() => props.onCheck()} />  {props.name} </li>;
}

export default Todo;
