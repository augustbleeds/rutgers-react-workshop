import React from 'react';

class InputBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {text: ''}
  }

  handleInput(e){
    this.setState({text: e.target.value});
    console.log(e.target.value)
  }

  handleSubmit(){
    this.props.onSubmit(this.state.text);
    this.setState({text: ''});
  }

  render(){
    return (
      <div>
        <input
          type="text"
          onChange={(e) => this.handleInput(e)}
          value={this.state.text}
        />
        <button onClick={() => this.handleSubmit()}> Add to do </button>
      </div>
    );
  }
}

export default InputBar;
