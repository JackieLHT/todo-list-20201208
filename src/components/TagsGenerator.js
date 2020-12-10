import React, { Component } from 'react';
import { Button, Input } from 'antd';
import { addTags } from '../apis/todos'
import '../tags.css'

class TagsGenerator extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tag: {
                text: '',
                color: ''
            },
        }
    }

    addTag = () => {
        addTags(this.state.tag).then((response) => {
            this.props.addTag(response.data);
        })

    }

    onChange = (event) => {
        this.setState({ tag: { ...this.state.tag, text: event.target.value } })
    }

    render() {
        return (
            <div className="tagGenerator">
                <Input type="text" placeholder="Add some tags here" onChange={this.onChange} style={{ width: 500 }} />
                <Button onClick={this.addTag}>Add Tag</Button>
            </div>
        );
    }
}

export default TagsGenerator;