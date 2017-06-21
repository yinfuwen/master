const pageConfig= {
    pageSize:5,
    currPage:1
}

export function initListAction(currPage=pageConfig.currPage) {
    return dispatch => {
        dispatch({type:"INIT_SHOWLOAD"})
        return  fetch(`http://localhost/api.php/user/userlist?transform=1&page=${currPage},${pageConfig.pageSize}&order=id,desc`)
                .then(response=>response.json())
                .then(json=>{
                    let pageArr=new Array(Math.ceil(json._results/pageConfig.pageSize)).fill(0)
                    let lastPageSize=json._results%pageConfig.pageSize||pageConfig.pageSize
                    dispatch({type:"RENDER_LIST",userList:json.userlist,pageNumb:pageArr,currPage:currPage,lastPageSize:lastPageSize,pageSize:pageConfig.pageSize})
                })

    }
}

export function saveUserData(user,currPage){
    let url = 'http://localhost/api.php/user/userlist'
    let method = 'POST'
    let userId = user.id
    let defaultCurrPage=1
    if(user.id){
        url += "/"+userId
        method = "PUT"
        defaultCurrPage=currPage
    }
    return dispatch => {
        dispatch({type:"INIT_SHOWLOAD"})
        return fetch(url,{
                method:method,
                body:JSON.stringify(user)
            })
            .then(response=>response.json())
            .then(json=>{ 
                dispatch(initListAction(defaultCurrPage))
            })
    }
} 

export function deleteUserAction(ids, currPage){
    return dispatch => {
        dispatch({type:"INIT_SHOWLOAD"})
        return fetch(`http://localhost/api.php/user/userlist/${ids}`,{method:"DELETE"})
                .then(response=>response.json())
                .then(json=>{
                    dispatch({type:"DELETE_SUCCESS"})
                    dispatch(initListAction(currPage))
                })
    }
}