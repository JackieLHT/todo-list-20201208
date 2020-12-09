import React, { Component } from 'react';
import { Card, Col, Row, Button } from 'antd';
import { Input } from 'antd';
import { addTag } from '../actions';

class TagGenerator extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tagText: ""
        }
    }

    onChange = (event) => {
        this.setState({ tagText: event.target.value })
    }

    onClick = () => {
        this.props.addTag({ todoItem: this.props.todoItem, tag: this.state.tagText })
    }

    render() {
        return (
            <div>
                <Row gutter={16}>
                    <Col span={8}>
                        <Card title="Add Tags" bordered={false}>
                            <Input placeholder="urgent" onChange={this.onChange} />
                            <Button onClick={this.onClick}>Add</Button>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default TagGenerator;