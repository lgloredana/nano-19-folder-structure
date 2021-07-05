import React from 'react'
import { connect } from 'react-redux'
import List from './List'
import {EDIT_ID, editId} from "../actions/document";

class EditIdView extends React.Component{
    counter = 0;
    editID = (e) => {
        e.preventDefault();
        this.props.editDocIdHandler(this.inputEditID.value)
    };
    render(){
        this.counter++;
        console.log(`--------------------render id view = ${this.counter}--------------------`);
        return(
            <div>
                <h1>Edit ID Container</h1>
                This is the new value : <b>{this.props.docID}</b> <br/>
                <input
                    type="text"
                    placeholder="Edit Id"
                    ref={(input) => this.inputEditID = input}
                />
                <button onClick={this.editID}>EditID</button>
            </div>
        )
    }
}
export const mapStateToProps = (state) => ({docID:state.document.id});
export const mapDispatchToProps = (dispatch) => ({editDocIdHandler: (id) => dispatch(editId(id))});
export default connect( mapStateToProps, mapDispatchToProps)(EditIdView);
