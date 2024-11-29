import React ,{Component} from 'react'
import "./ToggleMenu.css";

import ToggleMenuItem from "../ToggleMenuItem/Index";

class ToggleMenu extends Component{
    state = {
        activeIndex: -1
    };

    handleClick = (idx) => {
        this.setState({
            activeIndex: idx
        });
    }

    render(){
        const {menuList} = this.props;
        const {activeIndex} = this.state;
        const {handleClick} = this;
        const menuListItems = menuList.map((text, index) => ({text, active: index === activeIndex}))
        const menuElements = menuList.map((item, index) => 
        <ToggleMenuItem {...item} handleClick={() => handleClick(index)} />)

        return (
            <ul className="toggle-menu">
                {menuElements}
            </ul>
        )
    }
}
export default ToggleMenu