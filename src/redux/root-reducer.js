import {combineReducers} from "redux";
import AccordionReducer from "./accordion/accordion-reducer";
import UserReducer from "./user/user-reducer";


export default combineReducers({
   // accordionHidden: AccordionReducer,
    setloginuser: UserReducer,
})