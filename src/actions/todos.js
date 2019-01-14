import API from 'goals-todos-api';

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

function addTodo(todo) {
    return {
        type : ADD_TODO,
        todo
    }
}

function deleteTodo(id) {
    return {
        type: REMOVE_TODO,
        id
    }
}

function toggleTodo(id) {
    return {
        type: TOGGLE_TODO,
        id
    }
}


//action creators
export function handleAddTodo(todoName, cb) {
    return (dispatch) => {
        API.saveTodo(todoName)
            .then((todo) => {
                dispatch(addTodo(todo));
                cb();
            })
            .catch(() => {
                alert("There was an error on adding a todo. Try again!");
            })
    };
}
export function handleDeleteTodo(todo) {
    return (dispatch) => {
        dispatch(deleteTodo(todo.id));
        return API.deleteTodo(todo.id)
            .catch(() => {
                alert('Error on deleting. Try again!');
                dispatch(addTodo(todo));
            });
    }
}
export function handleToggleTodo(id){
    return (dispatch) => {
        dispatch(toggleTodo(id));
        return API.saveTodoToggle(id)
            .catch(() => {
                dispatch(toggleTodo(id));
                alert("Toggle Error. Try again!");
            });
    }
}
