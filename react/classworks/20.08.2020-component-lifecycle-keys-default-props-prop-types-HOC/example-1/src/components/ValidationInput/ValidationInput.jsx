import React, { Component } from "react";

export class ValidationInput extends Component {

    // constructor(props) {
    //     if(ValidationInput.defaultProps) {
    //         if(ValidationInput.defaultProps.type && !props.type) {
    //             props.type = ValidationInput.defaultProps.type
    //         }
    //     }
    //     super(props)
    // }

    static defaultProps = {
        type: "text",
        required: true,
        reg: /[  ]{2}/,
        errorText: "GG WP"
    };

    state = {
        validate: true
    }

    handleBlur = ({ target }) => {
        const { value } = target;
        const { reg } = this.props;
        const result = reg.test(value);
        this.setState({ 
            validate: result 
        });
    }


    render() {
        const { className, errorText, reg, ...attr } = this.props;
        const fullClassName = `form-control ${className || ""}`;
    const error = !this.state.validate ? <p>{errorText}</p> : '' ;
        return (
        <>
            <input {...attr} className={fullClassName} onBlur={this.handleBlur} />
            {error}
        </>
        )
    }
}


