import { connect } from "react-redux"
import { initListAction } from "../actions/userAction"
import UserList from "../components/UserList"

const mapStateToProps = (state, ownProps) =>({
    isShowLoading:state.fetching,
    userList:state.userList
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    initList:()=>{
        dispatch(initListAction())
    }
})

const userListContainer = connect(mapStateToProps, mapDispatchToProps)(UserList)

export default userListContainer