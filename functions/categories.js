const initialState=null;
const categories=(state=initialState,action)=>{
    if(action.type=="SET_CATEGORIES"){
        return action.playload
    }
    return state;
}
export default categories

export const setCategories=(value)=>{
    return{
        type:"SET_CATEGORIES",
        playload:value
    }
}