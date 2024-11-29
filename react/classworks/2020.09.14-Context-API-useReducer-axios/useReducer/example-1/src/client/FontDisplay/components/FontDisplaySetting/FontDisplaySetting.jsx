import React, {useState} from 'react';

const FontDisplaySetting = ({font, actions})=> {
    const {bold, italic} = font;
    const {toggleBold, toggleItalic} = actions;
    
    return (
        <div>
           <label for="">Жирный</label>
            <input type="checkbox" name="bold" value={bold}
                checked={bold} onChange={toggleBold} />
        
           <label for="">Наклонный</label>
            <input type="checkbox" name="italic" value={italic}
                checked={italic} onChange={toggleItalic} />
        </div>
    )
}

export default FontDisplaySetting;