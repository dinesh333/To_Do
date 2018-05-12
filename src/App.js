import React, { Component } from 'react';
import './App.css';
import ToDoInputBox from './components/ToDoInputBox.js';
import ToDoItem from './components/ToDoItem.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      allToDos : []
    }
    this.addToDo = this.addToDo.bind(this);
    this.nextId = this.nextId.bind(this);
    this.removeToDo = this.removeToDo.bind(this);
  }

  addToDo(newToDoText){
    var allToDos = this.state.allToDos;
    allToDos.push({id : this.nextId(), toDoText : newToDoText});
    this.setState({
      allToDos : allToDos
    });
  }

  nextId(){
    this.uniqueId = this.uniqueId || 0;
    return ++this.uniqueId;
  }

  removeToDo(idRemove){
    var allToDos = this.state.allToDos;
    allToDos = allToDos.filter(item => item.id !== idRemove);
    this.setState({
      allToDos : allToDos
    });
  }

  render() {
    var count = 0;
    return (
      <div className="App">
        <h1>To-Do List</h1>
        <ToDoInputBox toDoText='' addToDo={this.addToDo}/>
        <ul>
          {
            this.state.allToDos.map(item => {
              count = count + 1;
              return <ToDoItem id={item.id} toDoText={item.toDoText} count={count} removeItem={this.removeToDo}></ToDoItem>
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
