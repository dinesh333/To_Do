import React, { Component } from 'react';

class ToDoItem extends Component{
	constructor(props){
		super(props);
		this.removeToDoById = this.removeToDoById.bind(this);
	}

	removeToDoById(idRemove){
		this.props.removeItem(idRemove);
	}

	render(){
		return(
			<div className="ToDoItem">
				<strong>{this.props.count + '. '}</strong> {this.props.toDoText + ' '}
				<button onClick={() => this.removeToDoById(this.props.id)}>x</button>
			</div>
		);
	}
}

export default ToDoItem;