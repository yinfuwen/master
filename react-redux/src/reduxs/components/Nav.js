import React from "react"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Nav = () =>(
<nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li className="active"><a href="#">主页</a></li>
        <li><a href="#">用户管理</a></li>
        <li><a href="#">关于 </a></li>
      </ul>
    </div>
  </div>
</nav>
)

export default Nav