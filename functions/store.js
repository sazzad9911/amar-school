import { combineReducers,createStore } from "redux";
import categories from "./categories";
import instructorInfo from "./instrcutorInfo";
import userInfo from "./userInfo";

const combine=combineReducers({
    userInfo:userInfo,
    instructorInfo:instructorInfo,
    categories:categories
})
const store=createStore(combine)
export default store;