import {EDIT_ID, EDIT_NAME} from "../actions/document";

export function document(state = [], action){
    switch (action.type){
        case  EDIT_ID:
            return {
                ...state,
                id: action.payload
            };
        case EDIT_NAME :
            return {
                ...state,
                name: action.payload
            };
        default :
            return {id:1};
    }
}
