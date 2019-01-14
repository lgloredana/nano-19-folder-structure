import React from 'react'
import { connect } from 'react-redux'
import {
    handleAddTodo,
    handleDeleteTodo,
    handleToggleTodo
} from '../actions/todos'
import List from './List'

class Todos extends React.Component{
    addTodoItem = (e) => {
        e.preventDefault();
        this.props.dispatch(handleAddTodo(
            this.inputTodo.value,
            () => {this.inputTodo.value = '';})
        );
    };
    removeTodo = (todo) => {
        this.props.dispatch(handleDeleteTodo(todo));
    };
    toggleTodo = (id) => {
        this.props.dispatch(handleToggleTodo(id))
    };
    render(){
        return(
            <div>
                <h1>Todo List</h1>
                <input
                    type="text"
                    placeholder="Add Todo"
                    ref={(input) => this.inputTodo = input}
                />
                <button onClick={this.addTodoItem}>Add Todo</button>
                <List items={this.props.todos} removeItem={this.removeTodo} toggle={this.toggleTodo} />
            </div>
        )
    }
}

export default connect( (state) => ({
    todos: state.todos
}))(Todos);

