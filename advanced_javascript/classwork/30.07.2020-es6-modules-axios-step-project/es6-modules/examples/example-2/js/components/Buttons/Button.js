class Button {
    constructor({tag, className, text}) {
        this.className = `btn ${className}`;
        this.tag = tag;
        this.text = text;
    }
    
    render() {
        const button = document.createElement(this.tag);
        button.className = this.className;
        button.textContent = this.text;
        this.elem = button;
        return button;
    }
}

export default Button;