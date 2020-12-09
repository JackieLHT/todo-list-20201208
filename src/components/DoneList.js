import React, { Component } from 'react';

class DoneList extends Component {
    render() {
        return (
            <ul>
                {this.props.doneList.map(item => <li>{item.text}</li>)}
            </ul>
        );
    }
}

export default DoneList;