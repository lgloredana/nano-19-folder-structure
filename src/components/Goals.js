import React from 'react'
import { connect } from 'react-redux'
import {
    handleAddGoal,
    handleRemoveGoal
} from '../actions/goals'
import List from './List'

class Goals extends React.Component{
    addGoalItem = (e) => {
        e.preventDefault();
        this.props.dispatch(handleAddGoal(
            this.inputGoal.value,
            () => {this.inputGoal.value = ''}
        ));
    };
    removeGoal = (goal) => {
        this.props.dispatch(handleRemoveGoal(goal));
    };
    render(){
        return(
            <div>
                <h1>Goals List</h1>
                <input
                    type="text"
                    placeholder="Add Goal"
                    ref={(input) => this.inputGoal = input}
                />
                <button onClick={this.addGoalItem}>Add Goal</button>
                <List removeItem = {this.removeGoal} items={this.props.goals}/>
            </div>
        )
    }
}

export default connect( (state) => ({
    goals: state.goals
}))(Goals);
