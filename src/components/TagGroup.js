import React, { Component } from 'react';
import { getTags } from '../apis/todos'
import api from '../apis/api';

class TagGroup extends Component {
    componentDidMount() {
        getTags().then((response) => {
            this.props.initTag(response.data);
        })
    }

    render() {
        return (
            <ul>
                {
                    this.props.tags.map((tag) => {
                        return <li>{tag.text}</li>
                    })
                }
            </ul>
        );
    }
}

export default TagGroup;