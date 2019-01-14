import React from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import ConnectedTodos from './Todos'
import ConnectedGoals from './Goals'

class App extends React.Component {
    componentDidMount () {
        const { dispatch } = this.props;
        dispatch(handleInitialData());
    }

    render () {
        return (
            this.props.loading
                ? <h1>Loading</h1>
                : <div>
                    <ConnectedTodos/>
                    <ConnectedGoals/>
                </div>
        )
    }
}

export default connect((state) => ({
    loading: state.loading
}))(App);