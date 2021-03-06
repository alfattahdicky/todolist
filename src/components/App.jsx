import React from 'react'
import '../index.css'
import Input from './Input';
import TodoList from './TodoList';
import Item from './Item'; 

class App extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			todoItem: "", 
			todoList: []
		}
  }

  render() {
    return (
      <div className="h-screen bg-slate-100">
        <div className="max-w-full grid justify-items-center pt-12">
          <h1 className="text-orange-500 text-3xl font-bold">Todolist</h1>
          <Input todoItem={this.state.todoItem} 
          	todoList={this.state.todoList} />	
          <TodoList todoList={this.state.todoList} />
			  </div>
      </div> 
    );    
  };
}

export default App
