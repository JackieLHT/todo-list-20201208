import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom'

class Navigation extends Component {
    render() {
        return (
            <Menu mode="horizontal">
                <Menu.Item key="mail">
                    <Link to="/">go to list</Link>
                </Menu.Item>
                <Menu.Item key="app" >
                    <Link to="/done">go to done list</Link>
                </Menu.Item>
            </Menu>
        );
    }
}

export default Navigation;