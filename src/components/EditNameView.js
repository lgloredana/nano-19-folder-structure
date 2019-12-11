import React from 'react'
import { connect } from 'react-redux'
import List from './List'
import {EDIT_ID, editId, editName} from "../actions/document";
import EditSubNameView from "./EditSubNameView";

class EditNameView extends React.Component{
    counter = 0;
    editName = (e) => {
        e.preventDefault();
        this.props.editDocNameHandler(this.inputEditNAME.value)
    };
    render(){
        this.counter++;
        console.log(`--------------------render name view = ${this.counter}--------------------`);
        return(
             <div>
                <h1>Edit NAME Container</h1>
                This is the new value : <b>{this.props.docNAME}</b> <br/>
                <input
                    type="text"
                    placeholder="Edit Name"
                    ref={(input) => this.inputEditNAME = input}
                />
                <button onClick={this.editName}>EditID</button>
                 <EditSubNameView/>
            </div>
        )
    }
}
export const mapStateToProps = (state) => ({docNAME:state.document.name});
export const mapDispatchToProps = (dispatch) => ({editDocNameHandler: (name) => dispatch(editName(name))});
export default connect( mapStateToProps, mapDispatchToProps)(EditNameView);
