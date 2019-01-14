import API from "goals-todos-api";

export const RECEIVE_DATA = 'RECEIVE_DATA';

function receiveDataAction(todos, goals) {
    return {
        type: RECEIVE_DATA,
        todos,
        goals
    }
}

export function handleInitialData(){
    return (dispatch) => {
        Promise.all([
            API.fetchGoals(),
            API.fetchTodos()
        ]).then(([goals, todos])=> {
            dispatch(receiveDataAction(todos, goals));
        });
    }
}
