import React, {Component} from 'react'

class ToDoInput extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            task : ""
        }
    }

    handleSubmit = (event) => {        
        event.preventDefault();

        if(this.state.task !== "") {
            this.props.handleAdd(this.state);
            this.setState({
                    task : ""
            });
        }   
    }

    handleChange = (event) => {
        event.preventDefault();
        let is_empty = false;

        if(event.target.value !== "") {
            this.setState({
                task : event.target.value
            });
        } else {
            is_empty = true;
        }  

        // on change event saves last input value
        // what if he typed, then cleared? 
        // without code below, it will stil add to do 
         
        if(is_empty) {
            this.setState({
                task : event.target.value
            });
        }
    }
    

    render() {
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                           onChange={this.handleChange}
                           placeholder="set a task..."
                           id="input" 
                           defaultValue={this.props.user_input}
                           ref={this.input}
                           />
                </form>
            </div>
        )
    }
    
}

export default ToDoInput 