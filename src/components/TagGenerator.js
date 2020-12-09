import React, { Component } from 'react';
import { Card, Col, Row, Button } from 'antd';
import { Input } from 'antd';

class TagGenerator extends Component {
    render() {
        return (
            <div>
                <Row gutter={16}>
                    <Col span={8}>
                        <Card title="Add Tags" bordered={false}>
                            <Input placeholder="urgent" />
                            <Button>Add</Button>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default TagGenerator;