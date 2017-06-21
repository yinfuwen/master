import React from "react"
import Dialog from "../containers/dialogContainer"
import Alert from "../containers/alertContainer"

const Menu = ({userIds, onAddUpdateClk, onDeleteClk}) =>(
    <div>
        <div className="btn-group mg_b20" role="group">
            <button onClick={onAddUpdateClk.bind(this,true)} type="button" className="btn btn-primary">增加</button>
            <button onClick={onAddUpdateClk.bind(this,false,userIds)} type="button" className="btn btn-warning">修改</button>
            <button onClick={onDeleteClk.bind(null,userIds)} type="button" className="btn btn-danger">删除</button>
        </div>
        <Dialog />
        <Alert />
    </div>
    
)

export default Menu