import React from 'react'
import { connect } from 'react-redux'
import {editSubName} from "../actions/document";

class EditSubNameView extends React.Component{
    counter = 0;
    editSubName = (e) => {
        e.preventDefault();
        this.props.editDocSubNameHandler(this.inputEditSubNAME.value)
    };
    render(){
        this.counter++;
        console.log(`--------------------render SUB name view = ${this.counter}--------------------`);
        return(
            <div>
                <h1>Edit SUB NAME Container</h1>
                ---- This is the new value : <b>{this.props.docSubNAME}</b> <br/>
                ----- <input
                    type="text"
                    placeholder="---Edit SUB Name---"
                    ref={(input) => this.inputEditSubNAME = input}
                />
                <button onClick={this.editSubName}>EditID</button>
            </div>
        )
    }
}
export const mapStateToProps = (state) => ({docSubNAME:state.document.subName});
export const mapDispatchToProps = (dispatch) => ({editDocSubNameHandler: (subName) => dispatch(editSubName(subName))});
export default connect( mapStateToProps, mapDispatchToProps)(EditSubNameView);
