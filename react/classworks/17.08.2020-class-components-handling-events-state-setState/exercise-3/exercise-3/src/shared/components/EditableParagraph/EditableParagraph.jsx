import React, {Component} from 'react';
import "./EditableParagraph.css";
import Input from "../Input";

import {field} from "./field";

class EditableParagraph extends Component {
    state = {
        text: this.props.text,
        newText: "",
        edit: false
    };

    handleEdit = () => {
        this.setState({
            edit: true
        });
    };

    handleSave = () => {
        const {newText} = this.state;
        this.setState({
            edit: false,
            text: newText
        });
    };

    handleEditCancel = () => {
        this.setState({
            edit: false,
            newText: ""
        });
    };

    handleChange = ({target}) => {
        this.setState({
            newText: target.value
        });
    };

    render() {
        const {edit, text, newText} = this.state;
        const {handleEdit, handleSave, handleEditCancel, handleChange} = this;
        let content = "";
        if(edit) {
            const value = (newText) ? newText : text;
            content = <>
                        <Input {...field} value={value} handleChange={handleChange} />
                        <span className="action-link" onClick={handleSave}>
                            Save
                        </span>
                        <span className="action-link" onClick={handleEditCancel}>
                            Cancel
                        </span>
                    </>;
        }
        else {
            content = <>
                        <p className="content-text">{text}</p>
                        <span className="action-link" onClick={handleEdit}>Edit</span>
                        </>
        }
        return (
            <div className="editable-paragraph">
                {content}
            </div>
        )
    }
}

export default EditableParagraph;