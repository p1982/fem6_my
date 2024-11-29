import React, {useReducer} from 'react';

import {initialState} from "./initialState";
import {changeStyle} from "./changeStyle";
// import {useReducer} from "../../../../shared/hooks/useReducer";

import FontPreview from "../FontPreview";
import FontDisplaySetting from "../FontDisplaySetting";

const FontDisplay = ()=> {

    const [font, dispatch] = useReducer(changeStyle, initialState);

    const actions = {
        toggleBold: ()=> dispatch({type: "TOGGLE_BOLD"}),
        toggleItalic: ()=> dispatch({type: "TOGGLE_ITALIC"})
    };

    return(
        <>
        <FontPreview font={font} />
        <FontDisplaySetting font={font} actions={actions} />
        </>
    )
}

export default FontDisplay;