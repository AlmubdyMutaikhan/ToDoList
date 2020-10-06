import './App.css';
import React, {Component} from 'react'
import ToDoInput from './components/ToDoInput'
import ShowToDo from './components/ShowToDo'

class App extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            todos : [
                 // {"task" : "<task_name>", "id" : 0}
            ],
            first_time : true,
            show_edit : false
        }
    }

    handleAdd = (todo) => {
        todo.id = this.state.todos.length;
        let new_set = [...this.state.todos, todo]
        this.setState({
            todos : new_set,
            first_time : false
        })    
    }

    handleEdit = (id, new_task) => {
        new_task.id = id
        let edited_arr = this.state.todos.map((todo) => ( todo.id === id ? new_task : todo ));
        this.setState({todos : edited_arr})
    }

    
    handleDelete = (id) => {
        let new_set = this.state.todos.filter(todo => {
            return todo.id !== id
        });

        this.setState({
            todos : new_set
        })
    }

    render() {
        return (
            <div className="container">
                <h1 className="center blue-text">To Do List</h1>
                <ToDoInput handleAdd={this.handleAdd}/>     
                <br/>      
                <ShowToDo  todo_set={this.state.todos} is_first={this.state.first_time} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>
            </div>
        )
    }
}


export default App


/*
    I have learnt:
    - how to change state of parent comp in child comp
    - handling events
    - arrow functions (doesnt have this object, so this here is the global object's this and etc) 
    - differences between functional and oop styling:
    - practiced JSX
*/