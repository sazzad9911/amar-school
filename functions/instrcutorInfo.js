const initialState=null;
const instructorInfo=(state=initialState,action)=>{
    if(action.type=="SET_INSTRUCTOR"){
        return action.playload;
    }
    return state
}
export default instructorInfo
export const setInstructorInfo=(value)=>{
    return{
        type:"SET_INSTRUCTOR",
        playload:value
    }
}