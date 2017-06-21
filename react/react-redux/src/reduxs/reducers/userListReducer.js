let dafaultState = {
    fetching:false,
    userList:[],
    currPage:1,
    pageNumb:[],
    dialogShow:false,
    alertShow:false,
    isDelete:false,
    userIds:[],
    userDatas:{},
    pageSize:0,
    lastPageSize:0,
    tipMsg:" "
}

export function userReducer(state = dafaultState, action) {
    switch (action.type) {
//显示loading
        case "INIT_SHOWLOAD":
            return {...state, fetching:true}
//渲染列表，关闭表单框，关闭loading
        case "RENDER_LIST":
            return {
                ...state,
                fetching:false,
                userList:action.userList,
                pageNumb:action.pageNumb,
                currPage:action.currPage,
                lastPageSize:action.lastPageSize,
                pageSize:action.pageSize,
                alertShow:false,
                dialogShow:false
            }
//新增用户
        case "ADD_USER":
            return {
                    ...state,
                    dialogTitleName:action.dialogTitleText,
                    dialogShow:true,
                    userDatas:{}
                }
//修改用户
        case "UPDATE_USER":
            return {
                ...state,
                dialogTitleName:action.dialogTitleText,
                dialogShow:true,
                // userDatas:userDatas
            }
//删除用户成功            
        case "DELETE_SUCCESS":
            return {
                ...state,
                userIds:[]
            }
//显示警告框
        case "SHOW_ALERT":
            return {
                ...state,
                tipMsg:action.tipMsg,
                isDelete:action.isDelete,
                alertShow:true
            }  
//分页跳页面
        case "JUMP_PAGE":
            return {
                ...state,
                userIds:[]
            }
//关闭表单
        case "CANCEL":
            return {
                ...state,
                isDelete:false,
                dialogShow:false,
                alertShow:false
            }
//勾选和取消勾选用户
        case "CHECKED_USER":
            // console.log(empty)
            return {
                ...state,
                userIds:action.userIds
            }

        default:
            return state
    }
}