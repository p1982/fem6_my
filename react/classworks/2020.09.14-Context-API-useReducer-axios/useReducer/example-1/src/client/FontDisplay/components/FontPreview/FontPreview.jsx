import React from 'react';
import "./FontPreview.css";

const FontPreview = ({font})=> {
    const {bold, italic} = font;
    const styles = {
        fontWeight: (bold) ? "bold" : "normal",
        fontStyle: (italic) ? "italic" : "normal"
    };

    return <h2 className="font-preview" style={styles}>
                Самый ленивый студент - это ...
            </h2>;
}

export default FontPreview;