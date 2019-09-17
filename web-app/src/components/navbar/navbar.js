import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from 'antd';
const { Header } = Layout;

class NavBar extends React.Component {
  render() {
    return (
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="home"><Link to="/">Home</Link></Menu.Item>
          <Menu.Item key="about"><Link to="/about/">About</Link></Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default NavBar;
