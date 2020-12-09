import React, { Component } from 'react';
import { addNewTodo } from '../apis/todos';

class ToDoGenerator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ""
        }

    }

    addToDoItem = (event) => {
        let toDoItem = { text: this.state.text, done: false }
        addNewTodo(toDoItem).then((response) => {
            this.props.addToDo(response.data);
        })
    }

    handleKeyDown = (event) => {
        if (event.key === "Enter") {
            this.addToDoItem();
        }
    }

    onChange = (event) => {
        this.setState({ text: event.target.value })
    }

    render() {
        return (
            <div>
                <input id="text" type="text" placeholder="Add some todos here" value={this.state.text} onChange={this.onChange} style={{width:500}}/>
                <input type="button" value="add" onClick={this.addToDoItem} />
            </div>
        );
    }
}

export default ToDoGenerator;