export function userReducer(state = {fetching:false}, action) {
  switch (action.type) {
    case "INIT_SHOWLOAD":
        return {fetching:true}
    case "RENDER_LIST":
        return {
          fetching:false,
          userList:action.userList
        }
    default:
        return state
  }
}