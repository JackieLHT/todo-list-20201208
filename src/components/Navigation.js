import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom'

class Navigation extends Component {
    render() {
        return (
            <Menu mode="horizontal">
                <Menu.Item key="todo">
                    <Link to="/">Todo List</Link>
                </Menu.Item>
                <Menu.Item key="done" >
                    <Link to="/done">Done List</Link>
                </Menu.Item>
                <Menu.Item key="tags">
                    <Link to="/tags">Edit Tags</Link>
                </Menu.Item>
            </Menu>
        );
    }
}

export default Navigation;