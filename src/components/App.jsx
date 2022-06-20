import React from 'react'
import '../index.css'
import Input from './Input';
import Item from './Item';

class App extends React.Component {
  constructor(props) {
		super(props);
		this.state = {count: 0}
  }

  handleCount(){
		this.setState({count: this.state.count += 1});
  }

  render() {
    return (
			<div className="grid place-items-center mt-12">
				<h1 className="text-orange-500 text-2xl font-bold">Todolist</h1>
				<Input />
				<Item />
			</div>
    );    
  };
}

export default App
