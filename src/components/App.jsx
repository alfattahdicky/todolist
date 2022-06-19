import React from 'react'
import '../index.css'

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
    		<h1>Hello World</h1>
      		<button onClick={() => {this.handleCount()}}>
      			{this.state.count}
      		</button>
    	</div>
    );    
  };
}

export default App
