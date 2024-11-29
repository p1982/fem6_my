import Button from "./Button.js";

class  ReverseButton extends Button {
    constructor(props) {
        const {secondaryText, ...parentProps} = props;
        super(props);
        this.secondaryText = secondaryText;
    }
    
    handleClick = ()=> {
        const {text, secondaryText, elem} = this;
        elem.textContent = (elem.textContent === text) ? secondaryText : text;
    }
    
    render(){
        const reverseButton = super.render();
        reverseButton.addEventListener("click", this.handleClick);
        return reverseButton;
    }
}

export default ReverseButton;