import React from 'react'
import '../index.css'
import Header from './Header';

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
			<div>
				<Header 
					name = "Dicky"
				/>
				<p>{this.state.count}</p>
				<button onClick={() => {this.handleCount()}}>tambah</button>
			</div>
    );    
  };
}

export default App
