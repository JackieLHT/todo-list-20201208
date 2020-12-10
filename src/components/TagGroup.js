import React, { Component } from 'react';
import { getTags } from '../apis/todos'
import '../tags.css'

class TagGroup extends Component {
    componentDidMount() {
        getTags().then((response) => {
            this.props.initTag(response.data);
        })
    }

    render() {
        return (

            this.props.tags.map((tag) => {
                return <div className="tagListItem" style={{ backgroundColor: tag.color }}>{tag.text}</div>
            })

        );
    }
}

export default TagGroup;