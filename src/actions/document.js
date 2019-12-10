export const EDIT_ID = 'EDIT_ID';
export const EDIT_NAME = 'EDIT_NAME';

export function editId(id) {
    return {
        type : EDIT_ID,
        payload: id
    }
}

export function editName(name) {
    return {
        type : EDIT_NAME,
        payload: name
    }
}

