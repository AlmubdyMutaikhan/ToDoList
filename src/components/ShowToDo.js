import React, {Component} from 'react'
import './style.css'
import ToDoLabel from './ToDoLabel'

class ShowToDo extends Component {
    
    show_tasks = () => {
        return(
        this.props.todo_set.length ? (
        this.props.todo_set.map(todo => {
            return (
                    <ToDoLabel className="collection-item" todo={todo} key={todo.id} handleDelete={this.props.handleDelete} handleEdit={this.props.handleEdit}/>
            )
        })
    ) : (   
            this.props.is_first ? (<p className="center collection-item"> High time to start </p>) : (<p className="center colection-item">You did an amazing work!</p>)
        )
        )
    }
    render() {
        return (
                <div className="collection container">
                    {this.show_tasks()}
                </div>
        )
    }
}

export default ShowToDo