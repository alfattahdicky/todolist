import React from 'react'
import '../index.css'
import Input from './Input';

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
      <div className="h-screen bg-slate-100">
        <div className="max-w-full grid justify-items-center pt-12">
          <h1 className="text-orange-500 text-3xl font-bold">Todolist</h1>
          <Input />
			  </div>
      </div> 
    );    
  };
}

export default App
