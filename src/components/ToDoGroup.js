import React, { Component } from 'react';
import ToDoItemContainer from '../containers/ToDoItemContainer'
import { v4 as uuidv4 } from 'uuid'

class ToDoGroup extends Component {

    render() {
        return (
            this.props.toDoList.map(toDoItem => {
                return <ToDoItemContainer key={uuidv4()} toDoItem={toDoItem} />
            })
        );
    }
}

export default ToDoGroup;