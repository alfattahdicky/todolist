import React from 'react';
import ReactDOM from 'react-dom'
import Item from './Item';

class Input extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			todoItem: ""
		}
	}

	handleInputChange(event) {
// 		this.setState((props) => {
// 			props.todoItem: event.target.value
// 		})
// 
// 		console.log(this.props.todoItem)
	}

	handleClickAdd() {
		// this.setState({
		// 	this.props.todoList: this.state.todoList.push(this.state.todoItem),
		// })
	}

	componentDidMount() {
		console.log(this.state.todoItem)
	}

	componentDidUpdate(prevProps, prevState) {
		console.log(nextProps);
	}

  render() {
    return (
  		<div className="mt-6 flex items-center gap-3">
				<div className="w-full bg-white py-2 drop-shadow-md rounded-lg">
					<input type="text" className="w-full text-md outline-none pl-4" 
					placeholder="Masukkan Item" value={this.props.todoItem} 
					onChange={(event) => {this.handleInputChange(event)}} />	
				</div>
				<button className="bg-white drop-shadow-md rounded-lg p-2 hover:bg-gray-200" 
					onClick={() => this.handleClickAdd()}>Tambah</button>
			</div>
    );
  }
}
export default Input;

