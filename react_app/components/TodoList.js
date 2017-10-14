import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <ol>
        {this.props.data.map((t, i) => {
          return <Todo onCheck={() => this.props.toggle(i)} index={i} name={t.name} isCompleted={t.isCompleted}/>;
        })}
      </ol>
    );
  }
}

export default TodoList;
