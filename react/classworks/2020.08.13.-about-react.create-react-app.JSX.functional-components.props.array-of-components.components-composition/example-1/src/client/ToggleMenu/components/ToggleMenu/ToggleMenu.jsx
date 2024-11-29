import React, {Component} from 'react';
import ToggleMenuItem from "../toggleMenuItem";
import "./ToggleMenu.css";

class ToggleMenu extends Component {
    state = {
        activeItem: null
    }

    handleClick = (idx) => {
        this.setState({
            activeItem: idx
        })
    }

    render() {
        const {menuItems} = this.props;
        const {activeItem} = this.state;
        const menuItemsList = menuItems.map((item, index) => ({...item, active: index === activeItem}));
        const menuElements = menuItemsList.map((item, index) => 
            <ToggleMenuItem {...item} handleClick={()=> this.handleClick(index)} />);

        return (
            <ul className="toggle-menu">
                {menuElements}
            </ul>
        )
    }
}

export default ToggleMenu;