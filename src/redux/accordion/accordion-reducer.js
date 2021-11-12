import AccordionTypes from "./acordion-type";

const INITIAL_STATE = {
    hidden: true,
}

const AccordionReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case AccordionTypes.SET_TOGGLE_ACCORDION:
            return {
                ...state,
                hidden: !state.hidden,
            }
        default:
            return state
    }
}

export default  AccordionReducer;