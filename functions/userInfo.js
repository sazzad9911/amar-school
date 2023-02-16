const initialState=null;
const userInfo=(state=initialState,action)=>{
    if(action.type=="SET_USER_INFO"){
        return action.playload
    }
    if(action.type=="UPDATE_USER_INFO"){
        return {
            data:action.playload,
            meta:state.meta
        }
    }
    return state
}
export default userInfo

export const setUserInfo=(value)=>{
    return{
        type:"SET_USER_INFO",
        playload:value
    }
}
export const updateUserInfo=(data)=>{
    return{
        type:"SET_USER_INFO",
        playload:data
    }
}