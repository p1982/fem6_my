import React, { useReducer } from 'react'
import {changeSlide} from './changeSlide'

import {MOVELEFT, MOVERIGHT} from "./actions";

const Slider = (props) => {
    const slides = props.map(img => ({...img, active:false}))
    slides[0].active = true;
    
    const [slideList, dispatch] = useReducer(changeSlide, slides)

    const imgSlideElem = slideList.map(({text,src}) => {
        return (
            <div className=""> <img src={src} />
            <p>{text}</p></div>
        )
    });

    return (
        <div>
           <button onClick={() => dispatch(MOVELEFT)}> left </button>
            <div>{imgSlideElem}</div>
            <button onClick={() => dispatch(MOVERIGHT)}> right </button>
        </div>
    );
} 
    
export default Slider;       