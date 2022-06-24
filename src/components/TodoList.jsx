import React from 'react';
import Item from './Item';

class TodoList extends React.Component {
	render(){
		return (
			<div className="w-full grid justify-items-center mt-6">
      	<Item text={"Hello"} />
      </div>
		)
	}
}

export default TodoList;