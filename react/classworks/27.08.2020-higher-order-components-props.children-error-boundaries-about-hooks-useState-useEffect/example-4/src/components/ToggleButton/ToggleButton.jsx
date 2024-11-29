import React, {Component} from 'react';
import "./ToggleButton.css";

class ToggleButton extends Component {
    state = {
        active: false
    };

    onToggle = () => {
        this.setState(({active}) => {
            return {
                active: !active
            }
        })
    };

    render() {
        const {active} = this.state;
        const {text} = this.props;
        const className = (active) ? "btn active" : "btn";

    return <button onClick={this.onToggle} className={className}>{text}</button>
    }
}

export default ToggleButton;