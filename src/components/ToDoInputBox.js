import React, { Component } from 'react';

class ToDoInputBox extends Component {
	constructor(props){
		super(props);
		this.state = {
			inputBoxText : this.props.toDoText
		};
		this.showNewText = this.showNewText.bind(this);
		this.addToDo = this.addToDo.bind(this);
	}

	showNewText(event){
		this.setState({
			inputBoxText : event.target.value
		});
	}

	addToDo(inputBoxText){
		if(inputBoxText != ''){
			this.props.addToDo(inputBoxText);
		}else{
			alert('Please enter a to-do item');
		}

		//Empty out the textbox after entry
		this.setState({
			inputBoxText : ''
		});
	}

	render(){
		return(
			<div className="ToDoInputBox">
				<input type="text" value={this.state.inputBoxText} onChange={this.showNewText}></input>
				<button onClick={() => this.addToDo(this.state.inputBoxText)}>+</button>
			</div>

		);
	}
}

export default ToDoInputBox;