import {combineReducers} from "redux";
import AccordionReducer from "./accordion/accordion-reducer";


export default combineReducers({
    accordionHidden: AccordionReducer,
})