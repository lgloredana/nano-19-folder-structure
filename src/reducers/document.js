import {EDIT_ID, EDIT_NAME, EDIT_SUB_NAME} from "../actions/document";

export function document(state = [], action){
    switch (action.type){
        case  EDIT_ID:
            const newState = new Object();
            newState.subName = state.subName;
            newState.name = state.name;
            newState.id = action.payload;
            return newState;
        case EDIT_NAME :
            return {
                ...state,
                name: action.payload
            };
        case EDIT_SUB_NAME :
            return {
                ...state,
                subName: action.payload
            };
        default :
            return {id:1};
    }
}
