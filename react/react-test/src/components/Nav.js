// 导航组件
import React, { Component } from "react";
import { Link } from "react-router";
import { Layout, Menu, Icon,Button } from 'antd';

// import "../../node_modules/antd/dist/antd.css";
import "../css/nav.css";
const { Header, Sider, Content } = Layout;

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        }
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    render() {
        return <Layout>
            <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                <div className="logo"></div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <Link to="/home" activeClassName="nav-active">
                            <Icon type="home" />
                            <span className="nav-text">首页</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/user" activeClassName="nav-active">
                            <Icon type="schedule" />
                            <span className="nav-text">用户管理</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/about" activeClassName="nav-active">
                            <Icon type="question-circle-o" />
                            <span className="nav-text">关于我们</span>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header style={{ background: '#fff', padding: 0 }}>
                    <Icon className="trigger" type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.toggle} />
                    <Button.Group style={{"float":"right","right":5}}>
                        <Button type="primary">新增</Button>
                        <Button type="primary">修改</Button>
                        <Button type="danger">删除</Button>
                    </Button.Group>
                </Header>
                <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                    {this.props.children}
                </Content>
            </Layout>
        </Layout>
    }
}
export default Nav;