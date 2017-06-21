import React ,{Component} from "react"
import Loading from "./Loading"
import PaginationContainer from "../containers/paginationContainer"

class UserList extends Component {
    componentDidMount(){
        let {initList}=this.props
        initList()
    }
    render(){
        let {isShowLoading, userList, userIds,checkedChange}=this.props
        return   <div>  
                    <table className="table table-bordered table-hover table-responsive">
                        <thead>
                            <tr>
                                <th className="width30"><input type="checkbox"/></th>
                                <th>姓名</th>
                                <th>年龄</th>
                                <th>电话</th>
                                <th>爱好</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userList.map((user,index)=>(
                                    <tr key={user.id}>
                                        <td><input onClick={checkedChange.bind(null,user.id, userIds)} type="checkbox"/></td>
                                        <td>{user.name}</td>
                                        <td>{user.age}</td>
                                        <td>{user.mobile}</td>
                                        <td>{user.hobbies}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <PaginationContainer/>
                    <Loading isShowLoading={isShowLoading}/>
                </div>
    }
}

export default UserList