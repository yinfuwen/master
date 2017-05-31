// 导航组件
import React ,{Component} from "react";
import {Link} from "react-router";

class Nav extends Component {
    render(){
        return <div>
                    <div>
                        {/*<IndexLink to="/" activeClassName="nav-active">首页</IndexLink>*/}
                        {/*<Link activeClassName="nav-active" to="/" onlyActiveOnIndex="true">首页</Link>*/}
                        <Link activeClassName="nav-active" to="/home">首页</Link>
                        <Link activeClassName="nav-active" to="/user">用户管理</Link>
                        <Link activeClassName="nav-active" to="/about">关于</Link>
                    </div>
                    {this.props.children}
                </div>
    }
}
export default Nav;