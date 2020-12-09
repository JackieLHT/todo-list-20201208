import React, { Component } from 'react';
import ToDoItemContainer from '../containers/ToDoItemContainer';
import { v4 as uuidv4 } from 'uuid'

class DoneList extends Component {
    render() {
        return (
            this.props.doneList.map(doneItem => {
                return <ToDoItemContainer key={uuidv4()} toDoItem={doneItem} />
            })
        );
    }
}

export default DoneList;