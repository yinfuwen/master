export function initListAction() {
        return dispatch => {
            dispatch({type:"INIT_SHOWLOAD"})
            return  fetch('http://rapapi.org/mockjsdata/19309/rap/text.json')
                    .then(response=>response.json())
                    .then(json=>{
                        dispatch({type:"RENDER_LIST",userList:json.data.list,totals:json.data.total})
                    })

        }
}