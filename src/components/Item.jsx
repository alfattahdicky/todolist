import React from 'react';
import checklist from '../assets/checklist.png';
import edit from '../assets/edit.png';
import deleteIcon from '../assets/delete.png';

class Item extends React.Component {
	render() {
		return (
			<div className="card w-2/5 mt-8 bg-white shadow-md rounded-lg">
				<div className="card-inner px-4 py-3 flex items-center justify-between">
					<p>{this.props.text}</p>
					<div className="flex items-center gap-2">
							<img className="w-6 h-6 bg-cover cursor-pointer hover:scale-90" src={checklist} alt="Check"
								onClick={() => {console.log('hello')}} />
							<img className="w-6 h-6 bg-cover cursor-pointer hover:scale-90" src={edit} alt="Edit" />
							<img className="w-6 h-6 bg-cover cursor-pointer hover:scale-90" src={deleteIcon} alt="Delete" />
					</div>
				</div>
			</div>	
		)
	}
}

export default Item;