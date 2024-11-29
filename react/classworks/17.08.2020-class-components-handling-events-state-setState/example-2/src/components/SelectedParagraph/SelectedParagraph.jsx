import React, {Component} from 'react';
import "./SelectedParagraph.css";

class SelectedParagraph extends Component {
    /*
    constructor(props) {
        super(props);
        this.state = {

        };
        this.handleClick = () => {

        };
    }
    */
    state = {
        selected: false,
        font: "normal"
    };

    handleClick = () => {
        this.setState(({selected}) => {
            return {
                selected: !selected
            }
        });
        // Object.assign(this.state, {selected: newSelectedValue});
    };

    render() {
        const {text} = this.props;
        const {selected} = this.state;
        const activeClass = (selected) ? "selected" : "";
        return (
            <p className={`content-text ${activeClass}`} 
                onClick={this.handleClick}>
                {text}
            </p>
        )
    }
}

export default SelectedParagraph;