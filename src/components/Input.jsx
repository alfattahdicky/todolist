import React from 'react';

class Input extends React.Component { 
  render() { 
    return (
    	<div className="mt-6 flex items-center gap-3">
    		<div className="w-56 bg-white py-2 drop-shadow-md rounded-lg">
    			<input type="text" className="w-full text-md outline-none pl-4" 
    			placeholder="Masukkan Item" />	
    		</div>
    		<button className="bg-white drop-shadow-md rounded-lg p-2 hover:bg-gray-200">Tambah</button>
    	</div>
    );
  }
}
export default Input;

