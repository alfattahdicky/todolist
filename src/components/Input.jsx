import React from 'react';
import ReactDOM from 'react-dom'
import Item from './Item';

class Input extends React.Component { 
	constructor(props) {
		super(props)
		
		this.state = {todoItem: "", todoList: []}
	}

	handleInputChange(event) {
		const value = event.target.value;
		console.log(value);
		this.setState({todoItem: value});
	}

	handleClickAdd() { 
		if(this.state.todoItem == "") {
			console.log('Tidak boleh kosong');
		}else {
			this.state.todoList.push(
				<Item key={this.state.todoList.length} text={this.state.todoItem} />
			);

			this.setState = {todoList: this.state.todoList};

			console.log(this.state.todoList)
		}

	}

  render() { 
    return (
			<div className="mt-6 flex items-center gap-3">
				<div className="w-full bg-white py-2 drop-shadow-md rounded-lg">
					<input type="text" className="w-full text-md outline-none pl-4" 
					placeholder="Masukkan Item" value={this.state.todoItem} 
					onChange={(event) => {this.handleInputChange(event)}} />	
				</div>
				<button className="bg-white drop-shadow-md rounded-lg p-2 
				hover:bg-gray-200" onClick={() => {this.handleClickAdd()}} >Tambah</button>

				<div>
					{this.state.todoList.map(todo => {
						return (
							<div>{todo}</div>
						)
					})}
				</div>
			</div>
    );
  }
}
export default Input;

