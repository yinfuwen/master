import { connect } from "react-redux"
import { initListAction } from "../actions/userAction"
import UserList from "../components/UserList"

let data={
    userIds:new Set()
}

const mapStateToProps = (state, ownProps) =>({
    isShowLoading:state.fetching,
    userList:state.userList,
    userIds: state.userIds,
    userDatas:state.userDatas
})
const mapDispatchToProps = (dispatch, ownProps) => ({
    initList:()=>{
        dispatch(initListAction())
    },
    checkedChange:(currId, userIds, e)=>{
        let isChecked=e.target.checked
        if(!userIds.length){
            data.userIds.clear()
        }
        if(isChecked){
            data.userIds.add(currId)
        }else{
            data.userIds.delete(currId)      
        }
        dispatch({
            type:"CHECKED_USER",
            userIds:[...data.userIds]
        })
    }
})

const userListContainer = connect(mapStateToProps, mapDispatchToProps)(UserList)

export default userListContainer