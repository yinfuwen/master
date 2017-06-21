import React from "react"
import Nav from "./Nav"
import Menu from "../containers/handleMenuContainer"
import UserList from "../containers/userListContainer"
import "./css/public.css"

const User = () =>(
    <div>
        <Nav />
        <div className="mg_020">
            <Menu />
            <UserList />
        </div>
    </div>
)

export default User
