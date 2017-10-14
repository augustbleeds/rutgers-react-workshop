import React from 'react';
import InputBar from './InputBar';
import TodoList from './TodoList';

class TodoApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [{name: 'Walk dog', isCompleted: false}, {name: 'Learn React', isCompleted: true}],
    };
  }

  add(todoName) {
    this.setState({
      data: this.state.data.concat({name: todoName, isCompleted: false})
    })
    console.log('add went')
  }

  toggleCompleted(i) {
    const newData = this.state.data.slice()
    console.log(newData[i].isCompleted)
    newData[i].isCompleted = !newData[i].isCompleted;
    this.setState({data: newData});
  }

  render(){
    return (
      <div>
        <InputBar onSubmit={(name) => this.add(name)} />
        <TodoList toggle={(i) => this.toggleCompleted(i)} data={this.state.data} />
      </div>
    );
  }
}

export default TodoApp;
