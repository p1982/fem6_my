export const changeStyle = (state, {type, value})=> {
    switch(type) {
        case "TOGGLE_BOLD":
            return {...state, bold: !state.bold}
        case "TOGGLE_ITALIC":
            return {...state, italic: !state.italic}
        default: 
            return new Error("unknown action");
    } 
} 