import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid'

class ToDoGenerator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ""
        }

    }

    addToDoItem = (event) => {
        let toDoItem = { id: uuidv4(), text: this.state.text, done: false }
        this.props.addToDo(toDoItem);
    }

    onChange = (event) => {
        this.setState({ text: event.target.value })
    }

    render() {
        return (
            <div>
                <input id="text" type="text" value={this.state.text} onChange={this.onChange} />
                <input type="button" value="add" onClick={this.addToDoItem} />
            </div>
        );
    }
}

export default ToDoGenerator;