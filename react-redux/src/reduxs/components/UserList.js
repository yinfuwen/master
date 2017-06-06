import React ,{Component}from "react"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

class UserList extends Component {
    componentDidMount(){
        let {initList}=this.props
        initList();
        // console.log(this.props.initList())
    }
    render(){
        // console.log(this.props)
        let {isShowLoading,userList}=this.props
        
        return   <div>  
                    <table className="table table-bordered table-hover table-responsive">
                        <thead>
                            <tr>
                                <th>姓名</th>
                                <th>年龄</th>
                                <th>电话</th>
                                <th>爱好</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userList && userList.map((user,index)=>(
                                    <tr key={user.id}>
                                        <td>{user.name}</td>
                                        <td>{user.age}</td>
                                        <td>{user.mobile}</td>
                                        <td>{user.hobbies}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <div style={{'display': isShowLoading ? "block":"none"}}>我是loading。。。。</div>
                </div>
    }
}

export default UserList