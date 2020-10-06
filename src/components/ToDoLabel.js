import React, {Component} from 'react'
import ToDoInput from './ToDoInput'

class ToDoLabel extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            to_edit : false
        }
    }

    handleUpdate = (new_text_value) => {
        this.props.handleEdit(this.props.todo.id, new_text_value);
        this.setState({ to_edit : false });
    }

    show_edit_field = () => {
        return(
            <div className="container center">
                <ToDoInput handleAdd={this.handleUpdate}/>  
                <button className="teal btn" onClick={()=>{this.setState({ to_edit : false })}}> back </button>              
            </div>
        )
    }

    render() {
        return (
            <div className="collection-item">
                 <span> {this.props.todo.task} </span>
                 <div  className="right red btn" onClick={() => {this.props.handleDelete(this.props.todo.id)}}>delete</div>
                 <span onClick={() => {this.setState({to_edit : true})}} className="right teal btn">edit</span>
                 {this.state.to_edit && (this.show_edit_field())}
            </div>
        )
    }
}

export default ToDoLabel