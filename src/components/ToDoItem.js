import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid'

class ToDoItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            done: this.props.done
        }
    }
    toggleStatus = () => {
        this.setState({ done: !this.state.done });
    }

    delete = () => {
        this.props.deleteToDo(this.props.id)
    }
    render() {
        return (
            <div>
                <input
                    style={{
                        width: 600,
                        textAlign: 'left',
                        textDecoration: this.state.done ? 'line-through' : 'none',
                    }}
                    type="button"
                    key={this.props.id}
                    onClick={this.toggleStatus}
                    value={this.props.text} />
                <input
                    type="button"
                    value="x"
                    onClick={this.delete}
                    style={{
                        width: 30,
                        marginLeft: -30,
                        backgroundColor: "transparent",
                        border: "none"

                    }} />
            </div>
        );
    }
}

export default ToDoItem;