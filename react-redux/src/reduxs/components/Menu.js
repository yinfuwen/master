import React from "react"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Menu = () =>(
    <div className="btn-group" role="group" aria-label="...">
        <button type="button" className="btn btn-primary">增加</button>
        <button type="button" className="btn btn-warning">修改</button>
        <button type="button" className="btn btn-danger">删除</button>
    </div>
)

export default Menu